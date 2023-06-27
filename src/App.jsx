// Library imports
import {  Routes , Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './Redux/store';


// page imports
import NavbarFooterBody from './Utils/NavbarFooterBody'
import {ProductShowcasePage , Home, LoginPage , ForgotPassword , SignupPage , Checkout , SingleProductPage , CreatePostPage, ProfilePage, UnderDevelopmentPage} from './pages';

//admin page imports
import { AdminLoginPage } from './pages/AdminSide';


function App() {

  return (

    <Provider store={store}>
      <NavbarFooterBody>

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/shop" element={<ProductShowcasePage/>} />
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/forgotpassword" element={<ForgotPassword />}/>
            <Route path="/SignupPage" element={<SignupPage />}/>
            <Route path="/Checkout" element={<Checkout />}/>
            <Route path="/product/:id" element={<SingleProductPage />}/>
            <Route path="/createpost" element={<CreatePostPage />}/>
            <Route path="/admin/login" element={<AdminLoginPage />}/>
            <Route path="/profile/:id" element={<ProfilePage />}/>
            <Route path="/underdevelopment" element={<UnderDevelopmentPage />}/>
          </Routes>

      </NavbarFooterBody>
    </Provider>
  )
}

export default App
