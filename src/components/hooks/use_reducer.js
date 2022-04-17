import React, { useReducer } from 'react'

const initialState = 0

const reducer = (state,action) => {
    switch (action.type) {
        case 'plus':
            return  state + action.payload       
        default:
            return state;
    }
}

function Use_reducer() {
    const [ state , dispatch ] = useReducer(reducer,initialState)




  return (<>
        <h1 style={{textAlign: 'center'}}>Use Reducer</h1>
        <h2>counter - { state } </h2>
        <button onClick={ () => dispatch({type:'plus',payload: 1}) } style={ { padding: '12px 23px',fontSize: '18px' } }> plus ++  </button>
        <button onClick={ () => dispatch({type:'plus',payload: 2}) } style={ { padding: '12px 23px',fontSize: '18px' } }> plus + 2  </button>
        <button onClick={ () => dispatch({type:'plus',payload: 3}) } style={ { padding: '12px 23px',fontSize: '18px' } }> plus + 3 </button>
    </>)
}

export default Use_reducer