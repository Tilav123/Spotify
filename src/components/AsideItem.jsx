import React, { useState } from "react";
function AsideItem() {
    return (
        <>
            <div className="aside_playlist_item">
                <img src="/liked_background.png" alt="" className="aside_playlist_img" />
                <div className="aside_playlist_data">
                    <p className="aside_playlist_name aside_text">Любимые треки</p>
                    <p className="aside_playlist_type aside_text">Плейлисты </p>
                </div>
            </div>
        </>
    )
}
export default AsideItem;