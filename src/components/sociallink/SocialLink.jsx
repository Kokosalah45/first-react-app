import React, { Component } from 'react'
import s from './sociallink.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default class SocialLink extends Component {
  render() {
    const {source , image} = this.props;
    return (
      <a className={`${s.socialLink}`} href={source}>
          <FontAwesomeIcon icon={image}/>
      </a>
    )
  }
}
