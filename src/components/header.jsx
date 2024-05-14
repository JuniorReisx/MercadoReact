import styles from './header.module.css'
import { SiCoinmarketcap } from "react-icons/si";

export function Header(){
return(
    
        <header className={styles.header}>
              <SiCoinmarketcap size={30} />
        <strong>Mercado</strong>

        </header>
    
)
}