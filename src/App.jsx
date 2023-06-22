import {  Routes , Route } from 'react-router-dom'

import { Provider } from 'react-redux';
import { store } from './Redux/store';


import NavbarFooterBody from './Utils/NavbarFooterBody'
import Home from './pages/Home'


function App() {

  return (

    <Provider store={store}>
      <NavbarFooterBody>

          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>

      </NavbarFooterBody>
    </Provider>
  )
}

export default App
