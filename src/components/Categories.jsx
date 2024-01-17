import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAllCategory, getAvideo, updateCategory } from '../services/allAPI';
import VideoCard from './VideoCard';


function Categories() {

  const [categoryName, setCategoryName] = useState("")
  const [allCategory, setAllCategory] = useState([])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory = async () => {
    if (categoryName) {

      let body = {
        categoryName,allvideos:[]
      }
      //make api call
      const response = await addCategory(body)
      // console.log(response);
      if (response.status >= 200 && response.status < 300) {
        //hide modal
        handleClose()

        //reset state
        setCategoryName("")
        //get categories
        getCategories()
      } else {
        toast.error("something went wrong")
      }

    } else {
      toast.warning("please provide category name!")
    }
  }

  const getCategories = async()=>{
    const {data}= await getAllCategory()
    // setAllCategories(data)
    // console.log(data);
    setAllCategory(data)


  }

  useEffect(() => {
    getCategories()
  }, [])

  console.log(allCategory);

  const handleDelete=async(id)=>{
await deleteCategory(id)
getCategories()
  }

  const dragOver=(e)=>{
console.log('video drag over category');
e.preventDefault()
  }

  const videoDrop=async (e,categoryId)=>{

    console.log('video drop inside the category',categoryId);
    const videoId=e.dataTransfer.getData("videoId")
    console.log("video card id",videoId);
// get video details
    const {data} = await getAvideo(videoId)
    console.log(data);

    // get category details
    const selectedCategory = allCategory?.find(item=>item?.id == categoryId)
    selectedCategory.allvideos.push(data)
    console.log(selectedCategory);

    // make api call
    await updateCategory(categoryId,selectedCategory)
    getCategories()

  }
  return (
    <>
      <div className="d-grid m-3 ">
        <button className='btn btn-info' onClick={handleShow}> Add New Category</button>

      </div>




      {

        allCategory?.length>0?allCategory?.map(item => (
          <div className='m-3 border rounded p-3'>

            <div droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)} className="d-flex justify-content-between align-items-center border rounded p-2 ">
              <div >
              <h4 className='text-primary ms-3'>
              {item?.categoryName}
             </h4>
              </div>
              <button onClick={()=>handleDelete(item?.id)} className='btn mx-3'><i className='fa-solid fa-trash text-danger'></i></button>
            </div>

            <Row className='mt-3'>
              {
                item?.allvideos && item?.allvideos.map(
                  card=>(
                    <Col sm={12} className='mb-3'>
                    <VideoCard displayData={card} insideCategory={true}/>
                    </Col>
                  )
                )
              }
            </Row>
          </div>
        )):<p className='fs-5 fw-5 text-danger text-center'>No Categories Added</p>

}

      <Modal
        show={show}
        onHide={handleClose}

        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className='bg-white'>
          <Modal.Title>Upload A Video</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-white'>

          <Form className='border border-secondary rounded p-3'>
            <Form.Group className="mb-3 bg-white border-secondary rounded px-2 " controlId="formBasicEmail">
              <Form.Label className='fs-5'>Enter  Category Name</Form.Label>

              <Form.Control type="email" placeholder="Enter Category Name" onChange={(e) => setCategoryName(e.target.value)} />

            </Form.Group>




          </Form>

        </Modal.Body>
        <Modal.Footer className='bg-white'>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleAddCategory}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
        position='top-center'
        theme='colored'
        autoClose={2000} />
    </>
  )
}

export default Categories