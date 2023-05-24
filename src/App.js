import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { setbrewaries } from './store'
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import axios from 'axios';

import Search from './components/Search';
import Breweries from './components/Breweries';

import './index.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://prospect-path/api/breweries')
      .then(function (response) {
        dispatch(setbrewaries({data: response.data}))
      })
      .catch(function (error) {
        if (error.message) {
          console.log(error.message);
        }
        else if (error.response.data) {
          console.log(error.response.data);
        } 
      });

  }, [dispatch])

  const searchByName = (inputValue) => {
    axios.get(`http://prospect-path/api/breweries/${inputValue}`)
      .then(function (response) {
        dispatch(setbrewaries({data: response.data}))
      })
      .catch(function (error) {
        if (error.message) {
          console.log(error.message);
        }
        else if (error.response.data) {
          console.log(error.response.data);
        } 
      }
    );
  }

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path='/' exact element={
            <>
              <Search searchByName={searchByName} />
              <Breweries />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
