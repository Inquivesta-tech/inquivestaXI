import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const PastHighlights = () => {
    const pastImgs = [
        "DSC_0314.JPG",
        "DSC_0976.JPG",
        "DSC06510.JPG",
        "IMG_7307.JPG",
        "IMG_2377.JPG",
        "IMG_4608.PNG",

    ];
    const [imgIndex, setimgIndex] = useState(0);
    const prevImg = () => {
        setimgIndex(((imgIndex - 1 + pastImgs.length) % pastImgs.length))
    };
    const nextImg = () => {
        setimgIndex(((imgIndex + 1) % pastImgs.length))
    };
  return (
    <div className = "flex flex-col items-center justify-center w-full h-full highlights">
        <h1 className="text-5xl">Past Highlights</h1>
        <img src={"/highlights/" + pastImgs[imgIndex]} />
        <span className = "flex w-1/4 justify-evenly py-4">
            <button onClick={prevImg}><FontAwesomeIcon icon={faArrowLeft} /></button>
            <button onClick={nextImg}><FontAwesomeIcon icon={faArrowRight} /></button>
        </span>
    </div>
  )
}

export default PastHighlights