import React from "react";

function songs(song ,index ) {
    return (
        <>            
            <div key={index} className="item">
                <div className="first">
                    <img className='song_img' src={song.img} alt="" />
                </div>
                <div className="second">
                    <h2 className='song_title'>{song.title}</h2>
                    <p className='song_autor'>{song.autor}</p>
                </div>
            </div>
        </>
    )
}
export default songs;