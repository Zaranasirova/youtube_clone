import Aside from "./sections/Aside";
import Hero from "./sections/Hero";

const Home = () => {
  return (
    <section className="main-section container">
      <Aside />
      <Hero />
    </section>
  );
};

export default Home;
