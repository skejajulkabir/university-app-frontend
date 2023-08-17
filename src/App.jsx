// Library imports
import {  Routes , Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './Redux/store';


// page imports
import NavbarFooterBody from './Utils/NavbarFooterBody'
import {ProductShowcasePage , Home, LoginPage , ForgotPassword , SignupPage , Checkout , SingleProductPage , CreatePostPage, ProfilePage, UnderDevelopmentPage, PostProductPage , DonorDisplayPage , CommunityPage, MenuPage, SettingsPage, UpdateProfilePage, SearchPage, VarifyAccountPage, EnterOTPpage, UpdateProductPage, UpdatePasswordPage, NoticePage, CreateNoticePage, BloodDonationPage, CreateBloodDonationNoticePage} from './pages';

//admin page imports
import { ActualAdminLoginPage, AdminLoginPageProxy , AdminHomePage , Orders, OrderDetailsPage, ShowProductPage, UserHandlingPage, AddAuthorisedUserPage, RestrictUserPage, SizeHandlingPage} from './pages/AdminSide/pages';
import UpdateDP from './pages/utilPages/UpdateDP';
import UpdateIformationPage from './pages/utilPages/UpdateIformationPage';


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
            <Route path="/varifyaccountpage" element={<VarifyAccountPage />}/>
            <Route path="/enterotp" element={<EnterOTPpage />}/>
            <Route path="/SignupPage" element={<SignupPage />}/>
            <Route path="/Checkout" element={<Checkout />}/>
            <Route path="/product/:id" element={<SingleProductPage />}/>
            <Route path="/createpost" element={<CreatePostPage />}/>
            <Route path="/profile/:id" element={<ProfilePage />}/>
            <Route path="/underdevelopment" element={<UnderDevelopmentPage />}/>
            <Route path="/search" element={<SearchPage />}/>
            <Route path="/community" element={<CommunityPage />}/>
            <Route path="/platformdonors" element={<DonorDisplayPage />}/>
            <Route path="/menupage" element={<MenuPage />}/>
            <Route path="/settings" element={<SettingsPage />}/>
            <Route path="/updateprofilepage" element={<UpdateProfilePage />}/>
            <Route path="/updatedp" element={<UpdateDP />}/>
            <Route path="/updateinformation" element={<UpdateIformationPage />}/>
            <Route path="/updatepass" element={<UpdatePasswordPage />}/>
            <Route path="/notice" element={<NoticePage />}/>
            <Route path="/blooddonation" element={<BloodDonationPage />}/>
            <Route path="/createnotice" element={<CreateNoticePage />}/>
            <Route path="/createblooddonationnotice" element={<CreateBloodDonationNoticePage />}/>



            {/* ADMIN side routes */}
            <Route path="/admin" element={<AdminHomePage />}/>
            <Route path="/admin/login" element={<AdminLoginPageProxy />}/>
            <Route path="/mainadmin/login" element={<ActualAdminLoginPage />}/>
            <Route path="/admin/postproducts" element={<PostProductPage />}/>
            <Route path="/admin/orders" element={<Orders />}/>
            <Route path="/admin/ordrdetailspage/:id" element={<OrderDetailsPage />}/>
            <Route path="/admin/showproducts" element={<ShowProductPage />}/>
            <Route path="/admin/updateproduct/:prdId" element={<UpdateProductPage />}/>
            <Route path="/admin/userhandlingpage" element={<UserHandlingPage />}/>
            <Route path="/admin/addauthoriseduser" element={<AddAuthorisedUserPage />}/>
            <Route path="/admin/restrictuser" element={<RestrictUserPage />}/>
            <Route path="/admin/sizehandling" element={<SizeHandlingPage />}/>
          </Routes>

      </NavbarFooterBody>
    </Provider>
  )
}

export default App
