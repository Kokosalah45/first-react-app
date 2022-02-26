import React, { Component } from 'react'
import s from './modal.module.scss'
import SectionTitle from '../sectiontitle/SectionTitle'

export default class Modal extends Component {
    componentDidMount(){
        document.getElementById('root').parentElement.style.overflow = "hidden" ;
    }
    componentWillUnmount = () =>{
        document.getElementById('root').parentElement.style.overflow = "unset" ;
    }
   

  render() {
    
       //tob2a variable bas ana mksl ma 3alena
       const {name , image , closeModal} = this.props
    return (
      
        <>
         <div className={`${s.modalOverlay}`} onClick={closeModal}>
         <div className={`${s.modal}`}>
            <SectionTitle textContent={name} componentsColor="#2c3e50" headerFont="fsMedium"/>
            <img className={`${s.modalImage}`} src={image} alt="" />
            <p className={`${s.modalText}`}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat molestiae molestias esse aliquid ut similique eum quia iste ipsum. Tenetur doloremque veniam sunt id nihil unde vel voluptatum illo ullam.
            </p>
         </div>
         </div>
       
        </>
     
    )
  }
}
