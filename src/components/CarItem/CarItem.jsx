import css from "./CarItem.module.css";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import Icon from "../../helpers/Icon/Icon";
import CarItemPropTypes from "../../helpers/Types/CarItemPropTypes.js";
import { toggleItem } from "../../redux/favorite/slice.js";
import { useDispatch, useSelector } from "react-redux";
import { selectIsFavorite } from "../../redux/favorite/selectors.js";
import clsx from "clsx";

const CarItem = ({ item, onOpenModal }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectIsFavorite(item._id));
  const toggleFavorite = () => {
    dispatch(toggleItem(item));
  };

  return (
    <li className={css.carItem}>
      <img className={css.image} src={item.gallery[0]} alt={item.name} />
      <div className={css.info}>
        <div className={css.mainInfo}>
          <h3>{item.name}</h3>
          <p>
            €{item.price}.00{" "}
            {!isFavorite ? (
              <FaRegHeart
                size={24}
                onClick={toggleFavorite}
                className={css.heartIcon}
              />
            ) : (
              <FaHeart
                size={24}
                className={clsx(css.heartIcon, css.active)}
                onClick={toggleFavorite}
              />
            )}
          </p>
        </div>
        <div className={css.addInfo}>
          <p className={css.rating}>
            <FaStar size={16} color="#FFC531" className={css.iconinfo} />
            {item.rating}({item.reviews.length} Reviews)
          </p>
          <p>
            <LuMapPin size={15} className={css.iconinfo} />
            {item.location}
          </p>
        </div>
        <p className={css.description}>{item.description}</p>
        <ul className={css.properties}>
          <li className={css.property}>
            <Icon id="users" className={css.icon} />
            <p className={css.upperCase}>{item.adults} adults</p>
          </li>
          <li className={css.property}>
            <Icon id="Container" className={css.icon} />
            <p className={css.upperCase}>{item.transmission}</p>
          </li>
          <li className={css.property}>
            <Icon id="gas" className={css.icon} />
            <p className={css.upperCase}>{item.engine}</p>
          </li>
          {item.details.kitchen && (
            <li className={css.property}>
              <Icon id="cutlery" className={css.icon} />
              <p className={css.upperCase}>Kitchen</p>
            </li>
          )}
          <li className={css.property}>
            <Icon id="bed" className={css.icon} />
            <p className={css.upperCase}>
              {item.details.beds > 1
                ? `${item.details.beds} beds `
                : `${item.details.beds} bed`}
            </p>
          </li>
          {item.details.airConditioner && (
            <li className={css.property}>
              <Icon id="wind" className={css.icon} />
              <p className={css.upperCase}>AC</p>
            </li>
          )}
        </ul>
        <button
          className={css.btn}
          onClick={() => {
            onOpenModal(item);
          }}
        >
          Show more
        </button>
      </div>
    </li>
  );
};

CarItem.propTypes = CarItemPropTypes;
export default CarItem;
