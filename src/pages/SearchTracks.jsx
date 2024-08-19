import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
function SearchTracks() {
    const { id } = useParams();
    let [data,setData] = useState([])
    let token = localStorage.getItem('token')
    useEffect(() => {
        const fetchPlaylistData = async () => {
            try {
                fetch('https://api.spotify.com/v1/search?q=' + id + '*&type=album,artist,playlist,track&limit=50&offset=0&market=UZ', {
                    authority: "api.spotify.com",
                    method: "GET",
                    path: "/v1/search?q=ona*&type=album,artist,playlist,track&limit=50&offset=0&market=UZ",
                    scheme: "https",
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': "application/json; charset=utf-8"
                    }
                })
                    .then(response => response.json()) 
                    .then((result) => {
                        setData(result.tracks)
                    }
                    )
            } catch (error) {
                console.error('Error fetching playlist data:', error);
            }
        };
        fetchPlaylistData();
    }, []);
    return (
        <>
            <div className=''>
                {/* Avaz */}
                <div className="trek_midle">
                    <div className="trek_midle_box">
                        <div className="midle_box_up">
                            <div className="left">
                                <p>#</p>
                                <p>Название</p>
                            </div>
                            <div className="right">
                                <p></p>
                                <p>Альбом</p>
                                <div>
                                    <img className="time" src="/time.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="midle_line"></div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default SearchTracks;