import React from 'react'
import { Wrapper, Quote, Author, Button, Spinner } from './Quotes.styles'
import { FaQuoteLeft } from 'react-icons/fa'
import Image from '../images/Breaking-Bad-PNG-Clipart.png'
import ImageMobile from '../images/Breaking-Bad-PNG-mobile.png'

const Quotes = ({ author, quote, fetch, loading }) => {
  return (
    <>
      <Wrapper image={Image} mobile={ImageMobile}>
        <Button onClick={fetch}>Carregar Quotes</Button>
        <Quote>
          <FaQuoteLeft
            size='80'
            style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              color: 'lightgray',
              zIndex: '-1',
            }}
          />
          "{quote}"<Author>- {author}</Author>
          {loading && <Spinner />}
        </Quote>
      </Wrapper>
    </>
  )
}

export default Quotes
