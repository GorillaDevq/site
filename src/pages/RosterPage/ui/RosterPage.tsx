import cls from "./RosterPage.module.scss"
import {Person} from "entities/Person";
import {personsArray} from "entities/Person/lib/common/consts";

export default function RosterPage() {
    return (
        <>
            <section className={cls.staff}>
                <h1 className={cls.staff__title}>Актив студенческого спортивного клуба «Стальная хватка»</h1>
                <ul className={cls.staff__list}>
                    {personsArray.map((item) => <Person person={item} key={item.name} />)}
                </ul>
            </section>
        </>
    )
}
