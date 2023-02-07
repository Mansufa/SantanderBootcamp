import styles from './Header.module.css';

import igniteLogo from '../assets/ignite-logo.svg';

console.log(igniteLogo);

export function Header() {
    return(
        <header className={styles.header}>
        <img src={igniteLogo} att="Logotipo do Ignite" />
        </header>
    );
}