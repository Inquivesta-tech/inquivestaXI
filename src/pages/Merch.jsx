import React from 'react'
import Navbar from '../components/Navbar.jsx'
import MerchImages from '../components/MerchImages.jsx';

const Merch = () => {
    const buyLink = "https://unstop.com/o/pH8mLrO?lb=Otz3Q9l&utm_medium=Share&utm_source=shortUrl";
    const merch = [
        {title: "Hoodie (Butterfly)", images: ["2.png", "1.png"], link: buyLink},
        {title: "Hoodie (Gravity)", images: ["4.png", "3.png"], link: buyLink},
        {title: "Roundneck Tee (Schrodinger's Cat)", images: ["6.png", "5.png"], link: buyLink},
        {title: "Roundneck Tee (Newton's Rings)", images: ["7.png", "8.png"], link: buyLink},
    ];
    const showMerch = true;
  return (
    <>
        <Navbar active="merch"/>
        <div className="merch-container">
            {showMerch ? 
            <div className="merch-wrapper">
                {
                    merch.map((e, i) => (
                        <div className="merch-card" key={i}>
                            <span className="merch-title">{e.title}</span>
                                {/* <img src={e.image ? e.image : "/merch/default.png"} alt={e.title}/> */}
                                <MerchImages images={e.images} />
                            <a className="merch-btn" href={e.link ? e.link : "/#/merch"}>Order</a>
                        </div>
                    ))
                }
            </div>
            : <h1 className="merch-placeholder">Will be Available Soon!!</h1> }
        </div>
    </>
  )
}

export default Merch