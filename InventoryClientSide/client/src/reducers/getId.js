const getId = (state=0,action,props)=>{

    switch(action.type){
        case 'id' :
            return state=props.match.params.data
         default :
              return state       
    }
}


export default getId