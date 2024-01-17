import React, { useState } from 'react'
import { Button, Card, Modal, ToastContainer } from 'react-bootstrap'
import { addToHistory, deleteVideo } from '../services/allAPI';


function VideoCard({displayData,setDeleteVideoStatus,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () => {setShow(true);
  
    const{caption,embededlink}=displayData
    let today = new Date()
    let timstamp =(new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today));
    let videoDetails={
      caption,embededlink,timstamp
    }
   await addToHistory(videoDetails)
  }





  const removeVideo = async(id)=>{
    // make a api call

    const response = await deleteVideo(id)
    setDeleteVideoStatus(response.data.id)
  }


  const dragStarted=(e,id)=>{
    console.log('drag started id'+id);
    e.dataTransfer.setData("videoId",id)
  }

  return (
    <>
    <Card draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}>
      <Card.Img onClick={handleShow} variant="top" height={300}  src={displayData?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center text-light'>{displayData?.caption}
        {insideCategory?"":<Button onClick={()=>removeVideo(displayData?.id)} className='bg-dark'><i className="fa-solid fa-trash "></i> </Button>}
        </Card.Title>
        
      </Card.Body>
    </Card>

     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <iframe width="100%" height="526" src={`${displayData?.embededlink}?autoplay=1`}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>        
          </Modal.Body>
        
      </Modal>

      
    </>
  )
}

export default VideoCard