import FavoriteList from "../components/FavoriteList/FavoriteList";
import css from "./Favorite.module.css";

const Favorite = () => {
  return (
    <div>
      <h1 className={css.title}>Favorite</h1>
      <FavoriteList />
    </div>
  );
};

export default Favorite;
