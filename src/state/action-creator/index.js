export const depositMoney=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:"deposit",
            payload:amount
        })
    }
}
export const withdralMoney=(amount)=>{
    return(dispatch)=>{
        dispatch({
            type:"withdrawal",
            payload:amount
        })
    }
}