import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getallHistory } from '../services/allAPI'


function WatchHistory() {

  const [history,setHistory]=useState([])

  const handlHistory = async ()=>{
    // make api call
    const {data}=await getallHistory()
    console.log(data);
    setHistory(data)
  }

console.log(history);

const handleDeleteHistory=async(id)=>{
  await deleteHistory(id)
  handlHistory()
}

  useEffect(()=>{
    handlHistory()
  },[])
  return (
    <>
    <div className='container d-flex mt-5 mb-5 justify-content-between align-items-center'>
      <h3 className='text-light'>Watch History</h3>
      <Link to={'/home'} style={{textDecoration:'none',color:'orange'}}><i className="me-3 fa-solid fa-backward fa-fade"></i>Back To Home</Link>

    </div>

    <table className='table container mt-5 mb-5 border'>
      <thead>
        <tr>
          <th>##</th>
          <th>Caption</th>
          <th>URl</th>
          <th>Timestrap</th>
          <th>Action</th>
        </tr>

      </thead>
      <tbody>
        {
          history?.length>0?history?.map((item,index)=>(
        <tr key={index}>
          <td>{index+1}</td>
          <td>{item.caption}</td>
          <td>{item.embededlink}</td>
          <td>{item.timstamp}</td>
          <td><button onClick={()=>handleDeleteHistory(item?.id)} className='btn border'><i className='fa-solid fa-trash text-danger'></i></button></td>
        </tr>
          )):<p className='fs-4 text-center'>No WatchHistories</p>
        }
        
      </tbody>
    </table>
    </>
  )
}

export default WatchHistory