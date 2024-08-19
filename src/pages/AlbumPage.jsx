import React, { useState, useEffect, useCallback } from "react";
import TrackAlbum from "../components/TrackAlbum";
import { useLocation, useParams } from "react-router-dom";
function AlbumPage({ func,currentIndex,currentTrackId }) {
    let [data, setData] = useState();
    const [dominantColor, setDominantColor] = useState('');
    const { id } = useParams();
    let location = useLocation()
    location = location.pathname.split('/')[1]
    const token = localStorage.getItem('token');

    const colors_dominant = useCallback((src, callback) => {
        if (!src) return;
        RGBaster.colors(src, {
            exclude: ['rgb(255,255,255)', 'rgb(255, 255, 254)', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 0.4039215686)'],
            success: function (palette) {
                const dominant_color = palette.dominant;
                callback(dominant_color);
            }
        });
    }, []);

    useEffect(() => {
        const fetchPlaylistData = async () => {
            try {
                const playlistResponse = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                let playlist = await playlistResponse.json();
                playlist.tracks.items = playlist.tracks.items.filter(item => item.preview_url);
                setData(playlist);
                if (playlist.images.length > 0) {
                    colors_dominant(playlist.images[0].url, setDominantColor);
                }

            } catch (error) {
                console.error('Error fetching playlist data:', error);
            }
        };

        fetchPlaylistData();
    }, [id, token, colors_dominant]);
    return (
        <>
            <div className="playlist_background_page" style={data ? { height: "100%" } : {}}>
                <div className="playlist_box_gradient_background" style={{ background: `linear-gradient(180deg, ${dominantColor} -15%, transparent 70%)` }}></div>
            </div>
            <div className="Playlist_box">
                <div className="left">
                    <img src={data?.images[0].url} alt="#" className="image_of_playlist" />
                </div>
                <div className="right">
                    <p>{data?.type}</p>
                    <h1>{data?.name}</h1>
                    <p className="descr">{"The hits of tomorrow are on Spotify today."}</p>
                    <div className="litle_box">
                        <img src="/logo.png" alt="" />
                        <p>Spotify</p>
                        <span>•</span>
                        <p>{data?.tracks.items.length},</p>
                        <p className="sec_span">примерно {(data?.tracks.items.length * 30) / 60} минут</p>
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
                {data?.tracks?.items.map((item, index) => (
                    <TrackAlbum key={index} data={item} index={index} func={func} full_arr={data} currentIndex={currentIndex} currentTrackId={currentTrackId}/>
                ))
                }
            </div>
        </>
    );
}

export default AlbumPage;
