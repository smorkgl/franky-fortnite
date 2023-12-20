import React, {useEffect, useState} from 'react';
import {API_KEY, API_URL} from './config'
import {Preloader} from './Preloader'
import {GoodsList} from './GoodsList';


const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function getGoods() {
        fetch(API_URL, { 
            headers: {
                Authorization: API_KEY
            }}).then((response)=> response.json())
            .then((data) => {
                data.shop && setGoods(data.shop);
                setLoading(false)
                let arr = data.shop.map(x=>x.price.finalPrice)
                console.log(arr)

                
            })
    }, []) 


        
        return (
            <main className="container content">
                {
                    loading ? <Preloader /> : <GoodsList goods={goods} />
                }
                </main>
            ) 

}
export { Shop }