import { useDispatch, useSelector } from "react-redux";
import CarList from "../components/CarList/CarList";
import SearchPanel from "../components/SearchPanel/SearchPanel";
import css from "./Catalog.module.css";

import { apiGetCars } from "../redux/car/operations";
import { useEffect } from "react";
import { selectCars } from "../redux/car/selectors";

const Catalog = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiGetCars());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <SearchPanel cars={cars} />
      <CarList />
    </div>
  );
};

export default Catalog;
