import React from "react";
import PropTypes from "prop-types";
import "../assets/style/card.css";

const card = ({ lang, img, fcolor, scolor }) => {
  console.log(fcolor);
  return (
    <div
      className="card"
      style={{
        background: `linear-gradient(to left, ${fcolor}, ${scolor})`,
      }}
    >
      <img src={img} alt={img} className="imagen" />
      <h1>{lang}</h1>
    </div>
  );
};

card.propTypes = {
  lang: PropTypes.string,
  img: PropTypes.string,
  fcolor: PropTypes.string,
  scolor: PropTypes.string,
};
export default card;
