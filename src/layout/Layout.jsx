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
    const isSearchWithId = /^\/search\/[^/]+(?:\/.*)?$/.test(location.pathname);
    const isSearchWithOnlyId = /^\/search\/[^/]+$/.test(location.pathname);
    const isSearchWithIdAndTracks = /^\/search\/[^/]+\/tracks$/.test(location.pathname);
    const isSearchWithIdAndPlaylists = /^\/search\/[^/]+\/playlists$/.test(location.pathname);
    const isSearchWithIdAndAlbums = /^\/search\/[^/]+\/albums$/.test(location.pathname);
    const isSearchWithIdAndArtists = /^\/search\/[^/]+\/artists$/.test(location.pathname);
    if (isSearchPage) {
        pathSegments = location.pathname.split('/');
    }
    const [query,setQuery] = useState(id);
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
    useEffect(()=>{
        if(query){
            navigate(`/search/${query}${pathSegments[3] ? "/" + pathSegments[3] : ""}`)
        }else if(isSearchPage && query == ""){
            navigate(`/search`)
        }
    },[debouncedSearchTerm])
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

    function set_dis(){
        setIsdisplay(!isdisplay)
    }
    return (
        <>

            {loading ? <div className="preloader"><img src="/logo.png" alt="" /></div> : <div></div>}

            <div className="body">
                <aside>
                    <div className="top_aside">
                        <Link to={"/"} className={`aside_part ${location.pathname == '/' && "active_aside_part"}`}>
                            <img src="/home_icon.png" alt="" className="aside_icon" />
                            <img src="/home_active_icon.png" alt="" className="aside_icon aside_icon_two" />
                            <p className="aside_text">Главная</p>
                        </Link>
                        <Link to={query ? `/search/${query}` : "/search"} className={`aside_part ${isSearchPage && "active_aside_part"}`}>
                            <img src="/search_icon.png" alt="" className="aside_icon" />
                            <img src="/search_active_icon.png" alt="" className="aside_icon aside_icon_two" />
                            <p className="aside_text">Поиск</p>
                        </Link>
                    </div>
                    <div className="bottom_aside">
                        <div className="aside_part_two">
                            <div className="aside_part" onClick={hidingAside}>
                                <img src="/library_active_icon.png" alt="" className="aside_icon library_icon_aside" />
                                <img src="/library_icon.png" alt="" className="aside_icon aside_icon_two library_icon_aside_two" />
                                <p className="aside_text">Моя медиатека</p>
                            </div>
                            <button className="add_playlist">
                                <img src="/plus_icon.webp" className="icon_aside invert" />
                            </button>
                        </div>
                        <div className="aside_buttons">
                            <button className="aside_button">Плейлисты</button>
                            <button className="aside_button">Исполнители</button>
                            <button className="aside_button">Альбомы</button>
                        </div>
                        <div className="aside_buttons buttons_listened">
                            <button className="add_playlist">
                                <img src="/search_icon.png" className="icon_aside search_aside_icon" />
                            </button>
                            <div className="aside_listened">
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
                        <header>
                            <div className="first">
                                <div className="arrows">

                                    <img className="left" src="/left_arrow.svg" alt="" onClick={goBack} />

                                    <img className="right" src="/left_arrow.svg" alt="" onClick={goForward} />
                                    <div className="search_box" style={isSearchPage ? { display: "block" } : { display: "none" }}>
                                        <input type="text" name="" id="" className="search_input" placeholder="Что хочешь включить ?" value={query} onChange={(e)=>setQuery(e.target.value)}/>
                                    </div>
                                </div>

                                <div className="additional_features">

                                    <p className="premium_text" style={isSearchPage ? { display: "none" } : { display: "block" }}><Link to={"/premium"} style={{color: "#000"}}>Узнать больше о Premium</Link></p>

                                    <p className="install_text"> <span><img src="/download.svg" alt="" /></span><a href="https://open.spotify.com/download">Установить приложение</a></p>

                                    <div className="bell">
                                        <img src="/bell.svg" alt="" />
                                    </div>

                                    <div onClick={set_dis} className="person">
                                        <img src={user && user.images && user.images[0] ? user.images[0].url : "/person.svg"} alt="" />
                                    </div>
                                </div>

                                <div style={isdisplay ? {display: "flex"} : {display: "none"}} className="modal">
                                    <div className="modal_dialog">
                                        <ul>
                                            <li><Link to={"/user"}>Профиль</Link></li>
                                            <li><Link>Настройки</Link></li>
                                            <li className="line"></li>
                                            <li style={{color: "white"}}>Выйти</li>
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
                                    <a href="#">О нас</a>
                                    <a href="#">Вакансии</a>
                                    <a href="#">For the Record</a>
                                </div>
                                <div className="item">
                                    <span>Сообщества</span>
                                    <a href="#">Для исполнителей</a>
                                    <a href="#">Для разработчиков</a>
                                    <a href="#">Реклама</a>
                                    <a href="#">Для инвесторов</a>
                                    <a href="#">Для вендоров</a>
                                </div>
                                <div className="item">
                                    <span>Полезные ссылки</span>
                                    <a href="#">Справка</a>
                                    <a href="#">Бесплатное мобильное <br /> приложение</a>
                                </div>
                                <div className="item">
                                    <span>Планы Spotify</span>
                                    <a href="#">Индивидуальная <br /> подписка Spotify <br /> Premium</a>
                                    <a href="#">Premium для двоих</a>
                                    <a href="#">Premium для семьи</a>
                                    <a href="#">Premium для студентов</a>
                                    <a href="#">Бесплатная версия Spotify</a>
                                </div>
                                <div className="items">
                                    <img className="icons" src="/insta.svg" alt="" />
                                    <img className="icons" src="/twitter.svg" alt="" />
                                    <img className="icons" src="/facebook.svg" alt="" />
                                </div>
                            </div>
                            <div className="hr"></div>
                            <span className="yunus">© 2024 Spotify AB</span>
                        </footer>
                    </div>
                </main>
            </div>

            <div className="player">
                <div className="player_hidden" style={data.length > 0 ? { display: "none" } : { display: "block" }}></div>
                <div className="player_left">
                    <img src={data.length > 0
                        ? (data[ind].track?.album?.images[0]?.url || data[ind]?.album?.images[0]?.url || "/notFound.png")
                        : ""} className="player_left_img" />
                    <div className="player_left_text_box">
                        <p className="player_song_name">{data.length > 0 ? data[ind].track?.name || data[ind].name : ""}</p>
                        <p className="player_song_artist">{data.length > 0 ? data[ind].track?.artists[0].name || data[ind].artists[0].name : ""}</p>
                    </div>
                    <img src="/plus.svg" className="player_icon_tilav" style={{ padding: "4px" }} />
                </div>
                <div className="player_center">
                    <div className="player_center_interface">
                        <img src="/random_button.png" alt="" className="player_icon_tilav" onClick={randomSong} />
                        <img src="/back_song.png" alt="" className="player_icon_tilav" onClick={previousSong} />
                        <img src={played ? "/play.png" : "/stop.png"} alt="" className="player_icon_tilav normal_size_img_player" onClick={playsongpause} />
                        <img src="/forward_song.png" alt="" className="player_icon_tilav" onClick={nextSong} />
                        <img src={isLooping ? "/loop_active.svg" : "/loop.png"} alt="" className="player_icon_tilav" onClick={Loop} />
                    </div>
                    <div className="player_center_inteface_duration">
                        <p className="time_duration">{isNaN(currentDuration) ? "0:00" : BeautifulTime(currentDuration)}</p>
                        <div className="player_range_duration">
                            <div className="range_track" style={{ width: `${progressPrecent}%` }}></div>
                            <input type="range" name="" id="" value={progressPrecent} min={0} max={100} className="duration_range" onInput={setProgress} />
                        </div>
                        <p className="time_duration">{isNaN(duration) ? "0:00" : BeautifulTime(duration)}</p>
                    </div>
                </div>
                <div className="player_right">
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