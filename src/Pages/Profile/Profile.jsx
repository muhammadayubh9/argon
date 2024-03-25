import React, { useState } from 'react'
import './Profile.scss'
import edit from '../../Assets/img/profile-edit.png'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import socialIcon from '../../Assets/img/Socialmedia.svg'
import img1 from '../../Assets/img/img1.png'
import img2 from '../../Assets/img/img2.png'
import img3 from '../../Assets/img/img3.png'
import img4 from '../../Assets/img/img4.png'
import bg1 from '../../Assets/img/bg1.png'
import bg2 from '../../Assets/img/bg2.png'
import bg3 from '../../Assets/img/bg3.png'
import avatars from '../../Assets/img/avatars.png'

function Profile() {
  const [active, setActive] = useState(1)
  const handleButtonClick = (buttonId) => {
    setActive(buttonId);
  };

  const [showModal, setShowModal] = useState(false);
  const [inputValues, setInputValues] = useState({ input1: '', input2: '', input3: '' });
  const [listItems, setListItems] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleAddButtonClick = () => {
    // Check if all inputs are filled
    if (inputValues.input1 && inputValues.input2 && inputValues.input3) {
      // Add the data to the list
      setListItems((prevList) => [...prevList, { ...inputValues }]);
      // Clear input values
      setInputValues({ input1: '', input2: '', input3: '' });
    }
  };

  return (
    <div className="pages">
      <Sidebar />
      <div className="page_hover">
        <Header />
        <div className='page'>
          <div className="prof__main">
            <div className="box__top">
              <div className="account">
                <span>
                  <span className='editImg'>
                    <img src={edit} alt="" />
                  </span>
                  <span className='edit__info'>
                    <h4>Alec Thompson</h4>
                    <p>alec@simmmple.com</p>
                  </span>
                </span>
                <ul className="profile__list">
                  <li onClick={() => handleButtonClick(1)} className={active === 1 ? 'active list__item ' : 'list__item '}>
                    <p><i class="bi bi-box"></i>  OVERVIEW</p>
                  </li>
                  <li onClick={() => handleButtonClick(2)} className={active === 2 ? 'active list__item ' : 'list__item'}>
                    <p><i class="bi bi-files"></i> TEAMS</p>
                  </li>
                  <li onClick={() => handleButtonClick(3)} className={active === 3 ? 'active list__item ' : 'list__item'}>
                    <p><i class="bi bi-wrench-adjustable"></i> PROJECTS</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="box__center">
              <div className="setttings">
                <ul className="settin__list">
                  <li className="set__item">
                    <h3>Platform Settings</h3>
                    <p>ACCOUNT</p>
                    <label class="inline-flex items-center mb-5 cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" />
                      <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      <span class="span__toggle   ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email me when someone follows me</span>
                    </label>
                    <label class="inline-flex items-center mb-5 cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" />
                      <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      <span class="span__toggle   ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email me when someone answers on my post</span>
                    </label>
                    <label class="inline-flex items-center mb-5 cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" />
                      <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      <span class="span__toggle   ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email me when someone mentions me</span>
                    </label>
                    <p>APPLICATION</p>
                    <label class="inline-flex items-center mb-5 cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" />
                      <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      <span class="span__toggle   ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">New launches and projects</span>
                    </label>
                    <label class="inline-flex items-center mb-5 cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" />
                      <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      <span class="span__toggle   ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Monthly product updates</span>
                    </label>
                    <label class="inline-flex items-center mb-5 cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" />
                      <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      <span class="span__toggle   ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Subscribe to newsletter</span>
                    </label>
                  </li>
                  <li className="set__item item__box2">
                    <h3>Profile Information</h3>
                    <p>Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>
                    <div className='eychar'></div>
                    <p className='title'><h5>Full Name: </h5> <p> Alec M. Thompson</p></p>
                    <p className='title' >Mobile: <p>(44) 123 1234 123</p> </p >
                    <p className='title' >Email: <p>alecthompson@mail.com</p></p >
                    <p className='title' >Location: <p>United States</p></p >
                    <p className='title' >Social Media: <img src={socialIcon} alt="" /></p >
                  </li>
                  <li className="set__item item__box3">
                    <h3>Conversations</h3>
                    <ul className='box3__list'>
                      <li className="box3__item">
                        <div className='box3__div'>
                          <img src={img1} alt="" />
                          <span>
                            <p className='item__name'>Esthera Jackson</p>
                            <p>Have a great afternoon...</p>
                          </span>
                        </div>
                        <p className='reply'>REPLY</p>
                      </li>
                      <li className="box3__item">
                        <div className='box3__div'>
                          <img src={img2} alt="" />
                          <span>
                            <p className='item__name'>Esthera Jackson</p>
                            <p>Have a great afternoon...</p>
                          </span>
                        </div>
                        <p className='reply'>REPLY</p>
                      </li><li className="box3__item">
                        <div className='box3__div'>
                          <img src={img3} alt="" />
                          <span>
                            <p className='item__name'>Esthera Jackson</p>
                            <p>Have a great afternoon...</p>
                          </span>
                        </div>
                        <p className='reply'>REPLY</p>
                      </li><li className="box3__item">
                        <div className='box3__div'>
                          <img src={img4} alt="" />
                          <span>
                            <p className='item__name'>Esthera Jackson</p>
                            <p>Have a great afternoon...</p>
                          </span>
                        </div>
                        <p className='reply'>REPLY</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="box__bottom"> 
              <h2>Projects</h2>
              <p>Architects design houses</p>
              <ul className="bb__list">
                <li className="bb__item">
                  <img src={bg1} alt="" />
                  <p>Project #1</p>
                  <h3>Modern</h3>
                  <p>As Uber works through a huge amount of internal <br /> management turmoil.</p>
                  <span className='bb__social'>
                    <button className='bb__btn'>VIEW ALL</button>
                    <img src={avatars} alt="" />
                  </span>
                </li>
                <li className="bb__item">
                  <img src={bg2} alt="" />
                  <p>Project #2</p>
                  <h3>Scandinavian</h3>
                  <p>Music is something that every person has his or her own  specific opinion about.</p>
                  <span className='bb__social'>
                    <button className='bb__btn'>VIEW ALL</button>
                    <img src={avatars} alt="" />
                  </span>
                </li>
                <li className="bb__item">
                  <img src={bg3} alt="" />
                  <p>Project #3</p>
                  <h3>Minimalist</h3>
                  <p>Different people have different taste, and various <br /> types of music.</p>
                  <span className='bb__social'>
                    <button className='bb__btn'>VIEW ALL</button>
                    <img src={avatars} alt="" />
                  </span>
                </li>
                <li onClick={() => setShowModal(true)} className='bb__item__last'>
                  <h2>+ <br /> Create New Project </h2>
                </li>
                <li  onClick={() => setShowModal(true)} className='modal1'>
                  {
                    showModal && (
                      <div className="modal ">
                      <input
                        type="text"
                        name="input1"
                        placeholder="Add Img"
                        value={inputValues.input1}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        name="input2"
                        placeholder="Add Project Number"
                        value={inputValues.input2}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        name="input3"
                        placeholder="Add Title"
                        value={inputValues.input3}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        name="input1"
                        placeholder="Add Description"
                        value={inputValues.input1}
                        onChange={handleInputChange}
                      />
                      <button className='modal__btn' onClick={handleAddButtonClick }>Add</button>
                    </div>
                    )
                  }
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Profile