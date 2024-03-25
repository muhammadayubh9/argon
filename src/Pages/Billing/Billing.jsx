import React, { useState } from 'react'
import CardCircle from '../../Assets/CardCircle.png'
import "./Billing.scss"
import Sidebar from '../../Components/Sidebar/Sidebar'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import BillingIcon from '../../Assets/BillingIcon.png'
import PaypallIcon from '../../Assets/PaypallIcon.png'
import BillingHr from '../../Assets/BillingHr.png'
import MasterCard from '../../Assets/Mastercard.png'
import VisaCard from '../../Assets/Visa.png'
function Billing() {
  var [madal, setMadal] = useState({ is: false, for: "del" })
  var bills = [0, 0, 0, 0, 0]
  var info = [0, 0, 0]
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

          <div className='page page__billing'>
            <div className="top">
              <div className="inner">
                <div className="inner__first">
                  <div className="inner__in">
                    <div className="card_img">
                      <h1>Argon x Chakra</h1><img src={CardCircle} alt="" />
                    </div>
                    <h1 className='inner__text1'>7812 2139 0823 XXXX</h1>
                    <div className="card__span">
                      <span>VALID THRU</span><span>CVV</span>
                    </div>
                    <div className='card__span2'>
                      <span>05/24</span><span>09X</span>
                    </div>
                  </div>
                </div>
                <div className="sec">
                  <img className='sec__img' src={BillingIcon} alt="" />
                  <b>Salary</b>
                  <p>Belong Interactive</p>
                  <img className='sec__img2' src={BillingHr} alt="" />
                  <span>+$2000</span>
                </div>
                <div className="thir">
                  <img className='thir__img' src={PaypallIcon} alt="" />
                  <b>Paypal</b>
                  <p>Freelance Payment</p>
                  <img className='thir__img2' src={BillingHr} alt="" />
                  <span>$455.00</span>
                </div>
                <div className="fourt">
                  <div className="fourt__1">
                    <b>Payment Method</b>
                    <span className='span__card'>ADD A NEW CARD</span>
                  </div>
                  <div className="fourt__inner">
                    <div className="input__div">
                      <img src={MasterCard} alt="" />
                      <input type="text" placeholder='7812 2139 0823 XXXX' />
                      <i className="bi bi-pencil-fill"></i>
                    </div>
                    <div className="input__div">
                      <img src={VisaCard} alt="" />
                      <input type="text" placeholder='7812 2139 0823 XXXX' /><i className="bi bi-pencil-fill"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aa">
                <div className="aa__inner">
                  <b>Invoices</b>
                  <button>VIEW ALL</button>
                </div>
                {
                  bills.map((item, index) => (
                    <div key={index} className="aa__wrapper">
                      <div className='wrapper__blog'>
                        <b>March, 01, 2020</b>
                        <p>#MS-415646</p>
                      </div>
                      <div className='wrapper__blog2'>
                        <p>$180</p>
                        <a href={VisaCard} download='Billing img'><i className="bi bi-file-earmark-text-fill"></i>PDF</a>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="bottom">
              <div className="billInfo">
                <h1 className='bill__text'>Billing Information</h1>
                {
                  info.map((item, index) => (

                    <div key={index} className="Info__second">
                      <div className="second__wrapper">
                        <div className="second__inner1">
                          <h1 className='text1'>Oliver Liam</h1>
                          <h1 className='text2'>Company Name: <span>Viking Burrito</span></h1>
                          <h1 className='text3'>Email Address: <span>oliver@burrito.com </span></h1>
                          <h1 className='text4'>VAT Number: <span> FRB1235476</span></h1>
                        </div>
                        <div className="second__inner2">
                          <button className='btn__1' onClick={() => setMadal({ is: true, for: "del" })}><i className="bi bi-trash-fill"></i>DELETE</button>
                          <button className='btn__2' onClick={() => setMadal({ is: true, for: "edit" })}><i className="bi bi-pencil-fill"></i>EDIT</button>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className="billInfo2">
                <div className="bill__inner">
                  <h1>Your Transactions</h1><p><i className="bi bi-calendar-week"></i>23 - 30 March 2020</p>
                </div>
                <h1 className='newest__text'>NEWEST</h1>
                <div className="bill__newest">
                  <div className="newest__item">
                    <i className="bi bi-arrow-down-circle"></i>
                    <b>Netflix</b>
                    <span>
                      <p className='paragraph__item'>27 March 2020, at 12:30 PM</p><p className='paragraph__item2'>-$2500</p>
                    </span>
                  </div>
                  <div className="newest__item2">
                    <i className="bi bi-arrow-up-circle"></i>
                    <b>Apple</b>
                    <span>
                      <p className='paragraph__item3'>27 March 2020, at 12:30 PM</p><p className='paragraph__item4'>+$2500</p>
                    </span>
                  </div>
                </div>
                <h1 className='yesterday__text'>YESTERDAY</h1>
                <div className="bill__yesterday">
                  <div className="yesterday__item">
                    <i className="bi bi-arrow-up-circle"></i>
                    <b>Stripe</b>
                    <span>
                      <p className='paragraph__yesterday'>26 March 2020, at 13:45 PM</p><p className='paragraph__yesterday2'>+$800</p>
                    </span>
                  </div>
                  <div className="yesterday__item2">
                    <i className="bi bi-arrow-up-circle"></i>
                    <b>HubSpot</b>
                    <span>
                      <p className='paragraph__yesterday3'>26 March 2020, at 12:30 PM</p><p className='paragraph__yesterday4'>+$1700</p>
                    </span>
                  </div>
                  <div className="yesterday__item3">
                    <i className="bi bi-exclamation-circle"></i>
                    <b>Webflow</b>
                    <span>
                      <p className='paragraph__yesterday5'>26 March 2020, at 05:00 AM</p><p className='paragraph__yesterday6'>Pending</p>
                    </span>
                  </div>
                  <div className="yesterday__item4">
                    <i className="bi bi-arrow-down-circle"></i>
                    <b>Microsoft</b>
                    <span>
                      <p className='paragraph__yesterday7'>25 March 2020, at 16:30 PM</p><p className='paragraph__yesterday8'>-$987</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Billing