import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from './state/index';
function App() {
  const state=useSelector((state)=>state.account)
  const dispatch=useDispatch()
  const{depositMoney,withdralMoney} =bindActionCreators(actionCreators,dispatch)
 
  return (
    <div >
      <h1>{state}</h1>
      <button onClick={()=>depositMoney(10)}>deposit</button>
      <button onClick={()=>withdralMoney(10)}>withdral</button>
    </div>
  );
}

export default App;
