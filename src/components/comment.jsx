import { ThumbsUp, Trash } from 'phosphor-react'
import style from './comment.module.css'
import { Avatar } from './avatar'

export function Comment(){
  return(
    <div className={style.comment}>
    <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/125107249?v=4" alt="" />
     <div className={style.commentBox}>
    <div className={style.commentContent}>
        <header>
              <div className={style.authorAndTime}>
                     <strong>Gil Maik</strong>
                     <time title='29 de março 2024' dateTime='2024/03/29 11:56' > Cerca de 1h atras </time>
              </div>


              <button title='Deletar Comentario'>
                <Trash size={24} />
              </button>
        </header>
        <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>    
        <footer>
           
           <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
           </button>
        </footer>
    </div>
    </div>
  )
}