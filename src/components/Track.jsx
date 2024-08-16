import React from "react";

function Track({data, index}) {
    console.log(index);
    
    return (
        <>
            <div className="trek_down">
                <div className="trek_down_box">
                    <div className="left">
                        <p>{index+1}</p>
                        <div className="trek">
                            <div className="image">
                                <img src={data.track.album.images[0].url} alt="" />
                            </div>
                            <div className="trek_info">
                                <p className="title">{data.track.name}</p>
                                <p className="autor">{data.track.artists[0].name}</p>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <p>{data.track.album.name}</p>
                        <p>{data.track.album.release_date}</p>
                        <p>{Math.floor(data.track.duration_ms/60)}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Track