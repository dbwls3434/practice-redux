import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const BasicLayout = () => {
  return (
    <>
      <Header />
      <main className="App">
        <Outlet />
      </main>
    </>
  )
}

export default BasicLayout
