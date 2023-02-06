import styles from './LocaleSwitch.module.scss';
import cn from 'classnames';
import {useRouter} from "next/router";
import Link from 'next/link'
import Image from "next/image";

export default function LocaleSwitch() {
    const router = useRouter();

    if (!router.locales?.length) {
        return null;
    }

    const getLocaleIconPath = locale => `/assets/icons/flags/${locale}.svg`;

    return (
        <div className={styles.switch}>
            <ul className={styles.list}>
                {router.locales.map((locale) => {
                    const isLocaleActive = locale === router.locale;
                    return (
                        <li
                            className={cn(styles.locale, {[styles.active]: isLocaleActive})}
                            key={locale}
                            title={locale.toUpperCase()}
                        >
                            <Link href={router.asPath} locale={locale}>
                               <a className={styles.imageWrap}>
                                    <Image
                                        src={getLocaleIconPath(locale)}
                                        width={34}
                                        height={20}
                                    />
                               </a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
