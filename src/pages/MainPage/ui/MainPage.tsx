import {Restaurants} from "widjets/Restaurants";
import {Location} from "widjets/Location";
import {Founder} from "widjets/Founder";
import {Cities} from "widjets/Cities";
import {Statics} from "widjets/Statics";
import {FoodTech} from "widjets/FoodTech";
import {Team} from "widjets/Team";
import {Blog} from "widjets/Blog";
import {Connection} from "widjets/Connection";


export default function MainPage () {
    return (
        <>
            <Restaurants />
            <Location />
            <Founder />
            <Cities />
            <Statics />
            <FoodTech />
            <Team />
            <Blog />
            <Connection />
        </>
    );
};
