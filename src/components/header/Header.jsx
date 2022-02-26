import React, { Component } from 'react'
import s from './header.module.scss'
import Intro from './intro/Intro'
import Navbar from './navbar/Navbar'
export default class Header extends Component {
  render() {
    return (
    <header className={`${s.header}`}>
    <Navbar/>
    <Intro/>
    </header>
  )
}
}

