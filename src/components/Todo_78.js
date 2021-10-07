import { useState } from 'react';
import Modal_78 from './Modal_78';
import Backdrop_78 from './Backdrop_78'

function Todo_78(props) {
  const [showModal,setShowModal] = useState();

  function showModalHandler(){
    setShowModal(true);
  }

  function closeModalHandler(){
    setShowModal(false);
  }

  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={showModalHandler}>Delete</button>
        </div>
      </div>
      {showModal && <Backdrop_78 onClose={closeModalHandler}/>}
      {showModal && <Modal_78 text= 'Are you sure?' onClose={closeModalHandler}/>}
    </div>
  );
}

export default Todo_78;
