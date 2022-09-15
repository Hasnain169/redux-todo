import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../action";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Todo = () => {
const [data, setData] = useState("");
const [show, setShow] = useState(false);
const [edit, setEdit] = useState("");
const [ind, setInd] = useState("");

const handleClose = () => setShow(false);

const dispatch = useDispatch();
const list = useSelector(state => state.todoReducer.list);

const handleShow = (el) => {
  setShow(true);
  setEdit(el);
};

const name_edit = ()=>{
  dispatch(editTodo(edit,ind))
  handleClose()
}


return (
  <>
  <div className="main">
    <div className="navbar">
    <div className="nav-content">
      <h1>Redux Todo List</h1>
    </div>
    </div>
    <div className="home">
    <div className="home-content">
      <h1>All Todos</h1>
      <div className="add-data">
      <h2>Add Your Name Here</h2>
      <input
        type="text"
        placeholder="Add Name"
        className="add-input"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button
        className="botn botn-add"
        onClick={() => dispatch(addTodo(data), setData(""))}
      >
        Add
      </button>
      </div>
      <div className="show-items">
      {list.map((ele, index) => {
        return (
        <div className="each-items" key={index}>
          <h3>{ele.data}</h3>
          <button
          className="botn botn-del"
          onClick={() => dispatch(deleteTodo(index))}
          >
          Delete
          </button>
          <button
          className="botn botn-edit"
          onClick={() => {
            handleShow(ele.data);
            setInd(index);
          }}
          >
          Edit
          </button>
        </div>
        );
      })}
      </div>
    </div>
    </div>
    <div className="modal">
    <Modal show={show} >
          <h3 className="text-center">Edit Your Name Here</h3>
        <Modal.Header className="headerr">
          <div className="input">
          <input
        type="text"
        placeholder="Add Name"
        // className="add-input"
        value={edit}
        onChange={(e) => setEdit(e.target.value)}
        />
          </div>
        </Modal.Header>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> name_edit()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  </div>
  </>
);
};

export default Todo;
