import type { NextPage } from 'next'
import Header from '../components/Header'

interface props {
  toggleTheme(): void;
}


function Home({ toggleTheme }: props) {
  return (
    <>
    <Header toggleTheme={toggleTheme} ></Header>
    </>
  )
}

export default Home
