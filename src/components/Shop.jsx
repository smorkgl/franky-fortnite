import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL } from './config'
import { Preloader } from './Preloader'
import { GoodsList } from './GoodsList';
import Pagination from './Pagination';
import { Cart } from './Cart'
import { CartList } from './CartList'
import { Alert } from './Alert'


const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(12);
    const [order, setOrder] = useState([]);
    const [isCartShow, setIsCartShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY
            }
        }).then((response) => response.json())
            .then((data) => {
               setGoods(data.shop);
               setLoading(false)
        
            })
    }, [])

    const lastCountryIndex = currentPage * countriesPerPage;
    const firstCountyIndex = lastCountryIndex - countriesPerPage;
    const currentCountry = goods.slice(firstCountyIndex, lastCountryIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)
    const nextPage = () => {
        const lastPage = Math.ceil(goods.length / countriesPerPage);
        if (currentPage !== lastPage) {
            setCurrentPage(currentPage + 1);
        }
    };
    const lastPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };


    return (
        <main className="container content">
            <Cart quantity={order.length} />
            {
                loading ? <Preloader /> : <GoodsList goods={currentCountry}/>
            }
            {
                isCartShow && <CartList order={order} />
            }
            <Pagination
                countriesPerPage={countriesPerPage}
                totalCountries={goods.length}
                paginate={paginate} />

            <button className="btn-primary" onClick={lastPage}> Prev </button>
            <button className="btn-primary" onClick={nextPage}> Next </button>
            {
                alertName && <Alert displayName={alertName} />
            }
        </main>
    )

}

export { Shop }