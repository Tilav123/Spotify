import React, { useEffect, useState } from "react";
import BaseBlocks from "../components/Album";
import BaseBlocksSecond from "../components/AlbumSkn";
function Home({ data }) {

    const [skeleton, setSkeleton] = useState(false)

    useEffect(() => {
        setSkeleton(true)

        setTimeout(() => {
            setSkeleton(false)
        }, 3000)
    }, [])

    return (
        <>

            {/* {skeleton ? <div>
                    <div className="box">
                        <div className="up">
                            <h1 className='category'>Только для вас</h1>
                            <a className='show_all' href="#">Показать все</a>
                        </div>

                        <div className="item-box">
                            {data.length > 0 && data.map((item, index) => <BaseBlocksSecond key={index} type={"playlist"} arr={item}></BaseBlocksSecond>)}
                        </div>
                    </div>
                </div>
                :
                
            } */}
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