import CarList from "../components/CarList/CarList"
import SearchPanel from "../components/SearchPanel/SearchPanel"
import css from "./Catalog.module.css"

const Catalog = () => {
  return (
    <div className={css.wrapper}>
      <SearchPanel/>
      <CarList/>
    </div>
  )
}

export default Catalog