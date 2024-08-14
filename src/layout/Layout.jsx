import React, { useState } from "react";
import AsideItem from "../components/AsideItem";

function Layout({ children }) {
    function hidingAside() {
        let aside = document.querySelector('aside')
        aside.classList.toggle("hide_aside")
    }

    const [First_bg, setFirst_bg] = useState("white")
    const [First_a, setFirst_a] = useState("black")
    const [Second_bg, setSecond_bg] = useState(" rgb(63, 63, 63)")
    const [Second_a, setSecond_a] = useState("white")
    const [Therd_bg, setTherd_bg] = useState(" rgb(63, 63, 63)")
    const [Therd_a, setTherd_a] = useState("white")

    const right_arrow_click = () => {


        if (First_bg === "white") {
            second_change()
        }
        if (Second_bg === "white") {
            therd_change()
        }
        if (Therd_bg === "white") {
        }
    }

    const left_arrow_click = () => {

        if (First_bg === "white") {
        }
        if (Second_bg === "white") {
            first_change()
        }
        if (Therd_bg === "white") {
            second_change()
        }
    }





    const first_change = () => {
        setFirst_bg("white")
        setFirst_a("black")

        setSecond_bg("rgb(63, 63, 63)")
        setTherd_bg("rgb(63, 63, 63)")
        setSecond_a("white")
        setTherd_a("white")
    }


    const second_change = () => {
        setSecond_bg("white")
        setSecond_a("black")

        setFirst_bg("rgb(63, 63, 63)")
        setTherd_bg("rgb(63, 63, 63)")
        setFirst_a("white")
        setTherd_a("white")
    }


    const therd_change = () => {
        setTherd_bg("white")
        setTherd_a("black")

        setSecond_bg("rgb(63, 63, 63)")
        setFirst_bg("rgb(63, 63, 63)")
        setSecond_a("white")
        setFirst_a("white")
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

                                    <img onClick={left_arrow_click} className="left" src="/left_arrow.svg" alt="" />

                                    <img onClick={right_arrow_click} className="right" src="/left_arrow.svg" alt="" />

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
                                <ul className="sec_ul">

                                    <li id="um" onClick={first_change} style={{ backgroundColor: First_bg }} className="cat">
                                        <a style={{ color: First_a }} className="cat_a" id="11" href="#">Всё</a>
                                    </li>


                                    <li onClick={second_change} style={{ backgroundColor: Second_bg }} className="cat">
                                        <a style={{ color: Second_a }} className="cat_a" id="22" href="#">Музыка</a>
                                    </li>


                                    <li onClick={therd_change} style={{ backgroundColor: Therd_bg }} className="cat">
                                        <a style={{ color: Therd_a }} className="cat_a" id="33" href="#">Подкасты</a>
                                    </li>
                                </ul>

                            </div>




                        </header>
                        {children}
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
            <div className="player"></div>
        </>
    )
}
export default Layout;