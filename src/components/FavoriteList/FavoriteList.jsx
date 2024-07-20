import { useSelector } from "react-redux";
import { selectFavorite } from "../../redux/favorite/selectors";
import CarItem from "../CarItem/CarItem";
import Modal from "../Modal/Modal";
import useModal from "../../hooks/useModal";
import css from "./FavoriteList.module.css";
import { Link } from "react-router-dom";

const FavoriteList = () => {
  const items = useSelector(selectFavorite);
  const { open, onOpen, onClose, modalData } = useModal();

  return (
    <div className={css.favoriteBlock}>
      {items.length >= 1 ? (
        <>
          {items.map((element) => (
            <CarItem key={element._id} item={element} onOpenModal={onOpen} />
          ))}
          {open && <Modal item={modalData} onCloseModal={onClose} />}
        </>
      ) : (
        <>
          <p>The list is empty</p>
          <Link className={css.link} to="catalog">
            Click here to Catalog
          </Link>
        </>
      )}
    </div>
  );
};

export default FavoriteList;
