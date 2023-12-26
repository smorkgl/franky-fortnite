import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
    const { goods = [], addToCart = Function.prototype } = props;
    return <div className="goods">
        {goods.map(item => (
            <GoodsItem key={item.id} {...item} addToCart={addToCart} />
        ))}
    </div>
}

export { GoodsList };