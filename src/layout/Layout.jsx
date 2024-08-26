import React, { useEffect, useState } from "react";
import AsideItem from "../components/AsideItem";
import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDebounce } from "@uidotdev/usehooks";
import { useNavigate } from "react-router-dom";
function Layout({ data, ind, func, user }) {
    const location = useLocation();
    let pathSegments;
    const { id } = useParams();
    console.log(user);
    const isSearchPage = location.pathname.startsWith('/search');
    const isPremiumPage = location.pathname.startsWith('/premium');
    const isSearchWithId = /^\/search\/[^/]+(?:\/.*)?$/.test(location.pathname);
    const isSearchWithOnlyId = /^\/search\/[^/]+$/.test(location.pathname);
    const isSearchWithIdAndTracks = /^\/search\/[^/]+\/tracks$/.test(location.pathname);
    const isSearchWithIdAndPlaylists = /^\/search\/[^/]+\/playlists$/.test(location.pathname);
    const isSearchWithIdAndAlbums = /^\/search\/[^/]+\/albums$/.test(location.pathname);
    const isSearchWithIdAndArtists = /^\/search\/[^/]+\/artists$/.test(location.pathname);
    if (isSearchPage) {
        pathSegments = location.pathname.split('/');
    }
    const [isMobile, setIsMobile] = useState(false)
    const [query, setQuery] = useState(id);
    const debouncedSearchTerm = useDebounce(query, 600);
    const navigate = useNavigate();
    let [isLooping, setIsLooping] = useState(false)
    let [progressPrecent, setProgressPrecent] = useState(0)
    let [duration, setDuration] = useState(0)
    let [currentDuration, setCurrentDuration] = useState(0)
    let [currentVolume, setCurrentVolume] = useState(null)
    let [isdisplay, setIsdisplay] = useState(false)
    function hidingAside() {
        let aside = document.querySelector('aside')
        aside.classList.toggle("hide_aside")
    }
    console.log(data);
    useEffect(() => {
        if (query && pathSegments) {
            navigate(`/search/${query}${pathSegments[3] ? "/" + pathSegments[3] : ""}`)
        } else if (isSearchPage && query == "") {
            navigate(`/search`)
        }
    }, [debouncedSearchTerm])
    const goBack = () => {
        window.history.back();
    };
    const goForward = () => {
        window.history.forward();
    };
    let [played, setPlayed] = useState(false)
    function playsong() {
        setPlayed(true)
    }
    function pausesong() {
        setPlayed(false)
    }
    function BeautifulTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
    if (data.hasOwnProperty('items')) {
        data = data.items
    }
    function playsongpause() {
        const audioElement = document.querySelector('audio');
        if (played) {
            audioElement.pause();
        } else {
            audioElement.play();
        }
    }
    function Loop() {
        const audioElement = document.querySelector('audio');
        audioElement.loop = !isLooping
        setIsLooping(!isLooping)
    }
    function updateProgress(e) {
        const { duration, currentTime } = e.target
        const progress = (currentTime / duration) * 100
        setProgressPrecent(progress)
        setDuration(Math.floor(duration))
        setCurrentDuration(Math.floor(currentTime))
    }
    function setProgress(e) {
        const audioElement = document.querySelector('audio');
        let duration = audioElement.duration
        audioElement.currentTime = (e.target.value / 100) * duration
        setCurrentDuration(Math.floor(audioElement.currentTime))
    }
    function nextSong() {
        func(data[ind + 1].track?.preview_url || data[ind + 1].preview_url, data, ind + 1, data[ind + 1].track?.id || data[ind + 1].id)
    }
    function previousSong() {
        func(data[ind - 1].track?.preview_url || data[ind - 1].preview_url, data, ind - 1, data[ind - 1].track?.id || data[ind - 1].id)
    }
    function randomSong() {
        let randomNumber = Math.floor(Math.random() * (data.length - 0 + 1)) + 0;
        func(data[randomNumber].track?.preview_url || data[randomNumber].preview_url, data, randomNumber, data[randomNumber].track?.id || data[randomNumber].id)
    }
    function setVolume(e) {
        const audioElement = document.querySelector('audio');
        audioElement.volume = e.target.value / 100
        e.target.value = audioElement.volume * 100
        setCurrentVolume(audioElement.volume * 100)
    }

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    function set_dis() {
        setIsdisplay(!isdisplay)
    }
    return (
        <>

            {loading ? <div className="preloader"><img src="/logo.png" alt="" /></div> : <div></div>}

            <div className="body max-[996px]:p-0 max-[996px]:h-full">
                <aside className="max-[1350px]:w-[72px] max-[996px]:hidden">
                    <div className="top_aside">
                        <Link to={"/"} className={`aside_part max-[1350px]:justify-center ${location.pathname == '/' && "active_aside_part"}`}>
                            <img src="/home_icon.png" alt="" className="aside_icon" />
                            <img src="/home_active_icon.png" alt="" className="aside_icon aside_icon_two" />
                            <p className="aside_text max-[1350px]:hidden">Главная</p>
                        </Link>
                        <Link to={query ? `/search/${query}` : "/search"} className={`aside_part max-[1350px]:justify-center ${isSearchPage && "active_aside_part"}`}>
                            <img src="/search_icon.png" alt="" className="aside_icon" />
                            <img src="/search_active_icon.png" alt="" className="aside_icon aside_icon_two" />
                            <p className="aside_text max-[1350px]:hidden">Поиск</p>
                        </Link>
                    </div>
                    <div className="bottom_aside">
                        <div className="aside_part_two">
                            <div className="aside_part max-[1350px]:justify-center" onClick={hidingAside}>
                                <img src="/library_active_icon.png" alt="" className="aside_icon library_icon_aside max-[1350px]:hidden" />
                                <img src="/library_icon.png" alt="" className="aside_icon aside_icon_two library_icon_aside_two max-[1350px]:block" />
                                <p className="aside_text max-[1350px]:hidden">Моя медиатека</p>
                            </div>
                            <button className="add_playlist max-[1350px]:hidden">
                                <img src="/plus_icon.webp" className="icon_aside invert" />
                            </button>
                        </div>
                        <div className="aside_buttons max-[1350px]:hidden">
                            <button className="aside_button max-[1350px]:hidden">Плейлисты</button>
                            <button className="aside_button max-[1350px]:hidden">Исполнители</button>
                            <button className="aside_button max-[1350px]:hidden">Альбомы</button>
                        </div>
                        <div className="aside_buttons buttons_listened max-[1350px]:hidden">
                            <button className="add_playlist max-[1350px]:hidden">
                                <img src="/search_icon.png" className="icon_aside search_aside_icon" />
                            </button>
                            <div className="aside_listened max-[1350px]:hidden">
                                <p className="">Недавно прослушано</p>
                                <img src="/aside_unknown_shit.png" alt="" className="listened_icon" />
                            </div>
                        </div>
                        <div className="aside_playlists">
                            <AsideItem></AsideItem>
                            <AsideItem></AsideItem>
                            <AsideItem></AsideItem>
                        </div>
                    </div>
                </aside>
                <main style={location.pathname === '/' ? { background: 'linear-gradient(180deg, #159b44 0%, #121212 30%)' } : {}}>
                    <div className="container">
                        <header className="">
                            <div className="first">
                                <div className="arrows">

                                    <img className="left" src="/left_arrow.svg" alt="" onClick={goBack} />

                                    <img className="right" src="/left_arrow.svg" alt="" onClick={goForward} />
                                    <div className="search_box" style={isSearchPage ? { display: "block" } : { display: "none" }}>
                                        <input type="text" name="" id="" className="search_input" placeholder="Что хочешь включить ?" value={query} onChange={(e) => setQuery(e.target.value)} />
                                    </div>
                                </div>

                                <div className="additional_features">

                                    <p className="premium_text" style={isSearchPage ? { display: "none" } : { display: "block" }}><Link to={"/premium"} style={{ color: "#000" }}>Узнать больше о Premium</Link></p>

                                    <p className="install_text"> <span><img src="/download.svg" alt="" /></span><a href="https://open.spotify.com/download">Установить приложение</a></p>

                                    <div className="bell">
                                        <img src="/bell.svg" alt="" />
                                    </div>

                                    <div onClick={set_dis} className="person">
                                        <img src={user && user.images && user.images[0] ? user.images[0].url : "/person.svg"} alt="" />
                                    </div>
                                </div>

                                <div style={isdisplay ? { display: "flex" } : { display: "none" }} className="modal">
                                    <div className="modal_dialog">
                                        <ul>
                                            <li><Link to={"/user"}>Профиль</Link></li>
                                            <li><Link>Настройки</Link></li>
                                            <li className="line"></li>
                                            <li style={{ color: "white" }}>Выйти</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {isSearchWithId && <div className="sec">
                                <ul className="sec_ul">

                                    <li id={isSearchWithOnlyId ? "um" : ""} className="cat">
                                        <Link to={`/search/${id}`} className="cat_a" id="11" href="#">Всё</Link>
                                    </li>
                                    <li id={isSearchWithIdAndPlaylists ? "um" : ""} className="cat">
                                        <Link to={`/search/${id}/playlists`} className="cat_a" id="22" href="#">Плейлисты</Link>
                                    </li>
                                    <li id={isSearchWithIdAndAlbums ? "um" : ""} className="cat">
                                        <Link to={`/search/${id}/albums`} className="cat_a" id="33" href="#">Альбомы</Link>
                                    </li>
                                    <li id={isSearchWithIdAndTracks ? "um" : ""} className="cat">
                                        <Link to={`/search/${id}/tracks`} className="cat_a" id="33" href="#">Песни</Link>
                                    </li>
                                    <li id={isSearchWithIdAndArtists ? "um" : ""} className="cat">
                                        <Link to={`/search/${id}/artists`} className="cat_a" id="33" href="#">Артисты</Link>
                                    </li>
                                </ul>
                            </div>}
                        </header>
                        <Outlet></Outlet>
                        <footer>
                            <div className="cant">
                                <div className="item">
                                    <span>Компания</span>
                                    <a href="https://www.spotify.com/uz/about-us/contact/">О нас</a>
                                    <a href="https://www.lifeatspofity.com">Вакансии</a>
                                    <a href="https://www.newsroom.spotify.com">For the Record</a>
                                </div>
                                <div className="item">
                                    <span>Сообщества</span>
                                    <a href="https://artists.spotify.com">Для исполнителей</a>
                                    <a href="https://developer.spotify.com">Для разработчиков</a>
                                    <a href="https://ads.spotify.com">Реклама</a>
                                    <a href="https://investors.spotify.com">Для инвесторов</a>
                                    <a href="https://spotifyforvendors.com">Для вендоров</a>
                                </div>
                                <div className="item">
                                    <span>Полезные ссылки</span>
                                    <a href="https://support.spotify.com">Справка</a>
                                    <a href="https://www.spotify.com/uz/download">Бесплатное мобильное <br /> приложение</a>
                                </div>
                                <div className="item">
                                    <span>Планы Spotify</span>
                                    <a href="https://www.spotify.com/uz/premium/?ref=spotifycom_footer_premium_individual">Индивидуальная <br /> подписка Spotify <br /> Premium</a>
                                    <a href="https://www.spotify.com/uz/duo/?ref=spotify_footer_premium_duo">Premium для двоих</a>
                                    <a href="https://www.spotify.com/uz/family/?ref=spotifycom_footer_premium_family">Premium для семьи</a>
                                    <a href="https://www.spotify.com/uz/student/?ref=spotifycom_footer_premium_student">Premium для студентов</a>
                                    <a href="https://www.spoftify.com/uz/free/?ref=spotifycom_footer_free">Бесплатная версия Spotify</a>
                                </div>
                                <div className="items">
                                    <a href="https://instagram.com/spotify">

                                        <img className="icons" src="/insta.svg" alt="" />

                                    </a>

                                    <a href="https://twitter.com/spotify">

                                        <img className="icons" src="/twitter.svg" alt="" />

                                    </a>

                                    <a href="https://facebook.com/Spotify">

                                        <img className="icons" src="/facebook.svg" alt="" />

                                    </a>
                                </div>
                            </div>
                            <div className="hr"></div>
                            <span className="yunus">© 2024 Spotify AB</span>
                        </footer>
                    </div>
                </main>
            </div>
            <div className="mini_mobile_player  max-[996px]:flex">
                <div className="mobile_background" onClick={() => setIsMobile(!isMobile)}></div>
                <div className="mobile_info" onClick={() => setIsMobile(!isMobile)}>
                    <img src={data.length > 0
                        ? (data[ind].track?.album?.images[0]?.url || data[ind]?.album?.images[0]?.url || "/notFound.png")
                        : ""} alt="" className="mobile_image" />
                    <div>
                        <p className="mobile_name">{data.length > 0 ? data[ind].track?.name || data[ind].name : "nothing"}</p>
                        <p className="mobile_artist">{data.length > 0 ? data[ind].track?.artists[0].name || data[ind].artists[0].name : "nothing"}</p>
                    </div>
                </div>
                <img src={played ? "/pause_mobile.png" : "/play_mobile.png"} className="mobile_playpause" onClick={playsongpause} />
            </div>
            <div className="mini_mobile_menu max-[996px]:flex">
                <Link to={`/`} className={`mobile_link max-[996px]:justify-center max-[996px]:gap-[5px] aside_part ${location.pathname == '/' && "active_aside_part"}`}>
                    <img src="/home_icon.png" alt="" className="aside_icon w-[24px] h-[24px]" />
                    <img src="/home_active_icon.png" alt="" className="aside_icon aside_icon_two w-[24px] h-[24px]" />
                    <p className="aside_text text-[10px]">Главная</p></Link>
                <Link to={query ? `/search/${query}` : "/search"} className={`mobile_link aside_part max-[996px]:justify-center max-[996px]:gap-[5px] ${isSearchPage && "active_aside_part"}`}>
                    <img src="/search_icon.png" alt="" className="aside_icon w-[24px] h-[24px]" />
                    <img src="/search_active_icon.png" alt="" className="aside_icon aside_icon_two w-[24px] h-[24px]" />
                    <p className="aside_text text-[10px]">Поиск</p>
                </Link>
                <Link to={``} className="mobile_link aside_part max-[996px]:justify-center max-[996px]:gap-[5px]">
                    <img src="/library_icon.png" alt="" className="aside_icon w-[24px] h-[24px]" />
                    <img src="/library_active_icon.png" alt="" className="aside_icon aside_icon_two w-[24px] h-[24px]" />
                    <p className="aside_text text-[10px]">Моя медиатека</p></Link>
                <Link to={"/premium"} className={`mobile_link aside_part max-[996px]:justify-center max-[996px]:gap-[5px] ${isPremiumPage && "active_aside_part"}`}>
                    <img src="/white_spotify_logo.png" alt="" className="aside_icon w-[24px] h-[24px]" />
                    <img src="/white_spotify_logo.png" alt="" className="aside_icon aside_icon_two w-[24px] h-[24px]" />
                    <p className="aside_text text-[10px]">Premium</p>
                </Link>
            </div>
            <div className="player max-[996px]:fixed max-[996px]:h-[100vh] max-[996px]:bottom-0 max-[996px]:z-[100] max-[996px]:flex-col max-[996px]:p-[15px] max-[996px]:gap-[35px] max-[996px]:overflow-y-auto max-[996px]:justify-start" style={isMobile ? { bottom: '0' } : { bottom: '-200%' }}>
                <div className="player_hidden" style={data.length > 0 ? { display: "none" } : { display: "block" }}></div>
                <div className="player_before_left hidden max-[996px]:flex">
                    <div className="arrow" onClick={() => setIsMobile(!isMobile)}></div>
                    <p className="player_song_name max-[996px]:text-[13px]">{data.length > 0 ? data[ind].track?.name || data[ind].name : ""}</p>
                    <div className="options"></div>
                </div>
                <div className="player_left max-[996px]:w-full max-[996px]:flex max-[996px]:justify-center max-[996px]:flex-col max-[996px]:gap-[35px] max-[996px]:h-auto">
                    <img src={data.length > 0
                        ? (data[ind].track?.album?.images[0]?.url || data[ind]?.album?.images[0]?.url || "/notFound.png")
                        : ""} className="player_left_img max-[996px]:w-[85%] max-[996px]:h-auto max-[996px]:max-w-[400px]" />
                    <div className="flex gap-1 max-[996px]:w-full max-[996px]:justify-between max-[996px]:items-center">
                        <div className="player_left_text_box">
                            <p className="player_song_name max-[996px]:text-[20px]">{data.length > 0 ? data[ind].track?.name || data[ind].name : ""}</p>
                            <p className="player_song_artist max-[996px]:text-[18px]">{data.length > 0 ? data[ind].track?.artists[0].name || data[ind].artists[0].name : ""}</p>
                        </div>
                        <img src="/plus.svg" className="player_icon_tilav max-[996px]:h-[35px] max-[996px]:w-[35px]" style={{ padding: "4px" }} />
                    </div>
                </div>
                <div className="player_center max-[996px]:flex max-[996px]:flex-col-reverse max-[996px]:w-full max-[996px]:gap-[45px]">
                    <div className="player_center_interface max-[996px]:gap-0 max-[996px]:justify-between max-[996px]:w-full">
                        <img src="/random_button.png" alt="" className="player_icon_tilav max-[996px]:w-[34px] max-[996px]:h-[32px]" onClick={randomSong} />
                        <img src="/back_song.png" alt="" className="player_icon_tilav max-[996px]:w-[34px] max-[996px]:h-[32px]" onClick={previousSong} />
                        <img src={played ? "/play.png" : "/stop.png"} alt="" className="player_icon_tilav normal_size_img_player max-[996px]:w-[56px] max-[996px]:h-[56px]" onClick={playsongpause} />
                        <img src="/forward_song.png" alt="" className="player_icon_tilav max-[996px]:w-[34px] max-[996px]:h-[32px]" onClick={nextSong} />
                        <img src={isLooping ? "/loop_active.svg" : "/loop.png"} alt="" className="player_icon_tilav max-[996px]:w-[34px] max-[996px]:h-[32px]" onClick={Loop} />
                    </div>
                    <div className="player_center_inteface_duration max-[1300px]:w-[475px] max-[996px]:w-full max-[996px]:relative">
                        <p className="time_duration max-[996px]:absolute max-[996px]:bottom-[-30px] max-[996px]:left-0">{isNaN(currentDuration) ? "0:00" : BeautifulTime(currentDuration)}</p>
                        <div className="player_range_duration max-[996px]:grow">
                            <div className="range_track" style={{ width: `${progressPrecent}%` }}></div>
                            <input type="range" name="" id="" value={progressPrecent} min={0} max={100} className="duration_range" onInput={setProgress} />
                        </div>
                        <p className="time_duration max-[996px]:absolute max-[996px]:bottom-[-30px] max-[996px]:right-0">{isNaN(duration) ? "0:00" : BeautifulTime(duration)}</p>
                    </div>
                </div>
                <div className="player_right max-[996px]:hidden">
                    <img src="/download_icon.png" alt="" className="player_icon_tilav mini_size_img_player" />
                    <img src="/volume_icon.png" alt="" className="player_icon_tilav mini_size_img_player" />
                    <div className="player_range_duration" style={{ width: "90px" }}>
                        <div className="range_track" style={currentVolume == null ? { width: "100%" } : { width: `${currentVolume}%` }}></div>
                        <input type="range" name="" id="" min={0} max={100} className="duration_range" onInput={setVolume} defaultValue={100} />
                    </div>
                    <img src="/full_screen.png" alt="" className="player_icon_tilav" />
                </div>
            </div>
            <audio src="" onPlay={playsong} onPause={pausesong} onTimeUpdate={updateProgress} onEnded={nextSong}></audio>
        </>
    )
}
export default Layout;