import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import css from "./Reviews.module.css";
import clsx from "clsx";

const Reviews = ({ reviews }) => {
  return (
    <ul className={clsx(css.addInfo, css.coments)}>
      {reviews.map((el, i) => (
        <li className={css.review} key={i}>
          <div className={css.commentTitle}>
            <div className={css.avatarWrapper}>
              <div className={css.avatar}>{el.reviewer_name[0]}</div>
            </div>
            <div>
              <h4>{el.reviewer_name}</h4>
              <p>
                {[1, 2, 3, 4, 5].map((num) => {
                  return (
                    <FaStar
                      size={16}
                      key={num + el.reviewer_name}
                      className={clsx(css.starIconAct, {
                        [css.starIconDis]: el.reviewer_rating < num,
                      })}
                    />
                  );
                })}
              </p>
            </div>
          </div>

          <p>{el.comment}</p>
        </li>
      ))}
    </ul>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      reviewer_name: PropTypes.string.isRequired,
      reviewer_rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Reviews;
