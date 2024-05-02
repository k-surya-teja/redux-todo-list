import React , {useState} from 'react';
import react from '../Components/images/react.svg';
import { Info } from '@mui/icons-material';
import { Modal,Button } from 'react-bootstrap';

const Navbar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className='container' style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '10px', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
        <img src={react} width='100px' />
        <h2>React Todo list</h2>
      </div>
      <button className='btn btn-warning' onClick={handleShow}><Info /></button>

      {
        //Modal
      }

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Some Important points</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ol>
            <li>Used Redux Tool-kit to addTodo , deleteTodo , editTodo , selectTodo . </li>
            <li>Also, used localStorage to store the todos locally , so that the data willn't format after refreshing the page.</li>
            <li>Used minimal styles. (Didn't focus on design due to mid-term examinations.)</li>
            <li>Logically , it satisfies every requirement of an user.</li>
          </ol>
          <p>I sincerely request you to go through my portfolio.</p>
          <p>Thank you.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <a className='btn btn-primary' style={{textDecoration:'none',color:"white"}} href='https://klstportfolio.netlify.app/' target='_blank'>
            Portfolio
          </a>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default Navbar
