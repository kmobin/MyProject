const customerReducer = (state = null,action) =>
{
    switch(action.type)
    {
        case 'setCustomer':
            return (state = action.customer)
        case 'removeCustomer':
            return (state = null)
        default:
            return  state
    }
}

export default customerReducer