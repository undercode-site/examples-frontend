import styles from './BaseModalHolder.module.scss';
import {createSelfClickHandler} from "../../../../utils/dom/createSelfClickHandler";
import useBodyScrollBlock from "../../../../hooks/useBodyScrollBlock";
import useKeyPress from '../../../../hooks/useKeyPress';

export default function BaseModalHolder({children, opened = true, onClose}) {
    useBodyScrollBlock(opened);
    useKeyPress(onClose );

    return (
        <div
            className={styles.holder}
            onClick={createSelfClickHandler(onClose)}
        >
            {children}
        </div>
    )
}
