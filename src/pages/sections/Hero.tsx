import bmw from "../../assets/image/automobiles.png";
import cng from "../../assets/image/blogs.png";
import blog from "../../assets/image/cameron.png";
import dfr from "../../assets/image/dislike.png";
import ghhkkj from "../../assets/image/history.png";
import fte from "../../assets/image/logo.png";

const Hero = () => {
  return (
    <div style={{ flex: "5", overflowY: "scroll", height: "auto" }}>
      <img src={fte} alt="" />
      <img src={bmw} alt="" />
      <img src={cng} alt="" />
      <img src={blog} alt="" />
      <img src={dfr} alt="" />
      <img src={ghhkkj} alt="" />
      <img src={fte} alt="" />
    </div>
  );
};

export default Hero;
