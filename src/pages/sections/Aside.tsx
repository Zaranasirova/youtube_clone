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
    <aside>
      <div className="categories-container">
        <ul className="categories-list d-flex">
          <li className="categories-list-item">
            <img src={home_icon} alt="home-icon" />
            <p>Home</p>
          </li>
          <li className="categories-list-item">
            <img src={game_icon} alt="game-icon" />
            <p>Gaming</p>
          </li>
          <li className="categories-list-item">
            <img src={automobiles_icon} alt="automobiles-icon" />
            <p>Automobiles</p>
          </li>
          <li className="categories-list-item">
            <img src={sports_icon} alt="sports-icon" />
            <p>Sports</p>
          </li>
          <li className="categories-list-item">
            <img src={entertainment_icon} alt="entertainment-icon" />
            <p>Entertainment</p>
          </li>
          <li className="categories-list-item">
            <img src={tech_icon} alt="Technology-icon" />
            <p>Technology</p>
          </li>
          <li className="categories-list-item">
            <img src={music_icon} alt="music-icon" />
            <p>Music</p>
          </li>
          <li className="categories-list-item">
            <img src={blogs_icon} alt="blogs-icon" />
            <p>Blogs</p>
          </li>
          <li className="categories-list-item">
            <img src={news_icon} alt="news-icon" />
            <p>News</p>
          </li>
        </ul>
        <div className="subscribed d-flex">
          <p>Subscribed</p>
          <ul className="subscribed-list">
            <li className="subscribed-list-item">
              <div>
                <img src={jack} alt="jack-image" />
              </div>
              <p>PewDiePie</p>
            </li>
            <li className="subscribed-list-item">
              <div>
                <img src={simon} alt="simon-image" />
              </div>
              <p>Mr Beast</p>
            </li>
            <li className="subscribed-list-item">
              <div>
                <img src={tom} alt="tom-image" />
              </div>
              <p>Justin Bieber</p>
            </li>
            <li className="subscribed-list-item">
              <div>
                <img src={megan} alt="megan-image" />
              </div>
              <p>5-Minute Crafts</p>
            </li>
            <li className="subscribed-list-item">
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
