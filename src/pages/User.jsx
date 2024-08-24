import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import BaseBlocks from "../components/Album";
function User({ data }) {
    console.log(data);
    let token = localStorage.getItem('token')
    let [dominantColor, setDominantColor] = useState()
    let [playlists, setPlaylists] = useState([])
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
        colors_dominant(data?.images && data.images.length > 1 && data.images[1]?.url, setDominantColor);
        fetch("https://api.spotify.com/v1/browse/featured-playlists", {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setPlaylists(res.playlists.items)
            })
        console.log(data?.followers?.total);
    }, [data])
    return (
        <>
            <div className="playlist_background_page" style={data ? { height: "100%" } : {}}>
                <div className="playlist_box_gradient_background" style={{ background: `linear-gradient(180deg, ${dominantColor} -15%, transparent 70%)` }}></div>
                <div class="genre_playlist_background" style={{top: "360px"}}></div>
            </div>
            <div className="Playlist_box">
                <div className="left">
                    {data?.images && data.images.length > 1 && data.images[1]?.url ? (
                        <img src={data.images[1].url} alt="#" className="image_of_playlist" style={{ objectFit: "cover", borderRadius: "50%" }} />
                    ) : (
                        <div className="image_of_playlist"></div>
                    )}
                </div>
                <div className="right">
                    <p>{data?.type}</p>
                    <h1>{data?.display_name}</h1>
                    <p className="descr">{data?.followers?.total} подписок</p>
                </div>
            </div>
            <div className="box" style={{marginTop: "100px", zIndex: 4, position: "relative"}}>
                <div className="up">
                <h1 className='category'>{"Популярные плейлисты для вас !"}</h1>
                    <a className='show_all' href="#">Показать все</a>
                </div>
                <div className="item-box" style={{ flexWrap: "wrap", justifyContent: "space_between", gap: "8px" }}>
                    {playlists.length > 0 && playlists.map((item, index) => <BaseBlocks key={index} type={"playlist"} arr={item}></BaseBlocks>)}
                </div>
            </div>
            <div>

            </div>
        </>
    )
}
export default User;