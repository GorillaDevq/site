import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Blog.module.scss';
import {Article} from "entities/Article";
import {articleArray} from "shared/const/common";
import {SectionTitle} from "shared/ui/SectionTitle/SectionTitle";

interface BlogProps {
    className?: string,
}

export const Blog = (props: BlogProps) => {
    const { className } = props;

    return (
        <section className={classNames(cls.blog, {}, [className])}>
            <SectionTitle text={'Блог компании'} className={cls.blog__title}/>
            <ul className={cls.blog__list}>
                {articleArray.map(item => (
                    <Article article={item} key={item.title}/>
                ))}
            </ul>
        </section>
    );
};
