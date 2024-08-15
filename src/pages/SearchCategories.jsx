import React, { useState } from "react";
import SearchCategItem from "../components/SearchCategItem";
function SearchCategories({data}) {
    
    return (
        <>
            <div className=''>
                {/* Tilav */}
                <h1 className='search_cat_heading'>Все остальное</h1>
                <div className="search_cat_block">
                    {data.length > 0 && data.map((item) => <SearchCategItem data={item}></SearchCategItem>)}
                </div>
            </div>
        </>
    )
}
export default SearchCategories;