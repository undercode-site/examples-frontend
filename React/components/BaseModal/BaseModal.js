import styles from './BaseModal.module.scss';
import CloseIcon from '../../../../public/assets/close.svg';
import BaseModalHolder from "../BaseModalHolder/BaseModalHolder";
import cn from 'classnames';

export default function BaseModal({children, close, gray, paddingSmall, small}) {
    return (
        <BaseModalHolder onClose={close}>
            <div className={cn(styles.modal, {
                [styles.gray]: gray,
                [styles.paddingSmall]: paddingSmall,
                [styles.small]: small,
            })}>
                <div
                    className={styles.close}
                    onClick={close}
                >
                    <CloseIcon/>
                </div>
                <div className={styles.body}>
                    {children}
                </div>
            </div>
        </BaseModalHolder>
    )
}
