import PropTypes from "prop-types";

import css from "./Gallery.module.css";
const Gallery = ({ gallery }) => {
  return (
    <ul className={css.gallery}>
      {gallery.map((el, i) => (
        <li className={css.galleryItem} key={i}>
          <img className={css.image} src={el} alt={el} />
        </li>
      ))}
    </ul>
  );
};

Gallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Gallery;
