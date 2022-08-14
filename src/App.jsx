import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const colorRef = useRef(null)
  const [color, setColor] = useState("red")

  useEffect(()=> {
    setInterval(()=> {
      if (color === "red") {
        colorRef.current.style.background = color
        setColor("aqua")
      } else {
        colorRef.current.style.background = color
        setColor("red")
      }
    },1000);
  },[color]);

  
  return (
    <div className="App">
      <div style={{backgroundColor: {colorRef}, width: "300px", height: "300px"}} ref={colorRef}>fdfldf;sldf</div>
    </div>
  );
}

export default App;
