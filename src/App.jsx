import { use } from 'react'
import { useState } from 'react'

function App() {
  const [bgColor, setBgColor] = useState("light")

  const clicked = (e) => {
    console.log(e.target.value);
    setBgColor(e.target.value);
  }

  return (
    <div className={`vh-100 bg-${bgColor} `}>
      <div className="container my-3">
        <button type="button" value="primary" className="btn btn-primary m-2" onClick={clicked}>Primary</button>
        <button type="button" value="secondary" className="btn btn-secondary m-2" onClick={clicked}>Secondary</button>
        <button type="button" value="success" className="btn btn-success m-2" onClick={clicked}>Success</button>
        <button type="button" value="danger" className="btn btn-danger m-2" onClick={clicked}>Danger</button>
        <button type="button" value="warning" className="btn btn-warning m-2" onClick={clicked}>Warning</button>
        <button type="button" value="info" className="btn btn-info m-2" onClick={clicked}>Info</button>
        <button type="button" value="light" className="btn btn-light m-2" onClick={clicked}>Light</button>
        <button type="button" value="dark" className="btn btn-dark m-2" onClick={clicked}>Dark</button>
      </div>
    </div>
  )
}

export default App
