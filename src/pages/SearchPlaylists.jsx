import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BaseBlocks from "../components/Album";
function SearchPlaylists() {
    const { id } = useParams();
    let [data, setData] = useState([])
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
                        setData(result.playlists.items)
                    }
                    )
            } catch (error) {
                console.error('Error fetching playlist data:', error);
            }
        };
        fetchPlaylistData();
    }, []);

    console.log(data);


    return (
        <>
            <div className=''>
                <div className="box">
                    <div className="item-box" style={{ flexWrap: "wrap", justifyContent: "space_between", gap: "8pxpx" }}>
                        {data.map((item, index) => <BaseBlocks key={index} type={"playlist"} arr={item}></BaseBlocks>)}
                    </div>
                </div>

            </div>
        </>
    )
}
export default SearchPlaylists;