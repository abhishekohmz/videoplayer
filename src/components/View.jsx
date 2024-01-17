import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from '../components/VideoCard'
import { getAllvideos } from '../services/allAPI'

function View({uploadVideoServerResponse}) {

  const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)

  const [allvideo,setAllvideo]=useState([])

  const getUploadVideos = async ()=>{
    // make api call
    const {data} = await getAllvideos()
    console.log(data);
    setAllvideo(data)
  }
  useEffect(()=>{
    getUploadVideos()
    setDeleteVideoStatus(false)

  },[uploadVideoServerResponse,deleteVideoStatus])

  console.log(allvideo);



  return (
    <>
    <Row>
      {
        allvideo.length>0?
        allvideo.map(video=>(
          <Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard displayData={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
      </Col>
        ))
        : <p>nothing to display</p>
      }

    </Row>
    </>
  )
}

export default View