import React, { useState } from 'react'
import { Button, Modal ,Form} from 'react-bootstrap';
import {uplaodVideo} from '../services/allAPI'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function Add({setUploadVideoServerResponse}) {

  const [video,setVideo]=useState({id:"",caption:"",url:"",embededlink:""})

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // console.log(video);

  const embededlink = (e)=>{

    const {value}=e.target
    if(value){
      const link =`https://www.youtube.com/embed/${value.slice(-11)}`
    setVideo({...video,embededlink:link})

    }
    else{
      setVideo({...video,embededlink:""})

    }

    // <iframe width="935" height="526" src="https://www.youtube.com/embed/QrbQpOTdTfM" title="Abraham Ozler | My Opinion | Jayaram | Malayalam" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

  }

  const handleUpload = async ()=>{

    const {id,caption,url,embededlink}=video

    if(!id || !caption || !url || !embededlink){
      toast.warning('please enter all fields')
    }
    else{
      const response = await uplaodVideo(video)
      // console.log(response);
      if(response.status>200 && response.status<300){
        setUploadVideoServerResponse(response.data)
        toast.success(`${response.data.caption} video succesfully uploaded`)

        // hide modal
        handleClose()

        setVideo({
          id:"",caption:"",url:"",embededlink:""
        })

      }
      else{
        // console.log(response);
      toast.error('please provide unique id')
      }
    }

  }


  return (
    <>
    <div className='d-flex align-items-center'>
      <h5 style={{color:'white'}}>Upload Videos</h5>
      <button onClick={handleShow} className='btn'><i style={{fontSize:'25px',marginTop:'-20px '}} className="fa-solid fa-circle-plus fa-fade"></i></button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>

          <Form>
          <Form.Group className="mb-3">
        <Form.Control onChange={(e)=>setVideo({...video,id:e.target.value})} type="text" placeholder="Enter Video Id" />
      </Form.Group>
      

      <Form.Group className="mb-3" >
        <Form.Control onChange={(e)=>setVideo({...video,caption:e.target.value})} type="text" placeholder="Enter Video Title" />
      </Form.Group>


      <Form.Group className="mb-3">
        <Form.Control onChange={(e)=>setVideo({...video,url:e.target.value})} type="text" placeholder="Enter Video Image URL" />
      </Form.Group>


      <Form.Group className="mb-3">
        <Form.Control  onChange={embededlink} type="text" placeholder="Enter Video Link" />
      </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className='btn btn-light' onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary" className='btn btn-warning'>Upload</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
      position='top-center'
      theme='colored'
      autoClose={2000}
      />
      
    </div>
    </>
  )
}

export default Add