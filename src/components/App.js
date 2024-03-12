import Banner from './Banner'
import Footer from './Footer'
 import '../styles/app.css'
import logo from '../assets/logo.png'
import Main from './Main'
// import 'bootstrap/dist/css/bootstrap.min.css'

 

function App() {
   
    return <div className='container'>
         
        <Banner title="la maison des jungles"  logo={logo} />
        <Main></Main>
       <Footer h1="Pour les pasionne-e-s de plantes"  h2="Laissez-nous votre mail:"/>  
       
    </div>
}

export default App