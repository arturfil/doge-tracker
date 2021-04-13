import React, { Fragment, useEffect, useState } from 'react'
import { Table } from 'reactstrap';
import axios from 'axios';
import NavBar from '../functional/NavBar';
import "./Home.css"

const Home = () => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd")
      .then(response => {
        try {
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
    {"id":11, name: "Mario",	asset: "DOGE",	price: 0.05267,	 quantity: 1893 },
    {"id":12, name: "Kevin",	asset: "DOGE",	price: 0.050588, quantity: 1980 },
    {"id":13, name: "Tapia",	asset: "DOGE",	price: 0.04423,	 quantity: 1131 },
    {"id":14, name: "Arturo",	asset: "DOGE",	price: 0.051320, quantity: 1948 },
    {"id":15, name: "Arturo",	asset: "DOGE",	price: 0.052224, quantity: 1901 },
    {"id":16, name: "Andres",	asset: "DOGE",	price: 0.072000, quantity: 2083 },
    {"id":17, name: "Matias",	asset: "DOGE",	price: 0.071615, quantity: 1673 },
    {"id":18, name: "Matias",	asset: "DOGE",	price: 0.058580, quantity: 2219 },
    {"id":19, name: "Cachi",	asset: "DOGE",	price: 0.047809, quantity: 1045 },
    {"id":20, name: "Cachi",	asset: "DOGE",	price: 0.052935, quantity: 944 },
    {"id":21, name: "Pelos",	asset: "DOGE",	price: 0.070492, quantity: 1419 }
  ]

  return (
    <>
      <NavBar/>
      <div className="container mt-5" style={{textAlign: 'left'}}>
        <h2>DOGE COIN Tracker</h2>
        <h2>Price is ${price} </h2>
        <Table className="mt-5 resp-table" style={{color: 'white'}}>
          <thead>
            <tr>
              <th>Entity</th>
              <th>Asset</th>
              <th>Price p/u</th>
              <th>Qty</th>
              <th>Initial Invst.</th>
              <th>Current Capital</th>
              <th>Capital Gain</th>
              <th>Cap Gain %</th>
              <th>Total Gain %</th>
            </tr>
          </thead>
          <tbody>
            { clients.map((c, i) => (
              <>
                <tr key={i} className="box">
                  <td data-col="User">
                    <strong>
                    {c.name}
                    </strong>
                  </td>
                  <td data-col="Asset">{c.asset}</td>
                  <td data-col="Price p/u">{c.price}</td>
                  <td data-col="Qty">{c.quantity}</td>
                  <td data-col="Initial Invst.">${(c.price * c.quantity).toFixed(2)}</td>
                  <td data-col="Current Cap.">${ (price * c.quantity).toFixed(2) }</td>
                  <td data-col="Cap. Gain" style={ (price * c.quantity) > (c.price * c.quantity) ? successStl : dangerStl}>
                    ${ ((price * c.quantity).toFixed(2) - (c.price * c.quantity)).toFixed(2) }
                  </td>
                  <td data-col="Cap Gain %" style={
                    (((price * c.quantity) - (c.price * c.quantity)) / (price * c.quantity)) > 0 
                    ? successStl : dangerStl}>
                      % {  ((((price * c.quantity) - (c.price * c.quantity)) / (price * c.quantity)) * 100).toFixed(2) }
                  </td>
                  <td data-col="Total Gain %" style={
                    (((price * c.quantity) - (c.price * c.quantity)) / (price * c.quantity)) > 0 
                    ? successStl : dangerStl}>
                      % {  ((((price * c.quantity) - (c.price * c.quantity)) / (c.price * c.quantity)) * 100).toFixed(2) }
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
