import React from "react";
import { Link } from "react-router-dom";

function BaseBlocks({type, arr}) {
    return (
        <>            
            <div className="item">
                <div className="first">
                   <Link  key={arr.id} id={type == "artists" ? "artist" : type} to={`/${type == "artists" ? "artist" : type}/${arr.id}`}><img className='song_img' src={arr?.images[0]?.url} alt="" /></Link> 
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