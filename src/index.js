import React, { useReducer } from "react";
import ReactDOM from "react-dom";
//import profile1 from './image/profile.jpg';

// const App = () =>{
//     return(
//         <div className="ui comments">
//             <div className="comment">
//                 <a href="/" className="avatar">
//                     <img src={profile1} alt="profile"/>
//                 </a>
//                 <div className="content">
//                     <a href="/" className="author">
//                         Sarah
//                     </a>
//                 </div>
//                 <div className="metadata">
//                     <span className="date">
//                         Today at 11:00AM
//                     </span>
//                 </div>
//                 <div className="text">
//                     It's amazing
//                 </div>
//             </div>
//         </div>
//     )
// }

//use Reducer hook
//Reducer is a pure function that takes state and action as arguments and returns a new state

//syntax
/* const [state,dispatch]=useReducer(reducer,initialState)*/
const initialState={
    total:0,
    totalIncrement:0,
    totalDecrement:0
}

//reducer to return new state
const reducer=(state,action)=>{
    switch(action.type){
        case "INCREMENT":
            return{
                ...state,
                total:state.total+1,
                totalIncrement:state.totalIncrement+1
            };
        case "DECREMENT":
            return{
                ...state,
                total:state.total-1,
                totalDecrement:state.totalDecrement-1
            };
    }
}

const Counter=()=>{
    const[values,dispatch]=useReducer(reducer,initialState);
    return(
        <div>
            <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
            <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
            <hr/>
            <h3>Total:{values.total}</h3>
            <h3>Total increment:{values.totalIncrement}</h3>
            <h3>Total decrement:{values.totalDecrement}</h3>
        </div>
    );
};
export default Counter;


// ReactDOM.render(
//     <App />,
//     document.querySelector('#root')
// )
ReactDOM.render(
    <Counter />,
    document.querySelector('#root')
)