import { Component } from 'react'
import s from './intro.module.scss'
import {avatar} from '../../../images'
import SectionTitle from '../../sectiontitle/SectionTitle'
export default class Intro extends Component {
  render() {
    return (
    <section className={`${s.intro}`}>
      <div className={`container ${s.container }`}>
            <img src={avatar} className={`${s.avatarImg}`} alt="" />
            <SectionTitle textContent = "Start React" componentsColor="white" headerFont="fsLarge" />
            <p style={{fontSize : "1.5rem" , textAlign : "center"}}>Graphic Artist - Web Designer - Illustrator</p>
        </div>

    </section>
    )
  }
}
