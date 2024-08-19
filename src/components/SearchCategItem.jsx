import React, { useState } from "react";
import { Link } from "react-router-dom";
function SearchCategItem({data}) {
    console.log(data);
    
    return (
        <>
            <Link className='search_cat_item' style={{background: data.backgroundColor}} id={data.id} to={`/genres/${data.id}`}>
                <p className="search_cat_categories_text">{data.title}</p>
                <img src={data.img} alt="" className="search_cat_img" />
            </Link>
        </>
    )
}
export default SearchCategItem;