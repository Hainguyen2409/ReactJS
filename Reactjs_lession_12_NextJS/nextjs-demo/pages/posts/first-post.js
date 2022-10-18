import Link from "next/link";
import styles from '../styles/About.module.css';

export default function FirstPost() {
    return (
        <div className={styles.First_Post}>
            <h1>This is homepage</h1>
            <Link href='/'>
                Homepage
            </Link>
        </div>
    )
}