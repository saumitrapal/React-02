import React, { useState } from "react";

function App() {

  const [title, setTitle] = useState("1");

 function updateTitle() {
    setTitle("my number is " + Math.random());
  }
  return (
  <div>
    <button onClick={updateTitle}> Update the title</button>
    <Header title={title}></Header>
    <Header title="2"></Header>
    <Header title="3"></Header>
    <Header title="4"></Header>
  </div>
  )
}

  const Header = React.memo(function Headers({title}) {
  return (
  <div>
    {title}
  </div>
  )
}) 


export default App;