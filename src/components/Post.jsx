import Styles from './Post.module.css'
import { Avatar } from './avatar'
import { Comment } from './comment'
import Personagem from '../assets/person.png'
export function Post(){
    return(

<article className={Styles.post}>
<header>
    <div className={Styles.author}>
     <Avatar src={Personagem} alt="" />
   <div className={Styles.authorInfo}>
  <strong>Vitoria Nunes</strong>
  <span>Developer Web</span>
   </div>
    </div>
    <time title='29 de março 2024' dateTime='2024/03/29 11:56' > Publicado a 1h </time>
</header>

<div className={Styles.content}>

<p> Fala galeraa 👋  </p>

<p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀  </p>

<p><a href=""> 👉 jane.design/doctorcare</a>  </p> 

<p> <a href=""> #novoprojeto</a>{' '}
    <a href=""> #nlw</a> {' '}
    <a href=""> #rocketseat</a>
</p>

</div>



<form className={Styles.commentForm }>
    <strong>Deixe seu feedback</strong>
    <textarea placeholder='Deixe um comentario' ></textarea>
    <footer>
    <button type='submit'>Publicar</button>
    </footer>
   
</form>
<div className={Styles.commentList}>
<Comment/>
<Comment/>
<Comment/>
</div>

</article>

    )
}