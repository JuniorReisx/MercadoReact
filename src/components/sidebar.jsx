import { Avatar } from './avatar'
import styles from './sidebar.module.css'

import { PencilLine } from 'phosphor-react'
export function Sidebar(){
    return(
        <aside className={styles.sidebar} >
            
            <img className={styles.cover} src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
            <div className={styles.profile}>
            <Avatar src="https://avatars.githubusercontent.com/u/125107249?v=4"/>

                <strong>
                   Junior Reis
                </strong>
                <span>
                    Web Developer
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