import React, { useEffect } from 'react'
import './App.css';
import TopNav from './components/TopNav/TopNavigationBar';
// import Card from './components/Card/Card';
import DashView from './components/DashBoard/DashBoardView';
import { useDispatch, useSelector} from 'react-redux'
import { dataRetrieval } from './Actions/DataAction';
import Loading from './components/Loading/LoadingPage';

const App = () => {
  const dispatch = useDispatch();
  const {allTickets} = useSelector(state => state.DataReducer);
   
  useEffect(() => {
    dispatch(dataRetrieval());
  }, [dispatch])

  return allTickets ? (
    <div style={{paddingTop : "12px"}} >
      <TopNav/>
      <hr style={{marginTop : "12px"}} />
      <DashView/>
    </div>
  ) : <Loading/>
}

export default App