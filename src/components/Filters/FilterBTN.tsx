import React from 'react';
import styles from './FilterBTN.module.scss'

const FilterBTN = ({ name, index, items, task, setPageNumber }) => {
    return (
        <div className={styles.filterBtnMainContainer}>
            
            <div className={styles.filterBtnContainer}>
            <input 
            onClick={() => {
                setPageNumber(1);
                task(items);
            }}
            type="radio" 
            id={`${name} - ${index}`} 
            name={name}
            value="" 
            />
            <label for={`${name} - ${index}`} >
                {items}
            </label>
            
            </div>
        </div>
    )
}

export default FilterBTN;