import  { Component } from 'react'
import s from './navbar.module.scss'
import {Link} from 'react-scroll'
export default class Navbar extends Component {
  state = {
    isScrolled : false
  }
  componentDidMount(){
    window.addEventListener('scroll' , ()=>{
      const hasScrolled = window.scrollY !== 0 ;
      this.setState({isScrolled : hasScrolled})

    })
  }
  render() {
    return (
     <nav className = {`${s.nav} ${this.state.isScrolled ? s.navActive : null }`}>
         <div className = {`container ${s.container}`}>
         <h1 className={`${s.mainHeader}`}>
           <Link to="header">start react</Link>
         </h1>
         <ul className = {`${s.navLinks}`}>
            <li>
               <Link 
               className={`${s.navLinksItem}`} 
               activeClass={`${s.active}`} 
               to='portfolio' 
               spy={true}
               offset={-70}
               duration={1000}
               >
               portfolio</Link>
            </li>
            <li>
             <Link
              className={`${s.navLinksItem}`} 
              activeClass={`${s.active}`} 
              to='about'
              spy={true}
              offset={-70}
              duration={1000}
              >about</Link>
            </li>
             <li>
             <Link
              className={`${s.navLinksItem}`} 
              activeClass={`${s.active}`} 
              to='contact me'
              spy={true}
              offset={-70}
              duration={1000}  
              >contact me</Link>
             </li>
         </ul>
         </div>
    
     </nav>
    )
  }
}
