const initialState = {
    logged:false,
    posts:[
        {
          title: "First message",
          content:'placeholder content'
        },
        {
          title: "Ant Design Title 2",
          content:'placeholder content'
        },
        {
          title: "Ant Design Title 3",
          content:'placeholder content'
        },
        {
          title: "Ant Design Title 4",
          content:'placeholder content'
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
    }
    
    return state
}

