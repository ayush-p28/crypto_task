import { useState } from 'react';

function Charts() {
    const [priceDataUSD, setPriceDataUSD] = useState(null);
    const [priceDataINR, setPriceDataINR] = useState(null);
    fetchPrice().then((data)=>{
        setPriceDataUSD(data.bitcoin.usd);
        setPriceDataINR(data.bitcoin.inr);
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });

    return (
        <>
            {console.log(priceDataUSD)}
            {console.log(priceDataINR)}
           <h1>bitcoins price{priceDataUSD}</h1> 

           
        </>
    )
}

 const fetchPrice = async ()=>{
    // CG-WZ2XGkWH8oTpLKrzd71rksnk
            
        const options = {method: 'GET', headers: {'x-cg-demo-api-key': 'CG-WZ2XGkWH8oTpLKrzd71rksnk'}};
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true', options);
        const result = await response.json();
        return result;
}

export default Charts