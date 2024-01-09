export function reducer(state, { type, payload }) {
    switch (type) {
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                order: state.order.filter(el => el.mainId !== payload.id)
            }
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: '',
            }
        default:
            return state
    }
}