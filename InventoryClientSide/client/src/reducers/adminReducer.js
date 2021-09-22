const adminReducer = (state = null,action) =>
{
    switch(action.type)
    {
        case 'setAdmin':
            return (state = action.admin)
        case 'removeAdmin':
            return (state = null)
        default:
            return  state
    }
}

export default adminReducer