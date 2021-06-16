import React, { useState } from 'react'
import './App.css';

import Form from './components/Form'
import TodoList from './components/TodoList'
import UploadForm from './components/UploadForm'
import UploadList from './components/UploadList'
import { Modal } from './components/Modal'

function App() {

  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);

  return (
    <div className="app">
      {/* <section class="app-header">
        <div className="app-header-container">
          <nav className="navbar">
            <header>JustContent</header>
            <ul class="nav-menu">
              <li class="nav-item">
                <a class="product" href="#product">Product</a>
              </li>
            </ul>
          </nav>
        </div>
      </section> */}
      <header className="app-header">
        <h4>JustContent</h4>
      </header>

      <div className="app-main">
        <div className="app-sidenav">
          <div className="app-sidenav-filter">
            <li><a href="#all-items">All Items</a></li>
          </div>
        </div>
        
        <div className="app-content">
            <div className="app-path">
              <div className="path">
                <p>Path</p>
              </div>
              <div className="destination">
                <h3>Item Name</h3>
              </div>
            </div>

            <div className="content-container">
              <div className="app-item">
                <div className="info">
                  <img src="https://via.placeholder.com/336x336" alt=""></img>
                  <h2>Item Name</h2>
                  <h3>Category</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>

              <div className="app-upload">
                <div className="upload-modal-btn">
                  {show ? <div onClick={closeModalHandler} className="back-drop"></div> : null}
                  <button onClick={() => setShow(true)} className="btn-openModal">UPLOAD</button>
                  {/* <Form />
                  <TodoList /> */}
                  <Modal show={show} close={closeModalHandler}/>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
