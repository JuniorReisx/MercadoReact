import styles from './header.module.css'
import igniteLogo from '../assets/logoheader.png'
console.log(igniteLogo)
export function Header(){
return(
    
        <header className={styles.header}>
                <img src={igniteLogo} alt="Logo do ignite" />
        <strong > Ignite Feed</strong>

        </header>
    
)
}