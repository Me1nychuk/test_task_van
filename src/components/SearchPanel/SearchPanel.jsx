import Icon from '../../helpers/Icon/Icon'
import css from './SearchPanel.module.css'
import { LuMapPin } from "react-icons/lu";

const SearchPanel = () => {
  return (
    <div>
        <div className={css.location}>
        <h2>Location</h2>
        <div className={css.inputWrapper}>
        <LuMapPin size={18} className={css.point}/>
        <input className={css.input} type="text" placeholder='City'/></div>
        </div>

        <h2 className={css.filterTitle}>Filters</h2>
        <div className={css.filterBlock +" " + css.firstBlock}>
            <p className={css.filterBlockTitle}>Vehicle equipment</p>
            <ul className={css.filterList}>
            <li className={css.filterItem}><Icon id='wind' className={css.icon}/>AC</li>
            <li className={css.filterItem}><Icon id='Container' className={css.icon}/>Automatic</li>
            <li className={css.filterItem}><Icon id='cutlery' className={css.icon}/>Kitchen</li>
            <li className={css.filterItem}><Icon id='tv' className={css.icon}/>TV</li>
            <li className={css.filterItem}><Icon id='shower' className={css.icon}/>Shower/WC</li>
           </ul>
        </div>
        <div className={css.filterBlock+" " + css.secondBlock}>
            <p className={css.filterBlockTitle}>Vehicle type</p>
            <ul className={css.filterList + " "+ css.secondList}>
                 <li className={css.filterItem}><Icon id='camper1' className={css.icon}/>Van</li>
                 <li className={css.filterItem +" "+ css.ItemPadding} ><Icon id='camper2' className={css.icon}/>Fully Integrated</li>
                 <li className={css.filterItem}><Icon id='camper3' className={css.icon}/>Alcove</li>
            </ul>
        </div>
        <button>Search</button>
    </div>
  )
}

export default SearchPanel