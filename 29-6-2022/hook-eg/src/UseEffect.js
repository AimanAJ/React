import { useState, useEffect } from "react";
import axios from 'axios';

function App() {
    
  const [data, setData] = useState([]);


  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) =>{
        console.log(res)
        setData(res.data)
      })

  });

  return (
    <div >
      <ul>
        {data.map(({ id,name }) => (
            <li key={id}>
              <h3>{id} : {name}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
