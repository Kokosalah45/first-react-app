import React, { Component } from 'react'
import * as brandIcons from '@fortawesome/free-brands-svg-icons'
import SocialLink from '../sociallink/SocialLink'
import s from './sociallinks.module.scss'


export default class SocialLinks extends Component {

  render() {
    
    const {socialLinks} = this.props;
    return (  
      <div className = {`${s.socialLinksContainer}`}>
      {socialLinks.map(socialLink =>  <SocialLink key={socialLink.image} image={brandIcons[socialLink.image]} source={socialLink.source}/>)}
     
      </div>
    )
  }
}
