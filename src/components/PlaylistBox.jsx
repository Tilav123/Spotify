import React from "react";

function PlaylistBox(e) {
    console.log(e);
<div className="Playlist_box" key={e.id}>
    
    <div className="left">
        <img src="/morgen.jpg" alt="#" />
    </div>
    <div className="right">
        <p>Плейлист</p>
        <h1>Summer Dance Hits 2024</h1>
        <p className="descr">The summer needs dance hits</p>
        <div className="litle_box">
            <img src="/spotify_logo.svg" alt="" />
            <p>Spotify</p>
            <span>•</span>
            <p>1000 2300 сохранений</p>
            <span>•</span>
            <p>120 треков,</p>
            <p className="sec_span">примерно 5 часов</p>
        </div>
    </div>
    </div>
    
}

export default PlaylistBox