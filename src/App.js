import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Space, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import Cart from './Components/cart';
import { myContext } from './Components/Context';

function App() {

  const [search, setSearch] = useState("")
  const [crypto, setCrypto] = useState()

  useEffect(() => {
    axios.get(
      `https://fakestoreapi.com/products`
    ).then((res) => {
      setCrypto(res.data);
    });
  }, []);

  return (
    <>
      <myContext.Provider value={{setSearch}}>
        <Cart />
        <table className='container fluid mt-2'>
          <thead>
            <tr>
              <td>Rank</td>
              <td>Name</td>
              {/* <td>Symbol</td>
              <td>Market Cap</td> */}
              <td>Price</td>
              <td>Rating</td>
              <td>Quantity</td>
            </tr>
          </thead>

          <tbody>
            {
              crypto?.filter((cValue) => {
                return (
                  cValue.title.toLowerCase().includes(search.toLowerCase())
                )
              })?.map((cValue, index) => {
                return (
                  <tr key={index} className='text-center'>
                    <td className='rank'>{cValue.id}</td>
                    <td className='logo'>{cValue.title}</td>
                    <td>$ {cValue.price}</td>
                    <td>{cValue.rating.rate}</td>
                    <td>{cValue.rating.count}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </myContext.Provider>
    </>
  );
}

export default App;
