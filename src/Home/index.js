import React, { useState, useEffect } from 'react'
import Quotes from '../Quotes'
import { Wrapper } from './Home.styles'

const basicUrl = `https://breaking-bad-quotes.herokuapp.com/v1/quotes`

const Home = () => {
  //usestate to store the quotes
  const [quotes, setQuotes] = useState([])
  //usestate for loading
  const [loading, setLoading] = useState(false)

  // fetch the quotes
  const fetchQuotes = async () => {
    setLoading(true)
    let url
    url = `${basicUrl}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      setQuotes(data)
    } catch (e) {
      console.log(e)
    }
    setLoading(false)
  }

  // fetch the quotes on mount
  useEffect(() => {
    // prevent set interval on load
    fetchQuotes()
  }, [])
  useEffect(() => {
    // set time interval to fetch the quotes
    const interval = setInterval(() => {
      fetchQuotes()
    }, 5000)
    // clear the interval on unmount
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* // map the quotes */}
      <Wrapper>
        {quotes.map((showQuote, index) => {
          console.log(showQuote)
          return (
            <Quotes
              key={index}
              {...showQuote}
              fetch={fetchQuotes}
              loading={loading}
            />
          )
        })}
      </Wrapper>
    </>
  )
}

export default Home
