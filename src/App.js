import logo from './logo.svg';
import './App.css';

import ProfileCards from './components/ProfileCards';


export default function App(){
  return(
    <div className="App">
       <div>
        <h1>Employee Details</h1>
        <div style={{padding:"20px",flexWrap:"wrap"}}>
          <ProfileCards />
          </div>
       </div>
    </div>
  )
}