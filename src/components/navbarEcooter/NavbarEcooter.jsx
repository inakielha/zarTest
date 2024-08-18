// import s from "./NavbarEcooter.module.css";
// import { LuMenu } from "react-icons/lu";
// import { IoLogoWhatsapp } from "react-icons/io";
// import logo from "../../assets/logo-naval.png";
// import logoSar from "../../assets/logosar.svg";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Hamburger from "./NavbarMobile/hamburger/Hamburger";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import { pathImages } from "../../pathImages";

// export default function NavbarEcooter({ isMobile, landing }) {
//   const [mobileMenu, setMobileMenu] = useState(false)
//   const [category, setCategory] = useState("repuestos y accesorios");
//   const [scroll, setScroll] = useState(false)
//   const navigate = useNavigate()
//   const dispatch = useDispatch();
//   const navigateLanding = (e) => {
//     navigate("/")
//   };


//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 0) {
//         setScroll(true)
//       } else setScroll(false)
//     })
//   }, [])

//   return (
//     <>
//       <nav className={s.navbar} style={scroll ? { height: "5vh", boxShadow: "0px 2px 4px #FF3A2D" } : {}}>
//         <div className={s.navContainer} style={scroll ? { gap: "0" } : {}}>
//           <div className={s.flex} style={scroll ? { display: "none" } : {}}>
//             <div className={s.alignMenu}>
//               <LuMenu size={"3em"} onClick={() => setMobileMenu(true)} />
//             </div>
//             <div className={s.imgContainer}>
//               <img onClick={() => window.location.href = "https://www.navalmotor.com/"} src={pathImages + logo} alt="logo" />
//             </div>
//             <div className={s.iconContainer}>
//               <IoLogoWhatsapp onClick={() => window.open("https://api.whatsapp.com/send?phone=5491126661777&", '_blank')}
//                 style={{ color: "#25d366", cursor: "pointer" }}
//               />
//             </div>
//           </div>
//           <div className={s.categorias}>
//             <div className={s.mercuryContainer} onClick={() => navigate("/zar-formenti/")}>
//               <img src={pathImages + logoSar} alt="" />
//             </div>
//             <div className={s.spanCont}>

//               <span
//                 onClick={() => navigate("/zar-formenti/zar85")}
//                 style={
//                   landing === "85"
//                     ? {
//                       color: "#FF3A2D",
//                     }
//                     : {}
//                 }
//               >
//                 zar 85sl
//               </span>
//               <span
//                 onClick={() => navigate("/zar-formenti/zar59")}
//                 style={
//                   landing === "59"
//                     ? {
//                       color: "#FF3A2D",
//                     }
//                     : {}
//                 }
//               >
//                 zar 59Sl
//               </span>
//               <span
//                 onClick={() => navigate("/zar-formenti/zar65")}
//                 style={
//                   landing === "65"
//                     ? {
//                       color: "#FF3A2D",
//                     }
//                     : {}
//                 }
//               >
//                 zar 65
//               </span>
//               <span
//                 onClick={(e) => window.open("https://www.navalmotor.com/contacto", '_blank')}
//                 style={
//                   category === "contacto"
//                     ? {
//                       color: "#FF3A2D",
//                     }
//                     : {}
//                 }
//               >
//                 CONTACTO
//               </span>
//             </div>
//           </div>
//           <Hamburger setMobileMenu={setMobileMenu} show={mobileMenu} />
//         </div>
//       </nav>
//     </>
//   );
// }






























import style from "./NavbarEcooter.module.css";
import { LuMenu } from "react-icons/lu";
import { IoLogoWhatsapp } from "react-icons/io";
import logo from "../../assets/logo-naval.png";
import logoSar from "../../assets/logosar.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { pathImages } from "../../pathImages";
import Sidebar from "./Sidebar universal/Sidebar";
import { IconContext } from "react-icons";




export default function Navbar({ setMobileMenu, mobileMenu }) {
  const [scroll, setScroll] = useState(false)
  const [category, setCategory] = useState("motores")
  // const [mobileMenu, setMobileMenu] = useState("hide")

  const navigate = useNavigate()
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 3.2,
    autoplay: true,
    slidesToScroll: 1,
  };


  const navigateLanding = (e) => {
    if (pathImages) {
      navigate("/ecooter/")
    } else {
      navigate("/")
    }
  };

  const navigateConcesionarios = (e) => {
    if (pathImages) {
      navigate("/ecooter/concesionarios")
    } else {
      navigate("/concesionarios")
    }
  };

  const handleCategory = (e) => {
    let value = e.target.id
    setCategory(value)
  }

  const openWhatsApp = () => {
    const url = "https://api.whatsapp.com/send?phone=01147961888&";
    const windowFeatures = "width=400,height=600"; // Establece las dimensiones de la ventana

    window.open(url, '_blank', windowFeatures);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScroll(true)
      } else setScroll(false)
    })
  }, [])

  return (
    <div style={{ position: "relative" }}>
      {/* {mobileMenu === "show" && <div onClick={() => setMobileMenu("hide")} className={style.filtro}></div>} */}

      <nav className={(scroll && mobileMenu !== "show") ? style.navbar : style.navbarNoScroll} >
        {mobileMenu === "show" && <div onClick={() => setMobileMenu("hide")} className={style.filtro}></div>}

        <div className={style.container} style={(scroll && mobileMenu !== "show")  ? { display: "none" } : {}}>
          <IconContext.Provider value={{ className: style.icon, size: "2.5em" }}>
            <LuMenu onClick={() => setMobileMenu("show")} />
          </IconContext.Provider>
          {mobileMenu === "show" &&
            // <Hamburger setMobileMenu={setMobileMenu} show={mobileMenu} />
            <Sidebar open={mobileMenu} close={setMobileMenu} />
          }
          <div className={style.imgContainer} onClick={() => window.location.href = "https://www.navalmotor.com/"}>
            <img src={pathImages + logo} alt="logo" />
          </div>
          <div>

            <IoLogoWhatsapp color="#25D366" className={style.iconWsp} onClick={() => openWhatsApp()} />
          </div>
        </div>
        <div className={style.navWeb}>
          <div className={style.mercuryLogo}><img onClick={() => window.location.href = "https://www.navalmotor.com/zar-formenti"} src={pathImages + logoSar} alt="logoMercury" /></div>
          <div className={style.secciones}>
            <span style={category === "zar 85sl" ? { color: "#FF3A2D" } : {}} onClick={(e) => {
              handleCategory(e)
              navigate("/zar-formenti/zar85")
            }} id={"zar 85sl"}>zar 85sl</span>

            <span style={category === "zar 59sl" ? { color: "#FF3A2D" } : {}} onClick={(e) => {
              handleCategory(e)
              navigate("/zar-formenti/zar59")

            }} id={"zar 59sl"}>zar 59sl</span>

            <span style={category === "zar 65" ? { color: "#FF3A2D" } : {}} onClick={(e) => {
              handleCategory(e)
              navigate("/zar-formenti/zar65")
            }} id={"zar 65"}>zar 65</span>

            <span style={category === "contacto" ? { color: "#FF3A2D" } : {}} onClick={(e) => window.open("https://www.navalmotor.com/contacto", '_blank')} id={"contacto"}>Contacto</span>
          </div>
        </div>
      </nav>
      <div className={scroll ? style.espacioScroll : style.espacio} ></div>
    </div>
  );
}



