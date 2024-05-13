import { Header } from './components/header'
import {Post} from '../src/components/Post'
import { Sidebar } from './components/sidebar'
import './global.css'
import styles from '../src/app.module.css'
import { Avatar } from './components/avatar'

const posts = [
{
   id: 1,
   author:{
     avatarUlr: 'https://images.pexels.com/photos/20755698/pexels-photo-20755698/free-photo-of-mar-praia-litoral-ferias.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
     name:'Ana Camila',
     role:'CEO'
   }  
}
  
]

export function App() {
 

  return (<div>
    <Header/>

   <div className= {styles.wrapper}>
      <Sidebar/>
       <main>
        
        <Post
        author='Junior Reis'
        content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ab totam ipsa nemo esse itaque hic voluptatum, quasi facere obcaecati ut harum tempora reprehenderit odio dolores iste fuga quos nihil?'
        />
             <Post
        author='Gil Maik'
        content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ab totam ipsa nemo esse itaque hic voluptatum, quasi facere obcaecati ut harum tempora reprehenderit odio dolores iste fuga quos nihil?'
        />
        
    
       </main>
   </div>
   
  </div>

  )
}


