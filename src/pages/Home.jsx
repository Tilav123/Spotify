import React, { useState } from "react";
import BaseBlocks from "../components/album";
function Home({data}) {
    return (
        <>
            <div>
                <div className="box">
                    <div className="up">
                        <h1 className='category'>Только для вас</h1>
                        <a className='show_all' href="#">Показать все</a>
                    </div>

                    <div className="item-box">
                        {data.length > 0 && data.map((item, index) => <BaseBlocks key={index} type={"playlist"} arr={item}></BaseBlocks>)}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;