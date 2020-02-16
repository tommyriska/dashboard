import React from 'react';
import styles from './styles.module.css';
import Item from '../Item';

interface ItemProps {
    title: string,
    description: string,
    url: string,
    iconpath: string
}

type CategoryProps = {
    title: string,
    items: ItemProps[]
}

const Category: React.FC<CategoryProps> = props => {
    return (
        <div className={styles.category}>
            <h1>{props.title}</h1>
            <div className={styles.items}>
                {props.items.map(i => (
                    <div key={i.title} className={styles.item}>
                        <a href={i.url}>
                            <Item
                                title={i.title}
                                description={i.description}
                                iconpath={i.iconpath} />
                        </a>
                    </div>
                ))
                }
            </div>

        </div>
    )
}

export default Category;