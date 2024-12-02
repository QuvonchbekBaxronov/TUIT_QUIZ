import { useState } from "react"
import "./Subjects.scss"
import latex from "../../img/latex.png"
import computer from "../../img/cisco.png"
import psixologiya from "../../img/psixologiya.png"
import talimnazariya from "../../img/talimnazariya.jpg"
import psixologiya2 from "../../img/psixologiya2.jpg"
function Subjects({setOnQuiz,select,setSelect,number,setNumber}) {
  return (
    <div className="subjects">
        <div className="container">
          <h1>Quyidagi fanlardan birini tanlang:</h1>
          <ul>
            <li onClick={()=>{setSelect(1)}}>
            <img src={computer} alt="" />
              <span>
                <h3>Kompyuter tarmoqlari</h3>
                <div>
                  <h5>Savollar sonini tanlang</h5>
                  <select value={number} onChange={(e)=>{setNumber(e.target.value)}} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                  </select>
                </div>
                <button onClick={()=>{setOnQuiz(true);setSelect(2)}}>Boshlash</button>
              </span>
            </li>
            <li onClick={()=>{setSelect(2)}}>
              <img src={latex} alt="" />
              <span>
                <h3>Latexga kirish </h3>
                <div>
                  <h5>Savollar sonini tanlang</h5>
                  <select value={number} onChange={(e)=>{setNumber(e.target.value)}} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                  </select>
                </div>
                <button onClick={()=>{setOnQuiz(true);setSelect(2)}}>Boshlash</button>
              </span>
            </li>
            <li onClick={()=>{setSelect(3)}}>
              <img src={psixologiya} alt="" />
              <span>
                <h3>Ta'lim psixologiyasi</h3>
                <div>
                  <h5>Savollar sonini tanlang</h5>
                  <select value={number} onChange={(e)=>{setNumber(e.target.value)}} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                  </select>
                </div>
                <button onClick={()=>{setOnQuiz(true);setSelect(2)}}>Boshlash</button>
              </span>
            </li>
            <li onClick={()=>{setSelect(4)}}>
              <img src={talimnazariya} alt="" />
              <span>
                <h3>Ta'lim nazariyasi</h3>
                <div>
                  <h5>Savollar sonini tanlang</h5>
                  <select value={number} onChange={(e)=>{setNumber(e.target.value)}} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                  </select>
                </div>
                <button onClick={()=>{setOnQuiz(true);setSelect(2)}}>Boshlash</button>
              </span>
            </li>
            <li onClick={()=>{setSelect(4)}}>
            <img src={psixologiya2} alt="" />
              <span>
                <h3>Pedagogika psixologiya</h3>
                <div>
                  <h5>Savollar sonini tanlang</h5>
                  <select value={number} onChange={(e)=>{setNumber(e.target.value)}} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                  </select>
                </div>
                <button onClick={()=>{setOnQuiz(true);setSelect(2)}}>Boshlash</button>
              </span>
            </li>
            <li onClick={()=>{setSelect(4)}}>
              <h4>Kompyuter tarmoqlari</h4>
              <span>
                <h3>Latexga kirish </h3>
                <div>
                  <h5>Savollar sonini tanlang</h5>
                  <select value={number} onChange={(e)=>{setNumber(e.target.value)}} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                  </select>
                </div>
                <button onClick={()=>{setOnQuiz(true);setSelect(2)}}>Boshlash</button>
              </span>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Subjects