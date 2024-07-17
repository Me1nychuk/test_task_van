import CarItem from "../CarItem/CarItem";
import css from './CarList.module.css';


const CarList = () => {
  return (
    <ul className={css.carList}>
        <CarItem />
        <CarItem />
        <CarItem />
        <CarItem />
                
           
        
    </ul>
  )
}

export default CarList