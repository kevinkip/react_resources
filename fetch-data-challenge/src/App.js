import { useState, useEffect } from 'react';
import Form from './Form';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/'
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItems(data);
        setFetchError(null)
      } catch (error) {
        setFetchError(error.message)
      } 
    }

    fetchItems();

  }, [reqType])

  return (
    <div className="App">
      <Form 
        reqType={reqType}
        setReqType={setReqType}
        />
    </div>
  );
}

export default App;
