import React from 'react'
import './product.css'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'

function Product() {
  const dispatch =useDispatch()
  const counter = useSelector(state => state.counter)
    const [data, setdata] = useState([])
  useEffect(()=>{
    fetchData()


  },[])
  function fetchData(){
      axios.get('https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json')
      .then(res => {
        
        let arr=[]
        for(const item in res.data){
            arr.push(res.data[item])
        }
        setdata(arr)
      }).catch(error=>{
        console.log(error)
      })
  }
   
    return(
        <div className='productContainer'>
            <div><h2>Products</h2></div>
            {/* counter : {counter} */}
        <div className='productWrapper'>
      
      {
       
        data?.map((item,index)=>{
            return (
              <div className='proList' key={index}>
                {/* {item.newPrice}
                {item.productName} */}

                      <div className='productCardStyle' >
                        <img className='productImageStyle' src={item.productImage} />
                        <div className='productName'><h4>{item.productName}</h4></div>

                        <div className='priceClass'>
                          <div>
                          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
                          </svg>
                          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
                          </svg>
                          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
                          </svg>
                          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
                          </svg>
                          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
                          </svg>
                          </div>

                        <div className='priceBar'><p><s>{item.oldPrice}/- </s>  <b>{item.newPrice}/- </b></p></div>
                        </div>
                        
                        <button className='btnClass' onClick={()=> dispatch({type:'UPDATE_CART_COUNT'})}> ADD TO CART </button>
                        
                    </div>
              </div>
            )
        })
      }
    </div>

        </div>
        
    )
}

export default Product