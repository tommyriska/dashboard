import React from 'react';
import styles from './styles.module.css';
import Category from '../Category';
import categories from '../../../assets/categories.json';

const Dashboard: React.FC = () => {
    return (
        <div className={styles.dashboard}>
            <div className={styles.categories}>
                {categories.map(c => (
                    <div key={c.title}>
                        <Category
                            title={c.title}
                            items={c.items}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard;