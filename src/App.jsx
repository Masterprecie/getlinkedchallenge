

import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import ContactUs from './pages/ContactUs'

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
