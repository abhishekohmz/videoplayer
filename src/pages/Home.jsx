import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Categories from '../components/Categories'


function Home() {

  const [uploadVideoServerResponse,setUploadVideoServerResponse]=useState({})
  return (
    <div>
        
        <>
        <div className='container d-flex mt-5 mb-5 justify-content-between align-items-center'>
      <div className='add-videos'>
      <Add setUploadVideoServerResponse={setUploadVideoServerResponse}/>
      </div>
      <Link className='fs-5' to={'/watchhistory'} style={{textDecoration:'none', color:'darkorange'}}>Watch History</Link>  
    </div>

    <div className='container-fluid w-100  mb-5 d-flex justify-content-around'>
      <div className="all-videos ms-5 ps-5 ">
        <h3>All videos</h3>
        <View uploadVideoServerResponse={uploadVideoServerResponse}/>
      </div>
      <div className="categories col-lg-3">
        <Categories/>
      </div>

    </div>

        
        </>
    </div>
  )
}

export default Home