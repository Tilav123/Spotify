import React from "react";
import { Link } from "react-router-dom";

function BaseBlocksSecond({type, arr}) {
    return (
        <>            
            <div className="item skeleton">
                <div className="first skeleton">
                   <Link  key={arr.id} id={type == "artists" ? "artist" : type} to={`/${type == "artists" ? "artist" : type}/${arr.id}`}><img className='song_img skeleton' src={arr?.images[0]?.url} alt="" /></Link> 
                    <div className="play skeleton" onClick={()=>playList(arr.tracks.items)}>
                        <img src="/player.svg" alt="" />
                    </div>
                </div>
                <div className="second skeleton">
                    <h2 className='song_title skeleton'>{arr.name}</h2>
                    <p className='song_autor skeleton'>{arr.description}</p>
                </div>
            </div>
        </>
    )
}
export default BaseBlocksSecond;