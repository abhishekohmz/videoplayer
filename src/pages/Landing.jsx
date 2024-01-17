import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';



function Landing() {
    const navigateByUrl= useNavigate()
  return (
    <div>
        <>
        <Row className='m-5 d-flex align-items-center justify-content-between'>
            <Col></Col>
            <Col lg={5}>
            <h3 style={{marginTop:'10px',color:'white'}}>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{textAlign:'justify', color:'white'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, quisquam! Maxime impedit repellat eos. Fugit reprehenderit, molestiae nihil blanditiis quas atque. Cum ut corrupti in facilis dolores delectus vel reprehenderit.</p>
            <button onClick={()=>navigateByUrl('/home')} className='btn btn-light mt-3 rounded'>Get Started</button>
            </Col>
            <Col lg={5}>
                <img style={{borderRadius:'20%'}} className='img-fluid ' src="https://i.pinimg.com/originals/a3/53/a5/a353a55d9a3895d335448b1c27d094df.gif" alt="player" />
            </Col>
            <Col></Col>
        </Row>

        <Row style={{justifyContent:"space-evenly", margin:"20px"}}>
      <h3 style={{textAlign:"center"}}>Features</h3>
      <Card style={{ width: '18rem' }}>
      <Card.Img style={{height:"200px" , paddingTop:"12px" }} variant="top" src="https://c.tenor.com/b8o4QL3NxV4AAAAC/sound-wave-waves.gif" />
      <Card.Body>
        <Card.Title>Save Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', paddingTop:"12px"  }}>
      <Card.Img style={{height:"200px"}} variant="top" src="https://i.gifer.com/origin/55/554818561cbf36d813ef2010cc9d66cc.gif" />
      <Card.Body>
        <Card.Title>Managing</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , paddingTop:"12px"  }}>
      <Card.Img style={{height:"200px"}} variant="top" src="https://i.gifer.com/7s3p.gif" />
      <Card.Body>
        <Card.Title>Categorized Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </Row>

        <div className='container border rounded p-5 border-secondary mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
            <div className='col-lg-5'>
            <h3 className='text-light'>Simple,Powerfull and Fast</h3>
            <h6><span className='text-warning'>Play Everything</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus magnam illum officia cumque pariatur voluptates minus, animi, aliquam ullam, soluta at temporibus! Corrupti quis quibusdam ipsam nihil tempore at obcaecati.</h6>

            <h6><span className='text-warning'>Categories</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus magnam illum officia cumque pariatur voluptates minus, animi, aliquam ullam, soluta at temporibus! Corrupti quis quibusdam ipsam nihil tempore at obcaecati.</h6>


            <h6><span className='text-warning'>Managing history</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus magnam illum officia cumque pariatur voluptates minus, animi, aliquam ullam, soluta at temporibus! Corrupti quis quibusdam ipsam nihil tempore at obcaecati.</h6>

            </div>

            <div className='col-lg-5 video me-5'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/mqqft2x_Aa4?si=UpJhkz3WLLhH3UM7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        </>
    </div>
  )
}

export default Landing