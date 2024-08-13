import React, { useState } from "react";
import AsideItem from "../components/AsideItem";

function Layout({ children }) {
    function hidingAside() {
        let aside = document.querySelector('aside')
        aside.classList.toggle("hide_aside")
    }




    

    return (
        <>
            <div className="body">
                <aside>
                    <div className="top_aside">
                        <div className="aside_part active_aside_part">
                            <img src="./home_icon.png" alt="" className="aside_icon" />
                            <img src="./home_active_icon.png" alt="" className="aside_icon aside_icon_two" />
                            <p className="aside_text">Главная</p>
                        </div>
                        <div className="aside_part">
                            <img src="./search_icon.png" alt="" className="aside_icon" />
                            <img src="./search_active_icon.png" alt="" className="aside_icon aside_icon_two" />
                            <p className="aside_text">Поиск</p>
                        </div>
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
                <main>
                    <div className="container">
                        <header>
                            <div className="first">
                                <div className="arrows">

                                    <img className="left" src="/left_arrow.svg" alt="" />

                                    <img className="right" src="/left_arrow.svg" alt="" />

                                </div>

                                <div className="additional_features">

                                    <p className="premium_text">Узнать больше о Premium</p>

                                    <p className="install_text"> <span><img src="/download.svg" alt="" /></span>  Установить приложение</p>

                                    <div className="bell">
                                        <img src="/bell.svg" alt="" />
                                    </div>

                                    <div className="person">
                                        <img src="/person.svg" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="sec">
                                <ul>

                                    <li id="1" className="cat">
                                        <a className="cat_a" id="11" href="#">Всё</a>
                                    </li>


                                    <li id="2" className="cat">
                                        <a  className="cat_a" id="22" href="#">Музыка</a>
                                    </li>


                                    <li id="3" className="cat">
                                        <a className="cat_a" id="33" href="#">Подкасты</a>
                                    </li>
                                </ul>

                            </div>




                        </header>
                        {children}
                        <footer></footer>
                    </div>
                </main>
            </div>
            <div className="player"></div>
        </>
    )
}
export default Layout;