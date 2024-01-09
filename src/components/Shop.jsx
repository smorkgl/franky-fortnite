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
                data.shop && setGoods(data.shop);
                setLoading(false)


            })
    }, [])

    const addToCart = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.mainId === item.mainId)
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
        setAlertName(item.displayName);
    }

    const removeFromCart = (itemId) => {
        const newOrder = order.filter(el => el.mainId !== itemId)
        setOrder(newOrder)
    }

    const cartPlus = (itemId) => {
        const newOrder = order.map((orderItem) => {
            if (orderItem.mainId === itemId) {
                return {
                    ...orderItem,
                    quantity: orderItem.quantity + 1,
                }
            }
            return orderItem;
        });
        setOrder(newOrder);
    }

    const cartMinus = (itemId) => {
        const newOrder = order.map((orderItem) => {
            if (orderItem.mainId === itemId && orderItem.quantity > 1) {
                return {
                    ...orderItem,
                    quantity: orderItem.quantity - 1,
                }
            }
            return orderItem;
        });
        setOrder(newOrder);
    }

    const handleCartShow = () => {
        setIsCartShow(!isCartShow)
    }

    const closeAlert = () => {
        setAlertName('')
    }

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
            <Cart quantity={order.length} handleCartShow={handleCartShow} />
            {
                loading ? <Preloader /> : <GoodsList goods={currentCountry} addToCart={addToCart} />
            }
            {
                isCartShow && <CartList order={order} handleCartShow={handleCartShow} removeFromCart={removeFromCart} cartPlus={cartPlus} cartMinus={cartMinus} />
            }
            <Pagination
                countriesPerPage={countriesPerPage}
                totalCountries={goods.length}
                paginate={paginate} />

            <button className="btn-primary" onClick={lastPage}> Prev </button>
            <button className="btn-primary" onClick={nextPage}> Next </button>
            {
                alertName && <Alert displayName={alertName} closeAlert={closeAlert} />
            }
        </main>
    )

}

export { Shop }