import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
    const {goods = []} = props;
    return <div className="goods">
        {goods.map(item => (
            <GoodsItem key={item.id} {...item}/>
        ))}
</div>}

export {GoodsList};