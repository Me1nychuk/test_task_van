import PropTypes from 'prop-types';
import Icons from '../../../public/icons/icons.svg'

const Icon = ({ id, className }) => {
  return (
    <svg className={className}>
      <use href={`${Icons}#icon-${id}`} />
    </svg>
  );
}
Icon.propTypes = {
    id: PropTypes.string.isRequired, 
    className: PropTypes.string, 
  };
export default Icon;
