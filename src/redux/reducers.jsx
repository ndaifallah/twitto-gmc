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
        console.log('login')
        return state
    }else if (type=='REGISTER'){
        console.log('REGISTER')
        return state
    }else if (type=='POST'){
        console.log('POST')
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

