const menuListReducer = (state=true,action)=>{

    switch(action.type){
        case 'hide' :
            return state=false
        case 'show' :
            return state=true
         default :
              return state       
    }
}


export default menuListReducer