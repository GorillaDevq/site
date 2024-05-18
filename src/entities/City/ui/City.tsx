import {classNames, Mods} from 'shared/lib/classNames/classNames';
import cls from './City.module.scss';
import BlinLogo from 'shared/assets/icons/BB_red.svg';
import SushiLogo from 'shared/assets/icons/SV_red.svg';
import {CityInterface} from "../model/types/city";

interface CityProps {
    className?: string;
    city: CityInterface;
}

// TODO: Переделать компонент, обратить внимание на семантику и БЭМ
export const City = ({ className, city }: CityProps) => {
    const { Text, BB, SV, Negotiation } = city;
    const busy: boolean = BB && SV;


    const mods: Mods = {
        [cls.table__city_busy]: busy
    }

    return (
        <li className={classNames('', mods, [className])}>
            {Text}
            <div className={cls.table__container}>
                {BB && <BlinLogo className={cls.table__logo}/>}
                {SV && <SushiLogo />}
            </div>
        </li>
    );
};