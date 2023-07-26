// Library imports
import {  Routes , Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './Redux/store';


// page imports
import NavbarFooterBody from './Utils/NavbarFooterBody'
import {ProductShowcasePage , Home, LoginPage , ForgotPassword , SignupPage , Checkout , SingleProductPage , CreatePostPage, ProfilePage, UnderDevelopmentPage, PostProductPage , DonorDisplayPage , CommunityPage} from './pages';

//admin page imports
import { ActualAdminLoginPage, AdminLoginPageProxy , AdminHomePage} from './pages/AdminSide/pages';


function App() {

  return (

    <Provider store={store}>
      <NavbarFooterBody>

          <Routes>
            {/* CLIENT side routes */}
            <Route path="*" element={<Home/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/shop" element={<ProductShowcasePage/>} />
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/forgotpassword" element={<ForgotPassword />}/>
            <Route path="/SignupPage" element={<SignupPage />}/>
            <Route path="/Checkout" element={<Checkout />}/>
            <Route path="/product/:id" element={<SingleProductPage />}/>
            <Route path="/createpost" element={<CreatePostPage />}/>
            <Route path="/profile/:id" element={<ProfilePage />}/>
            <Route path="/underdevelopment" element={<UnderDevelopmentPage />}/>
            <Route path="/community" element={<CommunityPage />}/>
            <Route path="/platformdonors" element={<DonorDisplayPage />}/>



            {/* ADMIN side routes */}
            <Route path="/admin" element={<AdminHomePage />}/>
            <Route path="/admin/login" element={<AdminLoginPageProxy />}/>
            <Route path="/mainadmin/login" element={<ActualAdminLoginPage />}/>
            <Route path="/admin/postproducts" element={<PostProductPage />}/>
          </Routes>

      </NavbarFooterBody>
    </Provider>
  )
}

export default App
