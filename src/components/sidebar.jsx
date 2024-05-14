import { Avatar } from './avatar'
import styles from './sidebar.module.css'

import { PencilLine } from 'phosphor-react'
export function Sidebar(){
    return(
        <aside className={styles.sidebar} >
            
            <img className={styles.cover} src="https://www.dshow.com.br/blog/wp-content/uploads/2020/03/160929_Mingrone_Iluminacao_090_Ricardo_Bassetti_5342.jpg"  />
            <div className={styles.profile}>
            <Avatar src="https://avatars.githubusercontent.com/u/125107249?v=4"/>

                <strong>
                   Junior Reis
                </strong>
                <span>
                   Comprador
                </span>
                <footer>
                    <a href="#">
                        
                    <PencilLine size={20}/>
                        editar seu perfil
                    </a>
                </footer>
            </div>
            
             </aside>
    )
}