import CarItem from "../CarItem/CarItem";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCars,
  selectIsLoading,
  selectPage,
} from "../../redux/car/selectors.js";
import css from "./CarList.module.css";
import useModal from "../../hooks/useModal.js";
import Modal from "../Modal/Modal.jsx";
import { loadMore } from "../../redux/car/slice.js";
import { LineWave } from "react-loader-spinner";
import { apiGetCarsMore } from "../../redux/car/operations.js";
import { useEffect, useState } from "react";

const CarList = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const [isMounted, setIsMounted] = useState(false);
  const onLoadMore = () => {
    dispatch(loadMore());
  };
  const isLoading = useSelector(selectIsLoading);
  const cars = useSelector(selectCars);

  useEffect(() => {
    if (isMounted) dispatch(apiGetCarsMore(page));
    setIsMounted(true);
  }, [dispatch, page]);
  const { open, onOpen, onClose, modalData } = useModal();
  return (
    <div>
      {!isLoading && (
        <>
          <ul className={css.carList}>
            {cars.map((element) => (
              <CarItem key={element._id} item={element} onOpenModal={onOpen} />
            ))}

            <button onClick={onLoadMore} className={css.btn}>
              Load more
            </button>
          </ul>
        </>
      )}
      {isLoading && (
        <div>
          <LineWave
            visible={true}
            height="100"
            width="100"
            color="#E44848"
            ariaLabel="line-wave-loading"
            wrapperStyle={{}}
            wrapperClass=""
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
          />{" "}
        </div>
      )}

      {open && <Modal item={modalData} onCloseModal={onClose} />}
    </div>
  );
};

export default CarList;
