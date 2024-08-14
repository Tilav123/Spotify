import { useState } from 'react'
import './App.css'
import Layout from './layout/Layout'
import songs from './components/Album'
function App() {

  const arr = [
    {
      id: Math.random(),
      title: "Big Dawgs",
      autor: "Morgenshtern",
      img: "/morgen.jpg"
    },
    {
      id: Math.random(),
      title: "Big Dawgs",
      autor: "Morgenshtern",
      img: "/morgen.jpg"
    },
    {
      id: Math.random(),
      title: "Big Dawgs",
      autor: "Morgenshtern",
      img: "/morgen.jpg"
    },
    {
      id: Math.random(),
      title: "Big Dawgs",
      autor: "Morgenshtern",
      img: "/morgen.jpg"
    },
  ]

  return (
    <>
      <Layout>
          <div className='.container'>
            
            <div className="box">
              <div className="up">
              <h1 className='category'>Только для вас</h1>
              <a className='show_all' href="#">Показать все</a>
              </div>

              <div className="item-box">
             {arr.map((item) => songs(item) )}
              </div>

            </div>

          
          </div>
      </Layout>
    </>
  )
}

export default App
