import { useEffect, useContext } from 'react'
import { ShopContext } from './context';

function Alert() {
    const { displayName = '', closeAlert = Function.prototype } = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);
        return () => {
            clearTimeout(timerId)
        }
        // eslint-disable-next-line
    }, [displayName])

    return <div className="toast">{displayName} добавлен в корзину</div>
}

export { Alert }