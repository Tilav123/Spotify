import React, { useState } from "react";
import PlaylistBox from "../components/PlaylistBox";


function Playlist({data}) {


    console.log(data);
    
    return (
        <>

        
    {data.map((item)=>  <PlaylistBox data={item}></PlaylistBox>)}

        


        
            

            <div className="Trek_box">
                <div className="trek_up">
                    <div className="left">
                        <img className="Playlist_play" src="/player.svg" alt="" />
                        <img src="/plus.svg" alt="" className="plus" />
                        <div className="three_dots">
                            <span>
                                •
                            </span>
                            <span>
                                •
                            </span>
                            <span>
                                •
                            </span>
                        </div>
                    </div>
                    <div className="right">
                        <p>Список</p>
                        <button>
                            <img src="/menu.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className="trek_midle">
                    <div className="trek_midle_box">
                        <div className="midle_box_up">
                            <div className="left">
                                <p>#</p>
                                <p>Название</p>
                            </div>
                            <div className="right">
                                <p>Альбом</p>
                                <p>Дата добовления</p>
                                <img className="time" src="/time.svg" alt="" />
                            </div>
                        </div>
                        <div className="midle_line"></div>
                    </div>
                </div>
                <div className="trek_down">
                    <div className="trek_down_box">
                        <div className="left">
                            <p>1</p>
                            <div className="trek">
                                <div className="image">
                                    <img src="/morgen.jpg" alt="" />
                                </div>
                                <div className="trek_info">
                                    <p className="title">Espresso</p>
                                    <p className="autor">Avaz Sharifov</p>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <p>Espresso</p>
                            <p>12.08.44</p>
                            <p>2:45</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Playlist;