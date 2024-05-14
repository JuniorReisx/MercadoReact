import { Header } from './components/header'
import {Post} from '../src/components/Post'
import { Sidebar } from './components/sidebar'
import './global.css'
import styles from '../src/app.module.css'
import feijao from './assets/Feijao.webp'
import arroz from './assets/arroz.jpeg'
import macarrao from './assets/macarrao.jpeg'
import miojo from './assets/miojo.jpeg'
import { Footer } from './components/Footer'
export function App() {
 

  return (<div>
    <Header/>

   <div className= {styles.wrapper}>
      <Sidebar/>
       <main>
        <div className={styles.media}>

       
        <Post src={feijao}/>
        <Post src={arroz}/>
        <Post src={macarrao}/>
        <Post src={miojo}/>
        <Post src={miojo}/>
        <Post src={miojo}/>
        <Post src={miojo}/>
        <Post src={miojo}/>
    
       </div>
        
       </main>
   </div>
   <Footer/>
  </div>

  )
}


