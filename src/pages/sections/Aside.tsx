import home_icon from "../../assets/image/home.png";
import game_icon from "../../assets/image/game_icon.png";
import automobiles_icon from "../../assets/image/automobiles.png";
import sports_icon from "../../assets/image/sports.png";
import entertainment_icon from "../../assets/image/entertainment.png";
import tech_icon from "../../assets/image/tech.png";
import music_icon from "../../assets/image/music.png";
import blogs_icon from "../../assets/image/blogs.png";
import news_icon from "../../assets/image/news.png";
import jack from "../../assets/image/jack.png";
import tom from "../../assets/image/tom.png";
import simon from "../../assets/image/simon.png";
import megan from "../../assets/image/megan.png";
import cameron from "../../assets/image/cameron.png";

const Aside = () => {
  return (
    <aside className="aside">
      <div className="aside-wrapper container">
      <ul className="categories-list ">
        <li className="categories-list-item d-flex">
          <div><img src={home_icon} alt="home-icon" /></div>
          <p>Home</p>
        </li>
        <li className="categories-list-item d-flex">
          <div><img src={game_icon} alt="game-icon" /></div>
          <p>Gaming</p>
        </li>
        <li className="categories-list-item d-flex">
          <div><img src={automobiles_icon} alt="automobiles-icon" /></div>
          <p>Automobiles</p>
        </li>
        <li className="categories-list-item d-flex">
          <div><img src={sports_icon} alt="sports-icon" /></div>
          <p>Sports</p>
        </li>
        <li className="categories-list-item d-flex">
          <div><img src={entertainment_icon} alt="entertainment-icon" /></div>
          <p>Entertainment</p>
        </li>
        <li className="categories-list-item d-flex">
          <div><img src={tech_icon} alt="Technology-icon" /></div>
          <p>Technology</p>
        </li>
        <li className="categories-list-item d-flex">
          <div><img src={music_icon} alt="music-icon" /></div>
          <p>Music</p>
        </li>
        <li className="categories-list-item d-flex">
          <div><img src={blogs_icon} alt="blogs-icon" /></div>
          <p>Blogs</p>
        </li>
        <li className="categories-list-item d-flex">
          <div><img src={news_icon} alt="news-icon" /></div>
          <p>News</p>
        </li>
      </ul>
      <div className="subscribed">
        <p className="subscribed-head-title">Subscribed</p>
        <ul className="subscribed-list ">
          <li className="subscribed-list-item d-flex">
            <div>
              <img src={jack} alt="jack-image" />
            </div>
            <p>PewDiePie</p>
          </li>
          <li className="subscribed-list-item d-flex">
            <div>
              <img src={simon} alt="simon-image" />
            </div>
            <p>Mr Beast</p>
          </li>
          <li className="subscribed-list-item d-flex">
            <div>
              <img src={tom} alt="tom-image" />
            </div>
            <p>Justin Bieber</p>
          </li>
          <li className="subscribed-list-item d-flex">
            <div>
              <img src={megan} alt="megan-image" />
            </div>
            <p>5-Minute Crafts</p>
          </li>
          <li className="subscribed-list-item d-flex">
            <div>
              <img src={cameron} alt="cameron-image" />
            </div>
            <p>Nas Daily</p>
          </li>
          
        </ul>
      </div>
      </div>
    </aside>
  );
};

export default Aside;
