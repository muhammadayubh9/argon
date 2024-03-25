import React, { useState } from 'react'
import './Tables.scss'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
// import { table } from './data'
import person from '../../Assets/person.png'
import icon from '../../Assets/img/icon.png'
// import { project } from './data2'
import { tableAuthors } from '../../lib/tableAuthors'

function Tables() {
  var [madal, setMadal] = useState({ is: false, for: "del" })
  return (
    <>
    <div className={madal.is ? "billingMadalHover opened" : "billingMadalHover"} onClick={(e) => e.target.classList[0] == "billingMadalHover" ? setMadal({ is: false, for: "" }) : null}>
      <div className={madal.is ? "billingMadal opened" : "billingMadal"}>
        {
          madal.for == "del" ?
            <div className='modal__div'>
              <h1>Are you Sure</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga perspiciatis dolores voluptas, eum aliquid asperiores? Fugit laudantium sunt quae necessitatibus eos ipsum quam, provident aperiam voluptatem voluptates error quidem officiis?</p>
              <div className="button__div">
                <button className='modal__btn' onClick={() => setMadal({ is: false, for: "" })}>NO</button>
                <button className='modal__btn1' onClick={() => setMadal({ is: false, for: "" })}>Yes</button>
              </div>
            </div>

            :
            <div className="modal__div1">
              <h1>Add something</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, voluptas!</p>
              <div className="input__div">
              <label>Add</label>
              <input type="text" placeholder='Add something' />
              </div>
              <div className="input__div">
              <label>Delete something</label>
              <input type="text" placeholder='Delete something' />
              </div>
              <div className="button__div1">
                <button className='modal__btn' onClick={() => setMadal({ is: false, for: "" })}>Cancel</button>
                <button className='modal__btn1' onClick={() => setMadal({ is: false, for: "" })}>Edit</button>
              </div>

            </div>
        }
      </div>
    </div>
    
    <div className="pages">
      <Sidebar />
      <div className="page_hover">
        <Header />
        <div className='page table'>
        <div className="top_table_hover">
            <h1>Authors Table</h1>
          <div className="top_table">
            <div className="row">
              <p>AUTHOR</p>
              <p>FUNCTION</p>
              <p>STATUS</p>
              <p>EMPLOYED</p>
            </div>
            {
              tableAuthors.map((item, index) => (
                <div className="row">
                  <div className="user_datas">
                    <img src={person} alt="" />
                    <div className="datas">
                      <h4>{item.name}</h4>
                      <h5>{item.email}</h5>
                    </div>
                  </div>
                  <div className="user_datas">
                    <div className="datas">
                      <h4 style={{color: "#718096"}}>{item.jobTitle}</h4>
                      <h5>{item.jobName}</h5>
                    </div>
                  </div>
                  <div className="isOnline_hover">
                    <span style={{backgroundColor : item.isOnline ? "#48BB78" : "#CBD5E0"}}>{item.isOnline ? "Online" : "Ofline"}</span>
                  </div>
                  <div className="isOnline_hover">
                    <p>14/06/21</p>
                  </div>
                  <div className="isOnline_hover">
                    <button onClick={()=> setMadal({for: "edit", is: true})}>Edit</button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="top_table_hover">
            <h1>Projects</h1>
            <p><i className='bi bi-check'></i> <span>30 done</span> this month</p>
          <div className="top_table">
            <div className="row">
              <p>COMPANIES</p>
              <p>BUDGET</p>
              <p>STATUS</p>
              <p>COMPLETION</p>
            </div>
            {
              tableAuthors.map((item, index) => (
                <div className="row">
                  <div className="user_datas">
                    <img src={person} alt="" />
                    <div className="datas">
                      <h4>{item.name}</h4>
                    </div>
                  </div>
                  <div className="user_datas">
                    <div className="datas">
                      <h4 style={{color: "#718096"}}>$14,000</h4>
                    </div>
                  </div>
                  <div className="isOnline_hover">
                    <p>{item.isOnline ? "working" : "Done"}</p>
                  </div>
                  <div className="complation">
                    <p>60%</p>
                    <span><div></div></span>
                  </div>
                  <div className="isOnline_hover">
                    <button><i className='bi bi-three-dots-vertical'></i></button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        </div>
        <Footer />
      </div>
    </div>
    </>
  )
}

export default Tables