import { useState } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTodo } from "../redux/actions/todoActions";

function EditTodo({todo}) {
    const [show, setShow] = useState(false);
    const [text ,setText]=useState(todo.text)
    
    const dispatch=useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="info" onClick={handleShow}>
         Edit
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <FormControl type="text" value={todo.text} onChange={e=>setText(e.target.value)}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{
              dispatch(editTodo(todo.id,text));
              handleClose()
            }}>save</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default EditTodo