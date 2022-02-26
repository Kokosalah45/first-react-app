import  { Component } from 'react'
import s from './navbar.module.scss'

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
         <h1 className={`${s.mainHeader}`}>start react</h1>
         <ul className = {`${s.navLinks}`}>
             <li className={`${s.NavLinksItem}`}>portfolio</li>
             <li className={`${s.NavLinksItem}`}>about</li>
             <li className={`${s.NavLinksItem}`}>contact</li>
         </ul>
         </div>
    
     </nav>
    )
  }
}
