import React from 'react';
import './App.css';
import Profile from './profile/profile';
import img from './img.png';

function App() {
  const mystyle = {
    color: "skyblue",
    backgroundColor: 'blue',
  }
  const myfunction = (name) => {
    alert(name)
  }

  return (
    <div>
      <Profile fullname={"mohamed"} bio={"hello world"} profession={'retraité'} mystyle={mystyle} myfunction={myfunction}>
        <img src={img} />
   </Profile>
    </div>
  );
}
export default App;
