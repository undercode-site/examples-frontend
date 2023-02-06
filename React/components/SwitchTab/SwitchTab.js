import styles from './SwitchTab.module.scss';
import cn from 'classnames';

export default function SwitchTab({tabs, activeTab, onChange}) {

    return (
        <div className={styles.switch}>
            <ul className={styles.list}>
                {tabs.map((tab, index) => {
                    const tabValue = tab.value ?? index;
                    const isTabActive = tabValue === activeTab;

                    return (
                        <li
                            className={cn(styles.tab, {[styles.active]: isTabActive})}
                            key={tabValue}
                            onClick={() => onChange(tabValue)}
                        >
                            {tab.title}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
