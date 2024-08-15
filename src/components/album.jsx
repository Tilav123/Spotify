import React from "react";

function BaseBlocks({type, arr}) {
    
    return (
        <>            
            <div key={arr.id} className="item" id={type}>
                <div className="first">
                    <img className='song_img' src={arr.images[0].url} alt="" />
                    <div className="play" onClick={()=>playList(arr.tracks.items)}>
                        <img src="/player.svg" alt="" />
                    </div>
                </div>
                <div className="second">
                    <h2 className='song_title'>{arr.name}</h2>
                    <p className='song_autor'>{arr.description}</p>
                </div>
            </div>
        </>
    )
}
export default BaseBlocks;