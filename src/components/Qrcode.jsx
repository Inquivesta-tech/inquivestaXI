import React, { useState } from "react";

const Qrcode = ({ images }) => {
  const [imageIdx, setImIdx] = useState(0);
  const prev = () => {
    setImIdx((imageIdx - 1 + images.length) % images.length);
  };
  const next = () => {
    setImIdx((imageIdx + 1) % images.length);
  };
  return (
    <div className="qr-wrapper">
      <div className="qr-container">
        <img src={`${images[imageIdx]}`} className="payment-img" />
        <span className="payment-toggles">
          <span className="merch-nav merch-prev" onClick={prev}></span>
          <span className="merch-nav merch-next" onClick={next}></span>
        </span>
      </div>
    </div>
  );
};

export default Qrcode;
