import React, { Fragment } from 'react'
import Search from '../coins/Search'
import Coins from '../coins/Coins'

const Home = () => {
  return (
    <Fragment>
        <Search />
        <Coins />
    </Fragment>
  )
}

export default Home