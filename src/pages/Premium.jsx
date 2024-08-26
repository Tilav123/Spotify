import React from "react";

function Premium() {

    const tablefreeplans = [
        {
            id: Math.random(),
            text: "Ad-free music listening",
        },
        {
            id: Math.random(),
            text: "Download songs",
        },
        {
            id: Math.random(),
            text: "Play songs in any order",
        },
        {
            id: Math.random(),
            text: "High quanlity audio",
        },
        {
            id: Math.random(),
            text: "Listen with friends in real time",
        },
        {
            id: Math.random(),
            text: "Organize listening queue",
        },
    ];

    function TableTexts({item}) {
        return (
            <>

                <tr>

                    <td>{item.text}</td>
                    <td>—</td>
                    <td><span>&#10003;</span></td>

                </tr>

            </>
        )
    }

    return (
        <>

            <div className="premium">

                <div className="premium_blc">

                    <h1 className="text-white text-[32px] vsm:text-[20px] sm:text-[24px] md:text-[32px] font-bold text-center">USD 0.00 for 3 months of Premium</h1>

                    <h4 className="text-white text-[19px] sm:text-[16px] font-normal text-center">Enjoy ad-free music listening, offline playback, and more. Cancel anytime.</h4>

                    <div className="flex items-center justify-center gap-5 flex-wrap my-[25px]">

                        <button className="w-[225px] h-12 border-none bg-white rounded-[32px] text-base font-extrabold cursor-pointer hover:scale-105">Try free for 3 months</button>

                        <button className="w-[170px] h-12 text-white bg-transparent rounded-[32px] text-base font-extrabold border border-solid border-white cursor-pointer hover:scale-105">View all plans</button>

                    </div>

                    <p className="text-white text-[14px] font-normal text-center">Premium Individual only. Free for 3 months, then $4.99 per month after. Offer only available if you haven't tried Premium before. <a className="text-white underline" href="https://www.spotify.com/uz/legal/premium-promotional-offer-terms/">Terms apply</a>. Offer ends September 17, 2024.</p>

                </div>

                <div className="choose_premium_blc">

                    <h1>Affordable plans for any situation</h1>

                    <h4>Choose a Premium plan and listen to ad-free music without limits on your phone, speaker, and other devices. Pay in various ways. Cancel anytime.</h4>

                    <div className="images_cards">

                        <div className="premium_white_blc">

                            <img src="/visa_card_logo.png" alt="" />

                        </div>

                        <div className="premium_white_blc">

                            <img src="/mastercard_logo.png" alt="" />

                        </div>

                        <div className="premium_white_blc">

                            <img className="american_express_card" src="/american_express_logo.png" alt="" />

                        </div>

                    </div>

                </div>

                <div className="premium_plans_blc">

                    <h1 className="text-white text-[32px] sm:text-[24px] md:text-[32px] font-bold text-center">All Premium plans include</h1>

                    <ul>

                        <li>&#10003; Ad-free music listening</li>
                        <li>&#10003; Download to listen offline</li>
                        <li>&#10003; Play songs in any order</li>
                        <li>&#10003; High audio quality</li>
                        <li>&#10003; Listen with friends in real time</li>
                        <li>&#10003; Organize listening queue</li>

                    </ul>

                </div>

                <div className="premium_limits_flex">

                    <div className="premium_limits_blc">

                        <span>Free for 3 months</span>

                        <div className="black_logo_spotify">

                            <img src="/black_spotify_logo.png" alt="" />

                            <h6>Premium</h6>

                        </div>

                        <div className="premium_blc_texts">

                            <h2>Individual</h2>

                            <div className="premium_price">

                                <h5>Free for 3 months</h5>
                                <h5>$4.99 / month after</h5>

                            </div>

                        </div>

                        <div className="premium_line_place">

                            <div className="premium_line"></div>

                        </div>

                        <ul className="premium_benefit">

                            <li>1 Premium account</li>
                            <li>Cancel anytime</li>

                        </ul>

                        <div className="premium_btn_text">

                            <button>Try free for 3 months</button>

                            <small>Free for 3 months, then $4.99 per month after. Offer only available if you haven't tried Premium before. <a href="https://www.spotify.com/uz/legal/premium-promotional-offer-terms/">Terms apply.</a> Offer ends September 17, 2024.</small>

                        </div>

                    </div>

                    <div className="premium_limits_blc">

                        <span>Free for 1 months</span>

                        <div className="black_logo_spotify">

                            <img src="/black_spotify_logo.png" alt="" />

                            <h6>Premium</h6>

                        </div>

                        <div className="premium_blc_texts">

                            <h2>Student</h2>

                            <div className="premium_price">

                                <h5>Free for 1 months</h5>
                                <h5>$2.49 / month after</h5>

                            </div>

                        </div>

                        <div className="premium_line_place">

                            <div className="premium_line"></div>

                        </div>

                        <ul className="premium_benefit">

                            <li>1 verified Premium account</li>
                            <li>Discount for eligible students</li>
                            <li>Cancel anytime</li>

                        </ul>

                        <div className="premium_btn_text">

                            <button>Try free for 1 months</button>

                            <small>Free for 1 month, then $2.49 per month after. Offer available only to students at an accredited higher education institution and if you haven't tried Premium before. <a href="https://www.spotify.com/uz/legal/premium-promotional-offer-terms/">Terms apply.</a></small>

                        </div>

                    </div>

                    <div className="premium_limits_blc">

                        <div className="black_logo_spotify">

                            <img src="/black_spotify_logo.png" alt="" />

                            <h6>Premium</h6>

                        </div>

                        <div className="premium_blc_texts">

                            <h2>Duo</h2>

                            <div className="premium_price">

                                <h5>$6.49 / month</h5>

                            </div>

                        </div>

                        <div className="premium_line_place">

                            <div className="premium_line"></div>

                        </div>

                        <ul className="premium_benefit">

                            <li>2 Premium accounts</li>
                            <li>Cancel anytime</li>

                        </ul>

                        <div className="premium_btn_text">

                            <button>Get Premium Duo</button>

                            <small>For couples who reside at the same address. <a href="https://www.spotify.com/uz/legal/duo/">Terms apply.</a></small>

                        </div>

                    </div>

                    <div className="premium_limits_blc">

                        <div className="black_logo_spotify">

                            <img src="/black_spotify_logo.png" alt="" />

                            <h6>Premium</h6>

                        </div>

                        <div className="premium_blc_texts">

                            <h2>Family</h2>

                            <div className="premium_price">

                                <h5>$7.99 / month</h5>

                            </div>

                        </div>

                        <div className="premium_line_place">

                            <div className="premium_line"></div>

                        </div>

                        <ul className="premium_benefit">

                            <li>Up to 6 Premium accounts</li>
                            <li>Control content marked as explicit</li>
                            <li>Cancel anytime</li>

                        </ul>

                        <div className="premium_btn_text">

                            <button>Get Premium Family</button>

                            <small>For up to 6 family members residing at the same address. <a href="https://www.spotify.com/uz/legal/premium-family-terms/">Terms apply.</a></small>

                        </div>

                    </div>

                </div>

                <div className="premium_free_plan_blc">

                    <div className="choose_premium_blc">

                        <h1>Experience the difference</h1>

                        <h4>Go Premium and enjoy full control of your listening. Cancel anytime.</h4>

                    </div>

                    <div className="premium_tables">

                        <table className="premium_content_table">

                            <thead>

                                <tr>

                                    <th>What youl'll get</th>
                                    <th>Spotify's <br /> Free plan</th>
                                    <th>

                                        <div className="black_logo">

                                            <img src="/black_spotify_logo.png" alt="" />

                                            <h6>Premium</h6>

                                        </div>

                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {tablefreeplans.map(item => <TableTexts key={item.id} item={item} />)}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Premium;