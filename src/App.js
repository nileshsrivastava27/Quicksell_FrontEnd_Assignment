import { useDispatch, useSelector} from 'react-redux'
import { dataRetrieval } from './Actions/DataAction';
import './App.css';
import PageLoading from './components/Loading/LoadingPage';
import NavBar from './components/TopNav/NavBar';
import Dash from './components/DashBoard/DashBoard';
import React, { useEffect } from 'react'

const App = () => {
  const {allTickets} = useSelector(state => state.DataReducer);
  
  const sentDataValue = useDispatch();


      useEffect(() => {
        
        sentDataValue(dataRetrieval());

      },
       [sentDataValue])
  
  return allTickets ? (


    <div style={{paddingTop : "12px"}} >
    

      <NavBar/>
      <hr style={{marginTop : "12px"}} 

      />
      <Dash 
      />
    </div>
  ) : 
  <PageLoading

  />
}

export default App