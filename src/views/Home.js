import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap';
import axios from 'axios';
import NavBar from '../functional/NavBar';

const Home = () => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd")
      .then(response => {
        try {
          console.log(JSON.stringify(response));
          setPrice(response.data.dogecoin.usd)
        } catch (error) {
          console.log(error);
        }
      });
  }, [])

  let successStl = {
    color: 'green'
  }

  let dangerStl = {
    color: 'red'
  }

  let clients = [
    {name: "Mario",	asset: "DOGE",	price: 0.05267,	 quantity: 1893,	initial : 99.70, 	current: "110.89",	gain: "$11.19",  percentage: "10.09"},
    {name: "Kevin",	asset: "DOGE",	price: 0.050588, quantity: 1980,	initial : 100.16, 	current: "115.99",	gain: "$15.82",  percentage: "13.64"},
    {name: "Tapia",	asset: "DOGE",	price: 0.04423,	 quantity: 1131,	initial : 50.03, 	current: "66.25",	  gain: "$16.23",  percentage: "24.49"},
    {name: "Arturo",	asset: "DOGE",	price: 0.051320, quantity: 1948,	initial : 99.97, 	current: "114.11",	gain: "$14.14",  percentage: "12.39"},
    {name: "Arturo",	asset: "DOGE",	price: 0.052224, quantity: 1901,	initial : 99.28, 	current: "111.36",	gain: "$12.08",  percentage: "10.85"},
    {name: "Andres",	asset: "DOGE",	price: 0.072000, quantity: 2083,	initial : 149.98, 	current: "122.02",	gain: "-$27.95", percentage: "-22.91"},
    {name: "Matias",	asset: "DOGE",	price: 0.071615, quantity: 1673,	initial : 119.81, 	current: "98.00",	  gain: "-$21.81", percentage: "-22.25"},
    {name: "Matias",	asset: "DOGE",	price: 0.058580, quantity: 2219,	initial : 129.99, 	current: "129.99",	gain: "$0.00",   percentage: "0.00"},
    {name: "Cachi",	asset: "DOGE",	price: 0.047809, quantity: 1045,	initial : 49.96, 	current: "61.22",	  gain: "$11.26",  percentage: "18.39"},
    {name: "Pelos",	asset: "DOGE",	price: 0.070492, quantity: 1419,	initial : 100.03, 	current: "83.13",	  gain: "-$16.90", percentage: "-20.33"}
  ]

  return (
    <>
      <NavBar/>
      <div className="container mt-5" style={{textAlign: 'left'}}>
        <h2>DOGE COIN Tracker</h2>
        <h2>Price is ${price} </h2>
        <Table className="mt-5" style={{color: 'white'}}>
          <thead>
            <tr>
              <th>Entity</th>
              <th>Asset</th>
              <th>Price p/u</th>
              <th>Qty</th>
              <th>Initial Invst.</th>
              <th>Current Capital</th>
              <th>Capital Gain</th>
              <th>Gain / Loss</th>
            </tr>
          </thead>
          <tbody>
            { clients.map(c => (
              <>
              <tr>
                <th>
                  <strong>
                  {c.name}
                  </strong>
                </th>
                <td>{c.asset}</td>
                <td>{c.price}</td>
                <td>{c.quantity}</td>
                <td>${(c.price * c.quantity).toFixed(2)}</td>
                <td>${ (price * c.quantity).toFixed(2) }</td>
                <td style={ (price * c.quantity) > c.initial ? successStl : dangerStl}>
                  ${ ((price * c.quantity).toFixed(2) - c.initial).toFixed(2) }
                </td>
                <td style={
                  (((price * c.quantity) - c.initial) / (price * c.quantity)) > 0 
                  ? successStl : dangerStl}>
                    % {  ((((price * c.quantity) - c.initial) / (price * c.quantity)) * 100).toFixed(2) }
                </td>
              </tr>
              </>
            ))
              
            }
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default Home
