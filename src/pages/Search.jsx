import React, { useState } from "react";
import BaseBlocks from "../components/Album";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Search() {
    let token = localStorage.getItem('token')
    const { id } = useParams();
    let [dataSongs,setDataSongs] = useState([])
    let [dataArtists,setDataArtists] = useState([])
    let [dataPlaylists,setDataPlaylists] = useState([])
    let [dataAlbums,setDataAlbums] = useState([])
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
                        console.log(result.playlists.items[0]);
                        
                        setDataAlbums(result.albums.items)
                        setDataArtists(result.artists.items)
                        setDataPlaylists(result.playlists.items)
                        setDataSongs(result.tracks.items)
                    })
            } catch (error) {
                console.error('Error fetching playlist data:', error);
            }
        };
        fetchPlaylistData();
    }, [id]);
    return (
        <>
            <div className='search_blc'>

                <div className="best_result_blc">

                    <div className="search_fir_blc">

                        <h2 className="search_texts">Лучший результат</h2>

                        <Link className="first_big_blc" to={`/playlist/${dataPlaylists[0]?.id}`} style={{display: "block"}}>

                            <div className="search_image_search">

                                <img src={dataPlaylists[0]?.images[0]?.url} alt="" />

                                <h1>{dataPlaylists[0]?.name}</h1>

                            </div>

                            <div className="track_search">

                                <span>Плейлист</span>

                            </div>

                            <div className="play_btn">

                                <img src="/player.svg" alt="" />

                            </div>

                        </Link>

                    </div>

                    <div className="search_sec_blc">

                        {/* <h2 className="search_texts">Треки</h2> */}

                        <div className="search_blc_flexbox">

                            <div className="sec_small_blc">

                                <div className="search_image_texts">

                                    <div className="picture_track">

                                        <img src="/morgen.jpg" alt="" />

                                    </div>

                                    <div className="search_small_texts">

                                        <a href="#" id="first_link_search">Shape of you</a>

                                        <a href="#">Ed Sheeran</a>

                                    </div>

                                </div>

                                <div className="music_duration">
                                    <span>3:53</span>

                                </div>

                            </div>

                            <div className="sec_small_blc">

                                <div className="search_image_texts">

                                    <div className="picture_track">

                                        <img src="/morgen.jpg" alt="" />

                                    </div>

                                    <div className="search_small_texts">

                                        <a href="#" id="first_link_search">Shape of you</a>

                                        <a href="#">Ed Sheeran</a>

                                    </div>

                                </div>

                                <div className="music_duration">

                                    <span>3:53</span>

                                </div>

                            </div>

                            <div className="sec_small_blc">

                                <div className="search_image_texts">

                                    <div className="picture_track">

                                        <img src="/morgen.jpg" alt="" />

                                    </div>

                                    <div className="search_small_texts">

                                        <a href="#" id="first_link_search">Shape of you</a>

                                        <a href="#">Ed Sheeran</a>

                                    </div>

                                </div>

                                <div className="music_duration">

                                    <span>3:53</span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="box">
                    <div className="up">
                        <h1 className='category'>Плейлисты</h1>
                        <a className='show_all' href="#">Показать все</a>
                    </div>

                    <div className="item-box">
                        {dataPlaylists.length > 0 && dataPlaylists.map((item, index) => <BaseBlocks key={index} type={"playlist"} arr={item}></BaseBlocks>)}
                    </div>
                </div>

                <div className="box">
                    <div className="up">
                        <h1 className='category'>Альбомы</h1>
                        <a className='show_all' href="#">Показать все</a>
                    </div>

                    <div className="item-box">
                        {dataAlbums.length > 0 && dataAlbums.map((item, index) => <BaseBlocks key={index} type={"album"} arr={item}></BaseBlocks>)}
                    </div>
                </div>

                <div className="box">
                    <div className="up">
                        <h1 className='category'>Исполнители</h1>
                        <a className='show_all' href="#">Показать все</a>
                    </div>

                    <div className="item-box">
                        {dataArtists.length > 0 && dataArtists.map((item, index) => <BaseBlocks key={index} type={"artists"} arr={item}></BaseBlocks>)}
                    </div>
                </div>

            </div>
        </>
    )
}
export default Search;