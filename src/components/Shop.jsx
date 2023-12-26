import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL } from './config'
import { Preloader } from './Preloader'
import { GoodsList } from './GoodsList';
import Pagination from './Pagination';
import { Cart } from './Cart'


const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(12);
    const [order, setOrder] = useState([]);

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY
            }
        }).then((response) => response.json())
            .then((data) => {
                data.shop && setGoods(data.shop);
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

    const addToCart = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)

        if (itemIndex < 0) {

            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        }
        else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                }
                else {
                    return orderItem;
                }
            })

            setOrder(newOrder);
        }
    }


    return (
        <main className="container content">
            <Cart quantity={order.length} />
            {
                loading ? <Preloader /> : <GoodsList goods={currentCountry} addToCart={addToCart} />
            }
            <Pagination
                countriesPerPage={countriesPerPage}
                totalCountries={goods.length}
                paginate={paginate} />

            <button className="btn-primary" onClick={lastPage}> Prev </button>
            <button className="btn-primary" onClick={nextPage}> Next </button>
        </main>
    )

}
export { Shop }