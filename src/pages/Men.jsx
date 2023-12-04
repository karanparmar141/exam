import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../compentes/Header'

const Men = () => {
  let [arr,setArr]=useState([])
  useEffect(() => {
    axios('https://dummyjson.com/products')
      .then(pro=>setArr(pro.data.products))
  }, [])
console.log(arr.title)
  return (
    <>
    <Header/>
    {
      arr.map((pro)=>{
        return<>
        <img src={pro.thumbnail} alt="" />
        <h1>{pro.title}</h1>
        {console.log(pro.title)}
        </>
      })
    }
    </>
  )
}

export default Men