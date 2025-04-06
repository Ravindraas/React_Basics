import React, { useState, useEffect } from 'react'
import axios from 'axios';
//create array to store movie names as movie_list
const movie_list = [{
    movie_name: "salaar",
    actor_name: "Prabhas",
    release_date: "2024"
}, {
    movie_name: "r18",
    actor_name: "Ramcharan",
    release_date: "2027"
}, {
    movie_name: "Devara",
    actor_name: "NTR",
    release_date: "2025"
},
{
    movie_name: "Mahesh36",
    actor_name: "Mahesh",
    release_date: "2028"
}
]
export default function Cards() {
    //create useState
    const [ProductList, updateProductList] = useState([]);
    const [filterlistdata, setfilterlistdata] = useState([]);
    const [selectdish, setselectdish] = useState("");

    async function getproducts(){
        //fake api url
        const url=await axios.get("https://dummyjson.com/products");
        const response = url.data;
        console.log("response", response.products);
        updateProductList(response.products);
    }
    //if you want movie_list at starting then use useEffect
    useEffect(()=>{
        getproducts();
        const filterproducts = ProductList.filter((copyOfProductList)=>{
        return copyOfProductList === "selectdish";
        // console.log("movie_list", movie_list);//it will run infinite so use dependencey injection
        // updateProductList(movie_list);
        
    })
    setfilterlistdata(filterproducts);
    },[]) // mounting phase
    function hadleitem(event){
        console.log(event);
    }
    return (
        <>
        <h2>Select Item</h2>
        <select onChange={hadleitem}>
            <option>ONE</option>
            <option>TWO</option>
        </select>
        <div className="container">
            <div className="row" >
                {
                    ProductList.map((movie_list) => {
                        return (
                            <div className="col-3">
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='card-title'>{movie_list.movie_name}</div>
                                        <p className='card-text'>{movie_list.actor_name}</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
    )
}
                {/* <div className="col-3">
                    <div className='card'>
                        <div className='card-body'>
                            <div className='card-title'>This is card1</div>
                            <p className='card-text'>welcome to the card1 have a nice day</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className='card'>
                        <div className='card-body'>
                            <div className='card-title'>This is card1</div>
                            <p className='card-text'>welcome to the card1 have a nice day</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className='card'>
                        <div className='card-body'>
                            <div className='card-title'>This is card1</div>
                            <p className='card-text'>welcome to the card1 have a nice day</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-3"><div className='card'>
                    <div className='card-body'>
                        <div className='card-title'>This is card1</div>
                        <p className='card-text'>welcome to the card1 have a nice day</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                </div>
    )
} */}
