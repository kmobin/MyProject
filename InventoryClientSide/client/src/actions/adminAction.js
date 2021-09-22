export const setAdmin = (admin) =>
{
    return  {
                type: 'setAdmin',
                admin: admin
            }
}


export const removeAdmin = () =>
{
    return  {
                type: 'removeAdmin',
                admin: null
            }
}