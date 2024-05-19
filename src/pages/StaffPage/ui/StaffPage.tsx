import cls from "./StaffPage.module.scss"
import photo1 from "shared/assets/images/staff/Сычев.jpg";
import photo2 from "shared/assets/images/staff/Макаров.png";
import photo3 from "shared/assets/images/staff/Тихонов.jpg";

export default function StaffPage() {
    return (
     <>
         <section className={cls.staff}>
             <h1 className={cls.staff__title}>Тренерский штаб</h1>
             <ul className={cls.staff__list}>
                <li className={cls.staff__person}>
                    <img src={photo1} alt="person" className={cls.staff__avatar}/>
                    <div className={cls.staff__description}>
                        <h2 className={cls.staff__name}>Сычев  Павел  Александрович</h2>
                        <span className={cls.staff__sport}>Вид спорта: пауэрлифтинг<br />Спортивное звание:</span>
                        <ul className={cls.staff__ranks}>
                            <li>Мастер спорта РФ</li>
                            <li>Многократный чемпион всероссийских мастерских турниров</li>
                            <li>Чемпион ЮФО и СКФО</li>
                            <li>Чемпион Волгоградской области по пауэрлифтингу</li>
                        </ul>
                    </div>
                </li>
                 <li className={cls.staff__person}>
                     <img src={photo2} alt="person" className={cls.staff__avatar}/>
                     <div className={cls.staff__description}>
                         <h2 className={cls.staff__name}>Макаров  Илья  Дмитриевич</h2>
                         <span className={cls.staff__sport}>Вид спорта: пауэрлифтинг, гиревой спорт<br />Спортивное звание:</span>
                         <ul className={cls.staff__ranks}>
                             <li>кандидат в мастера спорта РФ</li>
                             <li>Многократный чемпион всероссийских мастерских турниров</li>
                             <li>Чемпион ЮФО и СКФО</li>
                             <li>Чемпион Волгоградской области по пауэрлифтингу</li>
                         </ul>
                     </div>
                 </li>
                 <li className={cls.staff__person}>
                     <img src={photo3} alt="person" className={cls.staff__avatar}/>
                     <div className={cls.staff__description}>
                         <h2 className={cls.staff__name}>Тихонов Анатолий Сергеевич</h2>
                         <span className={cls.staff__sport}>Вид спорта: армрестлинг<br />Спортивное звание:</span>
                         <ul className={cls.staff__ranks}>
                             <li>Мастер спорта РФ</li>
                             <li>Многократный чемпион всероссийских мастерских турниров</li>
                             <li>Чемпион ЮФО</li>
                             <li>Чемпион Волгоградской области по армрестлингу</li>
                         </ul>
                     </div>
                 </li>
             </ul>
         </section>
     </>
    )
}
