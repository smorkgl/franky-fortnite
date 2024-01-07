import { useEffect } from 'react'

function Alert(props) {
    const { displayName = '', closeAlert = Function.prototype } = props;

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 100000);
        return () => {
            clearTimeout(timerId)
        }
        // eslint-disable-next-line
    }, [displayName])

    return <div className="toast">{displayName} добавлен в корзину</div>
}

export { Alert }