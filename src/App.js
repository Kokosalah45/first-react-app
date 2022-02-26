import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './scss/app.scss';
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'







class App extends Component {
  render() {
    return (
    <>
      <Header/>
      <Main pageSections={['portfolio' , 'about' ,'contact me']}/>
      <Footer/>

    </>
     
    )
  }
}



export default App;
