import React from "react";

function TrackArtist({ data, index, func, full_arr, currentIndex, currentTrackId }) {
    function BeautifulTime(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const remainingSeconds = totalSeconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };
    return (
        <>
            <div className="trek_down" onClick={() => func(data.preview_url, full_arr.tracks, index, data.id)}>
                <div className="trek_down_box">
                    <div className="left">
                        {currentIndex === index && currentTrackId == data.id ? (
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
                                <img src={data.album.images[0].url} alt="" />
                            </div>
                            <div className="trek_info">
                                <p className="title" style={currentIndex == index  && currentTrackId == data.id  ? { color: "#19B950" } : { color: "white" }}>{data.name}</p>
                                <p className="autor">{data.artists[0].name}</p>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <p></p>
                        <p>{data.album.name}</p>
                        <p className="end_text_go">{BeautifulTime(Math.floor(data.duration_ms))}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrackArtist