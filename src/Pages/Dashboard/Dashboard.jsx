import React from 'react'
import "./Dashboard.scss"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import Sidebar from '../../Components/Sidebar/Sidebar'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { this_month, web_visits } from '../../lib/dashboard'
import MainChart from '../../Components/Chart/mainChart';
import SecondChart from '../../Components/Chart/SecondChart';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="pages">
      <Sidebar />
      <div className="page_hover">
        <Header />
        <div className='page dashboard'>
          <div className="top_analiystic">
            {
              this_month.map((item, index) => (
                <div className="analiystic" key={index}>
                  <div className="jcsb">
                    <div className="left">
                      <h4>{item.title}</h4>
                      <h2>{item.content}</h2>
                    </div>
                    <i className={item.icon}></i>
                  </div>
                  <div className="foot">
                    <h3>{item.since}</h3>
                    <h4>Since last month</h4>
                  </div>
                </div>

              ))
            }
          </div>
          <div className="charts_hover">
            <div className="main_chart">
              <div className="yozuv_hover">
                
              <h2>Sales overview</h2>
              <div className="how_more">
                <p><span>(+5) more</span> in 2021</p>
              </div>
              </div>
              <MainChart/>
            </div>
            <div className="second_chart">
              <h3>PERFORMANCE</h3>
              <h2>Total orders</h2>
              <SecondChart />
            </div>
          </div>
          <div className="tables_hover">
            <div className="main_table">
                <div className="jcsb main_table_header">
                  <h1>Page visits</h1>
                  <Link to="#">SEE ALL</Link>
              </div>
              <div className="main_table_inner" style={{background: "#F7FAFC"}}>
                <p>PAGE NAME</p>
                <p>VISITORS</p>
                <p>UNIQUE USERS</p>
                <p>BOUNCE RATE</p>
              </div>
              {
                web_visits.map((item,index) => (
                  <div className="main_table_inner">
                    <p>{item.page}</p>
                    <p>{item.visitor}</p>
                    <p>{item.uniq}</p>
                    <p>{item.rete}</p>
                  </div>
                ))
              }
              </div>
            <div className="main_table">
                <div className="jcsb main_table_header">
                  <h1>Social traffic</h1>
                  <Link to="#">SEE ALL</Link>
              </div>
              <div className="main_table_inner" style={{background: "#F7FAFC"}}>
                <p>REFERRAL</p>
                <p>VISITORS</p>
                <p className='pr_orn'></p>
              </div>
              {
                web_visits.map((item,index) => (
                  <div className="main_table_inner">
                    <p>{item.page}</p>
                    <p>{item.visitor}</p>
                    <div className="procent">
                      {item.rete}%
                      <div className="span_hover"><span style={{width: item.rete + "%"}}></span></div>
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
  )
}

export default Dashboard