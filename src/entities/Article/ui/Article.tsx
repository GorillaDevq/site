import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Article.module.scss';
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {ArticleInterface} from "../model/types/article";
import blogSrc from "shared/assets/images/Blog.png";

interface ArticleProps {
    className?: string;
    article: ArticleInterface;

}

export const Article = ({ className, article }: ArticleProps) => {
    const { title, about, inverted = false } = article;

    const screenWidth = window.screen.width;

    if (inverted && screenWidth > 1024) {
        return (
            <li className={classNames(cls.article, {}, [className, cls.article_inverted])}>
                <img className={cls.article__image} src={blogSrc} alt='Blog'/>
                <div className={cls.article__description}>
                    <h3 className={cls.article__title}>{title}</h3>
                    <p className={cls.article__subtitle}>{about}</p>
                </div>
                <ul className={cls.article__author}>
                    <li className={cls.article__data}>14 февраля 2023</li>
                    <li className={`${cls.article__theses} ${cls.article__theses_name}`}>Беленок Василий</li>
                    <li className={`${cls.article__theses} ${cls.article__theses_add}`}>Образование</li>
                </ul>
            </li>
        )
    }

    return (
        <li className={classNames(cls.article, {}, [className])}>
            <div className={cls.article__description}>
                <h3 className={cls.article__title}>{title}</h3>
                <p className={cls.article__subtitle}>{about}</p>
            </div>
            <ul className={cls.article__author}>
                {screenWidth > 1024 && (
                    <li className={cls.article__data}>14 февраля 2023</li>
                )}
                <li className={`${cls.article__theses} ${cls.article__theses_name}`}>Беленок Василий</li>
                <li className={`${cls.article__theses} ${cls.article__theses_add} ${cls.article__theses_inverted}`}>Образование</li>
            </ul>
            {screenWidth < 1024 &&
                <Button
                    className={cls.article__button}
                    theme={ButtonTheme.WHITE_ACTIVE}
                >
                    Читать
                </Button>
            }
        </li>
    );
};