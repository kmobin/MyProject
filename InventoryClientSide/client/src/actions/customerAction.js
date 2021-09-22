export const setCustomer = (customer) =>
{
    return  {
                type: 'setCustomer',
                customer: customer
            }
}

export const removeCustomer = () =>
{
    return  {
                type: 'removeCustomer',
                customer: null
            }
}