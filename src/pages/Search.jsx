import React, { useState } from "react";
import BaseBlocks from "../components/Album";
function Search({data}) {
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

                <div className="box">
                    <div className="up">
                        <h1 className='category'>Плейлисты</h1>
                        <a className='show_all' href="#">Показать все</a>
                    </div>

                    <div className="item-box">
                        {data.length > 0 && data.map((item, index) => <BaseBlocks key={index} type={"playlist"} arr={item}></BaseBlocks>)}
                    </div>
                </div>

                <div className="box">
                    <div className="up">
                        <h1 className='category'>Альбомы</h1>
                        <a className='show_all' href="#">Показать все</a>
                    </div>

                    <div className="item-box">
                        {data.length > 0 && data.map((item, index) => <BaseBlocks key={index} type={"album"} arr={item}></BaseBlocks>)}
                    </div>
                </div>

                <div className="box">
                    <div className="up">
                        <h1 className='category'>Исполнители</h1>
                        <a className='show_all' href="#">Показать все</a>
                    </div>

                    <div className="item-box">
                        {data.length > 0 && data.map((item, index) => <BaseBlocks key={index} type={"artists"} arr={item}></BaseBlocks>)}
                    </div>
                </div>

            </div>
        </>
    )
}
export default Search;