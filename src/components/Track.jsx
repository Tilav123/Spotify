import React from "react";

function Track({ data, index, func, full_arr, currentIndex, currentTrackId }) {
    function BeautifulTime(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const remainingSeconds = totalSeconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };
    return (
        <>
            <div className="trek_down" onClick={() => func(data.track.preview_url, full_arr.tracks.items, index, data.track.id)}>
                <div className="trek_down_box">
                    <div className="left">
                        {currentIndex === index && currentTrackId == data.track.id ? (
                            <img
                                src="https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif"
                                className="gif"
                                alt="Equalizer Animation"
                            />
                        ) : (
                            <p className="index_of_track">{index + 1}</p>
                        )}
                        <div className="trek">
                            <div className="image">
                                <img src={data.track.album.images[0].url} alt="" />
                            </div>
                            <div className="trek_info">
                                <p className="title" style={currentIndex == index  && currentTrackId == data.track.id  ? { color: "#19B950" } : { color: "white" }}>{data.track.name}</p>
                                <p className="autor">{data.track.artists[0].name}</p>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <p></p>
                        <p>{data.track.album.name}</p>
                        <p className="end_text_go">{BeautifulTime(Math.floor(data.track.duration_ms))}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Track