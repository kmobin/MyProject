
    // switch(action.type){
    //     case 'hide' :
    //         return state=false
    //     case 'show' :
    //         return state=true
    //      default :
    //           return state       
    // }
    const navbarReducer = (state = 'visitor',action) =>
    {
        switch(action.type)
        {
            case 'admin':
               return state = 'admin'
            case 'customer':
                return state = 'customer'
            case 'visitor':
                return state = 'visitor'
            default:
                return state
        }
    }
    
    export default navbarReducer