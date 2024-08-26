import React, { useState } from "react";
function AsideItem() {
    return (
        <>
            <div className="aside_playlist_item max-[1350px]:px-0 py-[8px]">
                <img src="/liked_background.png" alt="" className="aside_playlist_img" />
                <div className="aside_playlist_data max-[1350px]:hidden">
                    <p className="aside_playlist_name">Любимые треки</p>
                    <p className="aside_playlist_type">Плейлисты </p>
                </div>
            </div>
        </>
    )
}
export default AsideItem;