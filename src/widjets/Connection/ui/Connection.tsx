import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Connection.module.scss';
import cherrySrcDesktop from 'shared/assets/images/Cherry_form_desktop.png';
import cherrySrcMobile from 'shared/assets/images/Cherry_form_mobile.png';
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {SwitchCategory} from "./screen/desktop/SwitchCategory";
import {SectionTitle} from "shared/ui/SectionTitle/SectionTitle";

interface ConnectionProps {
    className?: string,
}

export const Connection = (props: ConnectionProps) => {
    const { className } = props;

    const desktopWidth = window.screen.width > 1024

    return (
        <section className={classNames(cls.connection, {}, [className])}>
            <div className={cls.connection__description}>
                <SectionTitle text={'Мы на связи'} className={cls.connection__title}/>
                <p className={cls.connection__subtitle}>
                    Здесь вы можете написать нам
                    по любому вопросу или предложить
                    что-то интересное. Мы обязательно
                    прочтем ваше сообщение и ответим
                    на него в кратчайшие сроки. Обещаем!
                </p>
                <img
                    src={desktopWidth ? cherrySrcDesktop : cherrySrcMobile}
                    className={cls.connection__image}
                    alt='Cherry'
                />
            </div>
            {/*TODO:Отдельный компонент*/}
            <form className={cls.form}>
                {desktopWidth
                    ? (<SwitchCategory />)
                    : (
                        <select className={cls.form__select}>
                            <option>Франшиза</option>
                            <option>Инвестиции</option>
                            <option>Партнерство</option>
                            <option>Работа</option>
                            <option>Другое</option>
                        </select>
                    )
                }
                <input type='text' className={cls.form__input} required name='name' placeholder='Ваше имя'/>
                <input type='email' className={cls.form__input} required name='email' placeholder='Ваше почта'/>
                <input type='text' className={cls.form__input} required name='number' placeholder='Ваш номер телефона'/>
                <textarea className={`${cls.form__input} ${cls.form__input_about}`} required name='about' placeholder='Что вас интересует'/>
                <Button
                    className={cls.form__submit}
                    theme={ButtonTheme.NAVIGATE_ACTIVE}
                    type='submit'
                >
                    Отправить
                </Button>
            </form>
        </section>
    );
};
