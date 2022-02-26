import React, { Component } from 'react'
import s from './image.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
export default class Image extends Component {
  render() {

      const {
          imgData : {
          image,
          id
          },
          onClick
    } = this.props;
    return (
     <figure className={`${s.picture}`}>
        <img  src={image} alt="" />
        <div className={`${s.pictureHover}`} onClick={ () => onClick(id) }>
            <FontAwesomeIcon icon={faPlus} />
        </div>
     </figure>
    )
  }
}
