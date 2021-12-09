const initialState = {
    logged:false,
    posts:[
        {
          title: "First message",
          text:'placeholder text'
        },
        {
          title: "Ant Design Title 2",
          text:'placeholder text'
        },
        {
          title: "Ant Design Title 3",
          text:'placeholder text'
        },
        {
          title: "Ant Design Title 4",
          text:'placeholder text'
        },
      ]
}

export default (state = initialState, { type, payload }) => {
    if(type=='LOGIN'){
        
        let newState= {...state, logged:true}
        return newState
    }else if (type=='LOGOUT'){
        
        let newState={...state, logged:false}
        return newState
    }else if (type=='ISLOGGED'){
      if(localStorage.getItem('TOKEN')){
        let newState={...state,logged:true}
        return newState
      }
        return state
    }else if(type=='GETMESSAGES'){
      let newState={...state}
      newState={
        ...newState,
        posts:payload}
      return newState
    }
    
    return state
}

