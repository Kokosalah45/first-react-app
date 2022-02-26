import s from  './Imageviewerr.module.scss'
import { Component } from 'react'
import shortid from 'shortid'
import Image from '../imagecomponent/Image';
import Modal from '../modal/Modal';
import {cabin , cake, circus, game , safe , submarine} from '../../images';

 class ImageViewer extends Component {
  state = {
    isModalOpen : false,
    images : [
      {image : cabin , name : 'log cabin'},
      {image :cake , name : 'Tasty Cake' },
      {image :circus , name : 'Circus Tent' },
      {image :game , name : 'Controller'},
      {image :safe , name : 'Locked Safe' },
      {image :submarine , name : 'Submarine'}  ,
    ],
    idsAdded : false,
    selectedImgId : ''
  }
  onImgSelect = (id) =>{
    this.setState({selectedImgId :id})
  }
  closeModal = ()=>{
    this.setState({selectedImgId : ''})
  }
  componentDidMount(){
    this.setState(
      {
        images : this.state.images.map(image => Object.assign(image,{id : shortid.generate()})),
        idsAdded : true
      }
    )
  }
 
  requestModal(selectedImgId,images){
   
    const [{name , image}]= images.filter(img => img.id === selectedImgId);
    return <Modal name={name} image={image} closeModal={this.closeModal}/>
    
  }
  //el mfrod hena be api tb3an we mgb4 el sowar be import asasan bas ma 3alena
  render() {
    const {images , idsAdded , selectedImgId} = this.state
  
    return (
      <>
       <div className={`${s.imageViewerContainer}`}>
          {idsAdded ? images.map(img => <Image key={img.id} imgData={img} onClick={this.onImgSelect} />) : null}
      </div>
      {
      selectedImgId ? this.requestModal(selectedImgId,images) : null
    }
      </>
     
     
    )
  }
}

export default ImageViewer;
