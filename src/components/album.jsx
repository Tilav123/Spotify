import React from "react";

function songs(song) {
    console.log(song);
    
    return (
        <>            
            <div key={song.id} className="item">
                <div className="first">
                    <img className='song_img' src={song.images[0].url} alt="" />
                    <div className="play">
                        <img src="/player.svg" alt="" />
                    </div>
                </div>
                <div className="second">
                    <h2 className='song_title'>{song.name}</h2>
                    <p className='song_autor'>{song.description}</p>
                </div>
            </div>
        </>
    )
}
export default songs;