import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        
    }, [currency]) // dependacy array
    // console.log("data : ",data)
    // console.log(" typeof data : ",typeof data)
    return data
}

export default useCurrencyInfo;