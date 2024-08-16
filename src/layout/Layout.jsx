import React, { useState } from "react";
import AsideItem from "../components/AsideItem";
import queue_icon from "/queue_icon.png"
import speaker_icon from "/speaker_icon.png"
import volume_icon from "/volume_icon.png"
import zoom_icon from "/zoom_icon.png"
import photo_morgen from "/morgen.jpg"
import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Layout() {
    function hidingAside() {
        let aside = document.querySelector('aside')
        aside.classList.toggle("hide_aside")
    }

    const location = useLocation();
    const isSearchPage = location.pathname.startsWith('/search');

    return (
        <>
            <div className="body">
                <aside>
                    <div className="top_aside">
                        <Link to={"/"} className={`aside_part ${location.pathname == '/' && "active_aside_part"}`}>
                            <img src="./home_icon.png" alt="" className="aside_icon" />
                            <img src="./home_active_icon.png" alt="" className="aside_icon aside_icon_two" />
                            <p className="aside_text">Главная</p>
                        </Link>
                        <Link to={"/search"} className={`aside_part ${isSearchPage && "active_aside_part"}`}>
                            <img src="./search_icon.png" alt="" className="aside_icon" />
                            <img src="./search_active_icon.png" alt="" className="aside_icon aside_icon_two" />
                            <p className="aside_text">Поиск</p>
                        </Link>
                    </div>
                    <div className="bottom_aside">
                        <div className="aside_part_two">
                            <div className="aside_part" onClick={hidingAside}>
                                <img src="./library_active_icon.png" alt="" className="aside_icon library_icon_aside" />
                                <img src="./library_icon.png" alt="" className="aside_icon aside_icon_two library_icon_aside_two" />
                                <p className="aside_text">Моя медиатека</p>
                            </div>
                            <button className="add_playlist">
                                <img src="./plus_icon.webp" className="icon_aside invert" />
                            </button>
                        </div>
                        <div className="aside_buttons">
                            <button className="aside_button">Плейлисты</button>
                            <button className="aside_button">Исполнители</button>
                            <button className="aside_button">Альбомы</button>
                        </div>
                        <div className="aside_buttons buttons_listened">
                            <button className="add_playlist">
                                <img src="./search_icon.png" className="icon_aside search_aside_icon" />
                            </button>
                            <div className="aside_listened">
                                <p className="">Недавно прослушано</p>
                                <img src="./aside_unknown_shit.png" alt="" className="listened_icon" />
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

                                    <img className="left" src="/left_arrow.svg" alt="" />

                                    <img className="right" src="/left_arrow.svg" alt="" />
                                    <div className="search_box"  style={isSearchPage ? { display: "block" } : { display: "none" }}>
                                        <input type="text" name="" id="" className="search_input" placeholder="Что хочешь включить ?" />
                                    </div>
                                </div>

                                <div className="additional_features">

                                    <p className="premium_text" style={isSearchPage ? {display: "none"} : {display: "block"}}>Узнать больше о Premium</p>

                                    <p className="install_text"> <span><img src="/download.svg" alt="" /></span>  Установить приложение</p>

                                    <div className="bell">
                                        <img src="/bell.svg" alt="" />
                                    </div>

                                    <div className="person">
                                        <img src="/person.svg" alt="" />
                                    </div>
                                </div>
                            </div>

                            {location.pathname == '/' && <div className="sec">
                                <ul className="sec_ul">

                                    <li id="um" className="cat">
                                        <a className="cat_a" id="11" href="#">Всё</a>
                                    </li>


                                    <li className="cat">
                                        <a className="cat_a" id="22" href="#">Музыка</a>
                                    </li>


                                    <li className="cat">
                                        <a className="cat_a" id="33" href="#">Подкасты</a>
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

                <div className="playlist_blc">

                    <img src={photo_morgen} alt="" />

                    <div className="music_titles">

                        <p>Play It Safe</p>

                        <p>Julia Wolf</p>

                    </div>

                </div>

                <div className="music-player">

                    <div className="msc_player_icons">

                        <i className='bx bx-shuffle'></i>

                        <i className='bx bx-skip-previous'></i>

                        <i className='bx bx-play'></i>

                        <i className='bx bx-skip-next'></i>

                        <i className='bx bx-refresh'></i>

                    </div>

                    <div className="line_music_plr">

                        <p>1:06</p>

                        <div className="player_play">

                            <div className="line_music"></div>

                        </div>

                        <p>3:20</p>

                    </div>

                </div>

                <div className="player_icons">

                    <img src={queue_icon} alt="" />

                    <img src={speaker_icon} alt="" />

                    <img src={volume_icon} alt="" />

                    <div className="line_player"></div>

                    <img src={zoom_icon} alt="" />

                </div>

            </div>
            <audio src=""></audio>
        </>
    )
}
export default Layout;