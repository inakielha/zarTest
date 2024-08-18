import logo from './logo.svg';
import './App.css';
import { Route, Routes, } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavbarEcooter from './components/navbarEcooter/NavbarEcooter';
import NavMobileEcooter from './components/navbarEcooter/NavbarMobile/NavMobileEcooter';
import { useDispatch } from 'react-redux';
import { IS_MOBILE } from './redux/actions/actions';
import Landing from './components/landing/Langind';
import Footer from './components/footer/Footer';
import Modelo from './components/zar 85sl/modelo';
import Zar65 from './components/zar 65/Zar65';
import Zar59 from './components/zar 59/Zar59';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch()
  const [mobileMenu, setMobileMenu] = useState("hide")


  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Establece el límite de ancho para considerarlo "mobile"
    dispatch(IS_MOBILE(window.innerWidth <= 768))
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
    <Routes>
    {/* <Route path='/' element={<Navbar/>}/> */}
    <Route path='/zar-formenti' element={<>{isMobile ? <NavMobileEcooter isMobile={isMobile} landing={false}/> : <NavbarEcooter setMobileMenu={setMobileMenu} mobileMenu={mobileMenu}  isMobile={isMobile} landing={true}/>} <Landing/> <Footer color={"#FF3A2D"}/></>}/>
    <Route path='/zar-formenti/zar85' element={<>{isMobile ? <NavMobileEcooter isMobile={isMobile} landing={"85"}/> : <NavbarEcooter setMobileMenu={setMobileMenu} mobileMenu={mobileMenu}  isMobile={isMobile} landing={"85"}/>} <Modelo/> <Footer color={"#FF3A2D"}/></>}/>
    <Route path='/zar-formenti/zar65' element={<>{isMobile ? <NavMobileEcooter isMobile={isMobile} landing={"65"}/> : <NavbarEcooter setMobileMenu={setMobileMenu} mobileMenu={mobileMenu}  isMobile={isMobile} landing={"65"}/>} <Zar65/> <Footer color={"#FF3A2D"}/></>}/>
    <Route path='/zar-formenti/zar59' element={<>{isMobile ? <NavMobileEcooter isMobile={isMobile} landing={"59"}/> : <NavbarEcooter setMobileMenu={setMobileMenu} mobileMenu={mobileMenu}  isMobile={isMobile} landing={"59"}/>} <Zar59/> <Footer color={"#FF3A2D"}/></>}/>
   </Routes>
    </>
  );
}

export default App;
