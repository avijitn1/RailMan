const initialData = {
    loggedin: false,
    userName: "",
    userRole: "",
    userProfile: {},
    activeOrder: [],
    selectedRestaurant: ""
  };


const userReducer = (state = initialData, action) => {
    if (action.type === 'login'){
        return {
            loggedin: true,
            userName: action.payload.name,
            userRole: action.payload.role,
            userProfile: {},
            activeOrder: []
        }
    }
    else if (action.type === 'logout') {
        return {
            loggedin: false,
            userName: "",
            userRole: "",
            userProfile: {},
            activeOrder: []
        }
    }
    else if (action.type === 'addOrder') {
        console.log(state)
        let tempActiveOrder = state.activeOrder
        let foundMatch = false;
        if (tempActiveOrder.length == 0){
            tempActiveOrder.push({...action.payload, 'count': 1})
        }
        else {
            for (let i = 0; i < tempActiveOrder.length; i++) {
                if(tempActiveOrder[i].restaurant_name === action.payload.restaurant_name &&
                    tempActiveOrder[i].item === action.payload.item) {
                        tempActiveOrder[i].count += 1;
                        foundMatch = true;
                    }
            }
            if (foundMatch == false) {
                tempActiveOrder.push({...action.payload, 'count': 1})
            }
        }
        return {
            ...state,
            activeOrder: tempActiveOrder
        }
    }
    else if (action.type === 'delOrder') {
        console.log(state)
        let tempActiveOrder = state.activeOrder
    
        for (let i = 0; i < tempActiveOrder.length; i++) {
            if(tempActiveOrder[i].restaurant_name === action.payload.restaurant_name &&
                tempActiveOrder[i].item === action.payload.item) {
                    if (tempActiveOrder[i].count > 0)
                        tempActiveOrder[i].count -= 1;
                }
        }
        
        return {
            ...state,
            activeOrder: tempActiveOrder
        }
        return {
            ...state,
        }
    }
    else if (action.type === 'selectRestaurant')
    {
        return {
            ...state,
            selectedRestaurant: action.payload.selectedRestaurant
        }
    }
    else {
        return state
    }
}

export default userReducer;