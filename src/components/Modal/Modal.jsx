import CarItemPropTypes from "../../helpers/Types/CarItemPropTypes.js";
import { IoMdClose } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import css from "./Modal.module.css";
import { useState } from "react";
import clsx from "clsx";
import FormСomment from "../Form/Form.jsx";
import Reviews from "../Reviews/Reviews.jsx";
import Gallery from "../Gallery/Gallery.jsx";
import CarDetails from "../CarDetails/CarDetails.jsx";

const Modal = ({ item, onCloseModal }) => {
  const [addInfo, setAddInfo] = useState(true);

  return (
    <div className={css.wrapper}>
      <div className={css.modal}>
        <div className={css.header}>
          <h2 className={css.title}>{item.name}</h2>
          <IoMdClose
            size={32}
            className={css.closeBtn}
            onClick={onCloseModal}
          />
        </div>
        <div className={css.basicReview}>
          <p className={css.rating}>
            <FaStar size={16} color="#FFC531" className={css.iconinfo} />
            {item.rating}({item.reviews.length} Reviews)
          </p>
          <p>
            <LuMapPin size={15} className={css.iconinfo} />
            {item.location}
          </p>
        </div>
        <p className={css.price}>€{item.price}.00</p>
        <div className={css.scrollBox}>
          <Gallery gallery={item.gallery} />
          <p className={css.description}>{item.description}</p>
          <div className={css.addInfoChoice}>
            <span
              className={clsx({
                [css.active]: addInfo,
              })}
              onClick={() => setAddInfo(true)}
            >
              Features
            </span>
            <span
              className={clsx({
                [css.active]: !addInfo,
              })}
              onClick={() => setAddInfo(false)}
            >
              Reviews
            </span>
          </div>

          <div className={css.addSection}>
            {addInfo ? (
              <div className={css.addInfo}>
                <CarDetails item={item} />
              </div>
            ) : (
              <div className={css.addInfo}>
                <Reviews reviews={item.reviews} />
              </div>
            )}

            <div>
              <h3 className={css.commentTitle}>Book your campervan now</h3>
              <p className={css.commentText}>
                Stay connected! We are always ready to help you.
              </p>
              <FormСomment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Modal.propTypes = CarItemPropTypes;
export default Modal;
