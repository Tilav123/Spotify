import React, { useState } from "react";
function Search() {

    const performers = [
        {
            id: Math.random(),
            image: "/morgen.jpg",
            text: "Xcho",
            performance: "Исполнитель",
        },
        {
            id: Math.random(),
            image: "/morgen.jpg",
            text: "Xcho",
            performance: "Исполнитель",
        },
        {
            id: Math.random(),
            image: "/morgen.jpg",
            text: "Xcho",
            performance: "Исполнитель",
        },
        {
            id: Math.random(),
            image: "/morgen.jpg",
            text: "Xcho",
            performance: "Исполнитель",
        },
        {
            id: Math.random(),
            image: "/morgen.jpg",
            text: "Xcho",
            performance: "Исполнитель",
        },
    ];

    const albums = [
        {
            id: Math.random(),
            image: "/morgen.jpg",
            text: "Shape of you",
            year: "2017",
            performance: "Ed Sheeran"
        },
        {
            id: Math.random(),
            image: "/morgen.jpg",
            text: "Shape of you",
            year: "2017",
            performance: "Ed Sheeran"
        },
        {
            id: Math.random(),
            image: "/morgen.jpg",
            text: "Shape of you",
            year: "2017",
            performance: "Ed Sheeran"
        },
        {
            id: Math.random(),
            image: "/morgen.jpg",
            text: "Shape of you",
            year: "2017",
            performance: "Ed Sheeran"
        },
        {
            id: Math.random(),
            image: "/morgen.jpg",
            text: "Shape of you",
            year: "2017",
            performance: "Ed Sheeran"
        },
    ];

    function SingersPer() {

        return (
            <>

                <div className="rounded_performers">

                    <div className="rounded_ig_txts">

                        <img src="/morgen.jpg" alt="" />

                        <span>Xcho</span>

                        <p>Исполнитель</p>

                        <div className="play_btn">

                            <img src="/player.svg" alt="" />

                        </div>

                    </div>

                </div>

            </>
        )

    }

    function TriagleBlocks() {
        return (
            <>

                <div className="rounded_performers">

                    <div className="quadrilateral_ig_txts">

                        <img src="/morgen.jpg" alt="" />

                        <span>Shape of you</span>

                        <p>2017 <a href="#">Ed Sheeran</a></p>

                        <div className="play_btn_sec">

                            <img src="/player.svg" alt="" />

                        </div>

                    </div>

                </div>

            </>
        )
    }

    return (
        <>
            <div className='search_blc'>

                <div className="best_result_blc">

                    <div className="search_fir_blc">

                        <h2 className="search_texts">Лучший результат</h2>

                        <div className="first_big_blc">

                            <div className="search_image_search">

                                <img src="/morgen.jpg" alt="" />

                                <h1>Shape of you</h1>

                            </div>

                            <div className="track_search">

                                <span>Трек</span>

                                <a href="#">Ed Sheeran</a>

                            </div>

                            <div className="play_btn">

                                <img src="/player.svg" alt="" />

                            </div>

                        </div>

                    </div>

                    <div className="search_sec_blc">

                        {/* <h2 className="search_texts">Треки</h2> */}

                        <div className="search_blc_flexbox">

                            <div className="sec_small_blc">

                                <div className="search_image_texts">

                                    <div className="picture_track">

                                        <img src="/morgen.jpg" alt="" />

                                    </div>

                                    <div className="search_small_texts">

                                        <a href="#" id="first_link_search">Shape of you</a>

                                        <a href="#">Ed Sheeran</a>

                                    </div>

                                </div>

                                <div className="music_duration">

                                    <span>3:53</span>

                                </div>

                            </div>

                            <div className="sec_small_blc">

                                <div className="search_image_texts">

                                    <div className="picture_track">

                                        <img src="/morgen.jpg" alt="" />

                                    </div>

                                    <div className="search_small_texts">

                                        <a href="#" id="first_link_search">Shape of you</a>

                                        <a href="#">Ed Sheeran</a>

                                    </div>

                                </div>

                                <div className="music_duration">

                                    <span>3:53</span>

                                </div>

                            </div>

                            <div className="sec_small_blc">

                                <div className="search_image_texts">

                                    <div className="picture_track">

                                        <img src="/morgen.jpg" alt="" />

                                    </div>

                                    <div className="search_small_texts">

                                        <a href="#" id="first_link_search">Shape of you</a>

                                        <a href="#">Ed Sheeran</a>

                                    </div>

                                </div>

                                <div className="music_duration">

                                    <span>3:53</span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="performers_blc">

                    <div className="links_performers">

                        <a href="#">Исполнители</a>

                    </div>

                    <div className="performers_flexbox">

                        {performers.map((item, index) => (<SingersPer key={index} item={item}></SingersPer>))}

                    </div>

                </div>

                <div className="performers_blc">

                    <div className="links_performers">

                        <a href="#">Альбомы</a>

                    </div>

                    <div className="performers_flexbox">

                        {albums.map((item, index) => (<TriagleBlocks key={index} item={item}></TriagleBlocks>))}

                    </div>

                </div>

                <div className="performers_blc">

                    <div className="links_performers">

                        <a href="#">Плейлисты</a>

                    </div>

                    <div className="performers_flexbox">

                        {albums.map((item, index) => (<TriagleBlocks key={index} item={item}></TriagleBlocks>))}

                    </div>

                </div>

                <div className="performers_blc">

                    <div className="links_performers">

                        <a href="#">Подкасты</a>

                    </div>

                    <div className="performers_flexbox">

                        {albums.map((item, index) => (<TriagleBlocks key={index} item={item}></TriagleBlocks>))}

                    </div>

                </div>

                <div className="performers_blc">

                    <div className="links_performers">

                        <a href="#">Выпуски</a>

                    </div>

                    <div className="performers_flexbox">

                        {albums.map((item, index) => (<TriagleBlocks key={index} item={item}></TriagleBlocks>))}

                    </div>

                </div>

                <div className="performers_blc">

                    <div className="links_performers">

                        <a href="#">Профили</a>

                    </div>

                    <div className="performers_flexbox">

                        {performers.map((item, index) => (<SingersPer key={index} item={item}></SingersPer>))}

                    </div>

                </div>

            </div>
        </>
    )
}
export default Search;