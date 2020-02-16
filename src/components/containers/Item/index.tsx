import React from 'react';
import styles from './styles.module.css';

interface ItemProps {
    title: string,
    description: string,
    iconpath: string
}

const Item: React.FC<ItemProps> = props => {
    return (
        <div key={props.title}>
                <div className={styles.icon}>
                    <img src={props.iconpath} className={styles.img} />
                </div>
                <div className={styles.text}>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
        </div>
    )
}

export default Item;