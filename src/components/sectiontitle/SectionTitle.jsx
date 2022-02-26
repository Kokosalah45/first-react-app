import React, { Component } from 'react'
import s from  './sectiontitle.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
export default class SectionTitle extends Component {
  render() {
      const {textContent,componentsColor,headerFont} = this.props;
      const styleMap = {
          '#2c3e50' : {
            color : s.colorBlue,
            backGround : s.backGroundBlue
           
          },
          white :{
            backGround : s.backGroundWhite,
            color : s.colorWhite
          
          },
          fsLarge : s.fsLarge,
          fsMedium : s.fsMedium
      }
      const {color , backGround } = styleMap[componentsColor];
      
    return (
      <div className = {` ${s.componentContainer} ${color}`}>
        <h2 className = {`${styleMap[headerFont]}`}>{textContent}</h2>
        <ul className={`${s.divider}`}>
            <li className={`${s.dividerLine} ${backGround}`}></li>
            <li className={`${s.dividerStar} `}>
                <FontAwesomeIcon icon={faStar} />
            </li>
            <li className={`${s.dividerLine} ${backGround} `}></li>
        </ul>
      </div>
    

    )
  }
}
