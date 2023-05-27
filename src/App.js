
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Dashboard_layout from "./components/Layout/Dashboard_layout"

function App() {
  return (
    <>
      
        {/* <Layout/> */}
       
          <Dashboard_layout />
       
      

    </>

  );
}

export default App;
