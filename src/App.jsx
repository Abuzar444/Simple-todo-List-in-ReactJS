import React, {useState} from 'react'
import './App.css';
const App = () => {
  const [items, setItems] = useState('');
  const [data, setData] = useState([]);
  const handleSubmit = e => {
    e.preventDefault();
    const newData = {id: new Date().getTime().toString(), items};
    setData([...data, newData]);
    setItems('');
  }
  return (
    <main>
      <form onSubmit={handleSubmit}>
      <input className='input' type={'text'} placeholder={'add item...'} value={items} onChange={(e) => setItems(e.target.value)} />
      <button type='submit'>submit</button>
      </form>
      <div className='data'>
        {data.map(item => {
          return(
            <div>
              <h1>Item: {item.items}</h1>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default App