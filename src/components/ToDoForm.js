import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function ToDoForm(props) {
    const [des, setDes] = useState(props.des || '');
    const [assignee, setAssignee] = useState(props.assignee || '');


    function formSubmit() {
      props.addTask({des, assignee});
    };

  return(
  <Form>
      <Form.Group controlId='todo-des'>
         <Form.Label>Task Description</Form.Label>
         <Form.Control 
         as='textarea'
         rows='3'
         placeholder="Enter Description" 
         value={des}
         onChange={(e) => {
           setDes(e.target.value);
         }}
         />
    </Form.Group>

      <Form.Group controlId='todo-assignee'>
        <Form.Label>Assigned To:</Form.Label>
        <Form.Control
         type='text'
         placeholder='Enter name'
         value={assignee}
         onChange={(e) =>{
           setAssignee(e.target.value)
         }} 
         />
    </Form.Group>

    <Button variant='primary' type='button' onClick={formSubmit}>
       Add addTask
    </Button>

  </Form>
  )
}