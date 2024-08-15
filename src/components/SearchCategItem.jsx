import React, { useState } from "react";
function SearchCategItem({data}) {
    console.log(data);
    
    return (
        <>
            <div className='search_cat_item' style={{background: data.backgroundColor.hex}}>
                <p className="search_cat_categories_text">{data.title.transformedLabel}</p>
                <img src={data.artwork.sources[0].url} alt="" className="search_cat_img" />
            </div>
        </>
    )
}
export default SearchCategItem;