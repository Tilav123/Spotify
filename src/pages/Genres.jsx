import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BaseBlocks from "../components/Album";
function Genres() {
    const { id } = useParams();
    let [data, setData] = useState([])
    let [data_version_two, setDataVersionTwo] = useState([])
    let token = localStorage.getItem('token')
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Tilav-232007-P/SpotifyGenres/main/genres.json')
            .then(response => response.json())
            .then((result) => {
                for (let item of result) {
                    if (item.id == id) {
                        fetch(`https://api.spotify.com/v1/browse/categories/${item.id}/playlists`, {
                            headers: {
                                'Authorization': `Bearer ${token}`,
                            }
                        }
                        )
                            .then(response => response.json())
                            .then((result) => {
                                result.color = item.backgroundColor
                                console.log(result);
                                setData(result)
                                setDataVersionTwo(result.playlists.items)
                            })
                    }
                }
            });
    }, [])
    return (
        <>
            <div className=''>
                {/* baxtzod */}
                <div className="genres_main_block">
                    <div className="background_of_genre" style={{background: `linear-gradient(${data?.color} -15%, transparent 70%)`}}></div>
                    <h1>{data.message}</h1>
                </div>
                <div className="genre_playlist_background"></div>
                <div className="genre_playlists">
                <div className="box">
                    <div className="up">
                        <h1 className='category'>Жанры для вас - {data.message}</h1>
                        <a className='show_all' href="#">Показать все</a>
                    </div>

                    <div className="item-box" style={{flexWrap: "wrap", justifyContent: "space_between", gap: "8pxpx"}}>
                        {data_version_two.length > 0 && data_version_two.map((item, index) => <BaseBlocks key={index} type={"playlist"} arr={item}></BaseBlocks>)}
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Genres;