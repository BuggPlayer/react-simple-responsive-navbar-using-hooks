import React from "react";
import "./landing.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
const AutoplaySlider = withAutoplay(AwesomeSlider);
const Landing = () => {
  return (
    <div className="landing">
      <AutoplaySlider
        bullets={false}
        className="slider"
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
        <div
          style={{ height: "100%" }}
          data-src="https://preview.colorlib.com/theme/vegefoods/images/xbg_1.jpg.pagespeed.ic.CriyRQ4w7N.webp"
        />
      </AutoplaySlider>
    </div>
  );
};

export default Landing;
