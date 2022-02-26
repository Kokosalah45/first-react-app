import React, { Component } from 'react'
import s from './footerbox.module.scss'


export default class FooterBox extends Component {
  render() {
      const {title,text,children} = this.props;
    return (
      <div className={`${s.footerBox}`}>
          <h3 className={`${s.footerBoxTitle}`}>{title}</h3>
          {text ?  <p className={`${s.footerBoxContent}`}>{text}</p> : children}
      </div>
    )
  }
}
