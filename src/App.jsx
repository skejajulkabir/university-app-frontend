// Library imports
import {  Routes , Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './Redux/store';


// page imports
import NavbarFooterBody from './Utils/NavbarFooterBody'
import {ProductShowcasePage , Home, LoginPage , ForgotPassword , SignupPage} from './pages';


function App() {

  return (

    <Provider store={store}>
      <NavbarFooterBody>

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/productshowcase" element={<ProductShowcasePage/>} />
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/forgotpassword" element={<ForgotPassword />}/>
            <Route path="/SignupPage" element={<SignupPage />}/>
          </Routes>

      </NavbarFooterBody>
    </Provider>
  )
}

export default App
