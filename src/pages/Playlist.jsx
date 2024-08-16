import React, { useState, useEffect } from "react";
import Track from "../components/Track";
import { useParams } from "react-router-dom";

function Playlist() {
    const [data, setData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchPlaylistData = async () => {
            const clientId = 'b3b941518f764b86b2d9ecf3a2a60701';
            const clientSecret = '5e9e481c82cf4ac9956487ca21d6c5bf';

            try {
                const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
                    },
                    body: 'grant_type=client_credentials',
                });

                const tokenData = await tokenResponse.json();
                const accessToken = tokenData.access_token;

                const playlistResponse = await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    },
                });

                const playlist = await playlistResponse.json();
                setData(playlist); // Устанавливаем данные в состояние
            } catch (error) {
                console.error('Error fetching playlist data:', error);
            }
        };

        fetchPlaylistData();
    }, [id]);

    return (
        <>
            <div className="Playlist_box">
                <div className="left">
                    <img src={data?.images[0].url} alt="#" />
                </div>
                <div className="right">
                    <p>{data?.type}</p>
                    <h1>{data?.name}</h1>
                    <p className="descr">{data?.description}</p>
                    <div className="litle_box">
                        <img src="/spotify_logo.svg" alt="" />
                        <p>Spotify</p>
                        <span>•</span>
                        <p>{data?.tracks.items.length},</p>
                        <p className="sec_span">примерно {data?.tracks.items.length * 30} минут</p>
                    </div>
                </div>
            </div>

            <div className="Trek_box">
                <div className="trek_up">
                    <div className="left">
                        <img className="Playlist_play" src="/player.svg" alt="" />
                        <img src="/plus.svg" alt="" className="plus" />
                        <div className="three_dots">
                            <span>•</span>
                            <span>•</span>
                            <span>•</span>
                        </div>
                    </div>
                    <div className="right">
                        <p>Список</p>
                        <button>
                            <img src="/menu.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className="trek_midle">
                    <div className="trek_midle_box">
                        <div className="midle_box_up">
                            <div className="left">
                                <p>#</p>
                                <p>Название</p>
                            </div>
                            <div className="right">
                                <p>Альбом</p>
                                <p>Дата добавления</p>
                                <div>
                                    <img className="time" src="/time.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="midle_line"></div>
                    </div>
                </div>
                {data?.tracks.items.map((item, index) => (
                    <Track key={index} data={item} index={index}/>
                ))}
            </div>
        </>
    );
}

export default Playlist;
