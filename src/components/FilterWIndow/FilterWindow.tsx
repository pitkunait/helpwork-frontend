import React from 'react';
import styles from './FilterWindow.module.scss';
import Divider from '@material-ui/core/Divider';
import FilterParameter from './FilterParameter/FilterParameter';


interface FilterWindowProps {
    filterName: string
    filterParameters?: any[] // FIXME: list of params to choose?
    onFilterApply?: any // FIXME: once filter is ready pass function that will handle filter
    renderComponent?: any
}


const FilterWindow = (props: FilterWindowProps) => {
    return (
        <div className={styles.filterWindow}>
            {props.filterName}
            <Divider/>
            <div className={styles.filterBody}>
                {props.renderComponent || props.filterParameters?.map((item, index) => <FilterParameter key={index} name={item.name} id={item.id}/> )}
            </div>
        </div>
    );
};

export default FilterWindow;
