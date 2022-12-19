import "./Articles.css"

import Filtter from "./components/Filtter";
import ContentCard from "./components/ContentCard";
import NavigatePages from "./components/NavigatePages";

const Favorite = () => {
  return (
    <div className="container_articles">
      <NavigatePages/>
      <div className="main_container">
        <div className="container_art">
          <div className="filtter_container">
            <Filtter />
          </div>
          <div className="card_container">
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
