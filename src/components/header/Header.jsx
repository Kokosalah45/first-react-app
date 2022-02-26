import React, { Component } from 'react'
import styles from './header.module.scss'
import Intro from './intro/Intro'
import Navbar from './navbar/Navbar'
export default class Header extends Component {
  render() {
    return (
    <header className={`${styles.header}`}>
    <Navbar/>
    <Intro/>
    </header>
  )
}
}

