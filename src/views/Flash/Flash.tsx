import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/egg/astronaught.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/egg/astronaught.png'), url('/images/egg/3b.png');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
    background-color: rgb(31, 199, 212);
    border-radius: 10px;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;
  background-color: #d4d4d40a;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="textColor">
          {TranslateString(576, 'Goose Finance')}
        </Heading>
        <Text color="textColor">{TranslateString(578, 'Top 3 best DEFI app on Binance Smart Chain.')}</Text>
        {/* <Button >HELLO</Button> */}
      </Hero>

      <div
        style={{
          justifyContent: 'center',
          fontSize: 'xxx-large',
          color: '#1fc7d4',
          marginTop: '200px',
          display: 'flex',
        }}
      >
        Coming Soon
      </div>
    </Page>
  )
}

export default Home
