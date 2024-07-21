import React, { Fragment } from 'react'
import Navbar from './components/mainNavigation/Navbar'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from './components/auth/Login'
import PostItem from './components/pages/PostItem'
import Register from './components/auth/Register'
import AllItems from './components/pages/AllItems'
import ShowItem from './components/pages/ShowItem'
// import EditItem from './components/pages/EditItem'


const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path='/new' element={<PostItem />} />
          <Route path='/' element={<AllItems />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/items/:id' element={<ShowItem />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}

export default App