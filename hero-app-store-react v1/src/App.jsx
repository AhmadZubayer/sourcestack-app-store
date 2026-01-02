import './App.css'
import Footer from './components/ui/Footer'
import Nav from './components/ui/Nav'
import { Outlet, useNavigation } from 'react-router'
import Loading from './components/ui/Loading'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const navigation = useNavigation();

  return (
    <>
      <Nav></Nav>
      {navigation.state === 'loading' ? <Loading /> : <Outlet />}
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
