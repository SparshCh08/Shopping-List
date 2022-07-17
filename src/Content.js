import { useState } from "react";
const Content = () => {
  const [variable_for_name, setting_a_Name] = useState('Default');
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ['Sparsh', 'Utkarsh', 'Sutap'];
    const idx = Math.floor(Math.random() * 3);
    setting_a_Name(names[idx]);
  }
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    console.log(count)
  }
  const handleClick1 = () => {
    console.log(count)
  }
  const handleClick1 = (name) => {
    console.log(`${name} Aur kya kya Dabayega bhai`)
  }
  const handleClick2 = (e) => {
    console.log(e)
  }
  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {variable_for_name}!</p>
      <button onClick={handleNameChange}>Daba k Dekh</button>
      <button onClick={handleClick}>count++</button>
      <button onClick={(e) => { handleClick2(e) }}>Hello ko Daba</button>
      <button onClick={handleClick1}>const count</button>
      <button onClick={() => { handleClick1('Sparsh') }}>Dobara Daba k Dekh</button>
    </main>
  )
}

export default Content