

import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Success from './pages/Success'
import Register from './pages/Register'
import ContactUs from './pages/ContactUs'

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/register' element={<Register />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </>
  )
}

export default App
