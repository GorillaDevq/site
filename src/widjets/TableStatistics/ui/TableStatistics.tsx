import { classNames } from 'shared/lib/classNames/classNames';
import cls from './TableStatistics.module.scss';
import {DatePicker} from "shared/ui/DatePicker/DatePicker";
import {monthArray, restaurantArray, yearArray} from "shared/const/common";
import {CheckboxRest} from "widjets/CheckboxRest";
import {CheckboxCurrency} from "widjets/CheckboxCurrency";
import {Restaurant} from "entities/Restaurant";

interface TableProps {
    className?: string,
}

export const TableStatistics = (props: TableProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.table, {}, [className])}>
            <div className={cls.table__head}>
                <DatePicker
                    className={cls.table__month}
                    renderArray={monthArray}
                    initialState={monthArray[0]}
                />
                <DatePicker
                    className={cls.table__year}
                    renderArray={yearArray}
                    initialState={yearArray[0]}
                />
                <CheckboxRest />
                <CheckboxCurrency />
            </div>
            <ul className={cls.table__body}>
                {restaurantArray.map((item, index) => (
                    <Restaurant restaurant={item} index={index+1} key={item.serial_num}/>
                ))}
            </ul>
        </div>
    );
};
