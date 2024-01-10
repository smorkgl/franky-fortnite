import { GoodsItem } from "./GoodsItem";
import {useContext} from 'react'
import {ShopContext} from '../components/context' 

function GoodsList() {
    const { goods = []} = useContext(ShopContext)

    return <div className="goods">
        {goods.map(item => (
            <GoodsItem key={item.id} {...item} />
        ))}
    </div>
}

export { GoodsList };