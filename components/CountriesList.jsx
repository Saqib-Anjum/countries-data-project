import React, { useEffect, useState } from 'react'
// import countriesData from '../countriesData'
import CountryCard from './CountryCard'
import CountriesListShimmer from './CountriesListShimmer'

export default function CountriesList({ query }) {
  const [countriesData, setCountriesData]  = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((data) => {
          setCountriesData(data)
  
        })
      },[])

      if (!countriesData.length) {
        return <CountriesListShimmer />
      }

      /* --Shimmer effect easy code--
      if (countriesData.length ==== 0){
        return <CountriesListShimmer />
      } */

    
/*         const intervalId = setInterval(() => {
          console.log('running countriesList component');
        }, [1000])
    
        console.log(intervalId);
    
        return () => {
          clearInterval(intervalId)
        }
      }, [])
    
    
      useEffect(() => {
        console.log('hi');
      }, [count]) */

  
 /*  if (countriesData.length === 0){
    fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((data) => {
          setCountriesData(data)
  
        })

      } */
      return (
        <>
        {/* <h1>{count}</h1>
          <button onClick={() => setCount(count + 1)}>Increase Count</button> */}
            <div className="countries-container">
              {countriesData
                .filter((country) =>
                  country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
                )
                .map((country) => {
                  return (
                    <CountryCard
                      key={country.name.common}
                      name={country.name.common}
                      flag={country.flags.svg}
                      population={country.population}
                      region={country.region}
                      capital={country.capital?.[0]}
                      data={country}
                    />
                  )
                })}
            </div>
          </>
        )
      }



/* export default function CountriesList({query}) {
  return (
    <>
    <div className="countries-container">
      {countriesData.filter((country) => country.name.common.toLowerCase().includes(query)).map((country) => {
        return (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
          />
        )
      })}
    </div>
    </>
  )
} */