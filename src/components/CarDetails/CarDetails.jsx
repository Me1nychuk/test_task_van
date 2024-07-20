import Icon from "../../helpers/Icon/Icon.jsx";
import CarItemPropTypes from "../../helpers/Types/CarItemPropTypes.js";
import css from "./CarDetails.module.css";
const CarDetails = ({ item }) => {
  return (
    <div className={css.extensions}>
      <div>
        <ul className={css.properties}>
          <li className={css.property}>
            <Icon id="users" className={css.icon} />
            <p className={css.upperCase}>{item.adults} adults</p>
          </li>
          <li className={css.property}>
            <Icon id="Container" className={css.icon} />
            <p className={css.upperCase}>{item.transmission}</p>
          </li>
          {item.details.airConditioner && (
            <li className={css.property}>
              <Icon id="wind" className={css.icon} />
              <p className={css.upperCase}>AC</p>
            </li>
          )}
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
          <li className={css.property}>
            <Icon id="arc" className={css.icon} />
            <p className={css.upperCase}>
              {item.details.airConditioner > 1
                ? `${item.details.airConditioner} air conditioner `
                : `${item.details.airConditioner} air conditioners`}
            </p>
          </li>
          <li className={css.property}>
            <Icon id="cd" className={css.icon} />
            <p className={css.upperCase}>CD</p>
          </li>
          <li className={css.property}>
            <Icon id="radio" className={css.icon} />
            <p className={css.upperCase}>radio</p>
          </li>
          <li className={css.property}>
            <Icon id="hob" className={css.icon} />
            <p className={css.upperCase}>{item.details.hob} hob</p>
          </li>
        </ul>
      </div>
      <div>
        <p className={css.detailTitle}>Vehicle details</p>
        <ul className={css.detailList}>
          <li className={css.detailItem}>
            <span>Form</span>
            <span>{item.form}</span>
          </li>
          <li className={css.detailItem}>
            <span>Length</span>
            <span>{item.length.replace("m", " m")}</span>
          </li>
          <li className={css.detailItem}>
            <span>Width</span>
            <span>{item.width.replace("m", " m")}</span>
          </li>
          <li className={css.detailItem}>
            <span>Height</span>
            <span>{item.height.replace("m", " m")}</span>
          </li>
          <li className={css.detailItem}>
            <span>Tank</span>
            <span>{item.tank.replace("l", " l")}</span>
          </li>
          <li className={css.detailItem}>
            <span>Consumption</span>
            <span>{item.consumption}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

CarDetails.propTypes = CarItemPropTypes;
export default CarDetails;
