import React, { useState } from "react";
function SearchCategItem({data}) {
    console.log(data);
    
    return (
        <>
            <div className='search_cat_item' style={{background: data.backgroundColor}} id={data.id}>
                <p className="search_cat_categories_text">{data.title}</p>
                <img src={data.img} alt="" className="search_cat_img" />
            </div>
        </>
    )
}
export default SearchCategItem;