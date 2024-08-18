import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { BsCircleFill } from "react-icons/bs"
// import img from "../../../assets/zar/85/1Zar85SL.jpg"
import img from "../../../assets/zar/home/portada/-Zar85SL_42.jpg"
import img2 from "../../../assets/zar/home/portada/1-Zar 59 SL Limited 6.jpg"
import img3 from "../../../assets/zar/home/portada/-Zar85SL_04.jpg"
import img4 from "../../../assets/zar/home/portada/-Zar85SL_21.jpg"

import img5 from "../../../assets/zar/home/portada/-8 (Paolo) ZAR 65 controluce su roccia.jpg"
import img6 from "../../../assets/zar/home/portada/-Zar 59 SL Limited 2.jpg"
import img7 from "../../../assets/zar/home/portada/-Zar65Croazia4.jpg"
import imgmobile from "../../../assets/zar/home/portada/portada mobile/Enmascarar grupo 498.jpg"
import img2mobile from "../../../assets/zar/home/portada/portada mobile/Enmascarar grupo 499.jpg"
import img3mobile from "../../../assets/zar/home/portada/portada mobile/Enmascarar grupo 500.jpg"
import img4mobile from "../../../assets/zar/home/portada/portada mobile/Enmascarar grupo 501.jpg"
import img5mobile from "../../../assets/zar/home/portada/portada mobile/Enmascarar grupo 502.jpg"
import img6mobile from "../../../assets/zar/home/portada/portada mobile/Enmascarar grupo 503.jpg"
import img7mobile from "../../../assets/zar/home/portada/portada mobile/Enmascarar grupo 504.jpg"
import s from "./header.module.css";
import { useRef, useState } from "react";
import { pathImages } from "../../../pathImages";


export default function Header(){
  const sliderRef = useRef(null);
  const sliderRefWeb = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [imagen, setImagen] = useState({ open: false, src: pathImages + "" })
  let imgArr = [img, img2, img3]
  
  const settings = {
        infinite: false,
        speed: 1000,
        arrows: false,
        slidesToShow: 1,
        autoplay: false,
        slidesToScroll: 1,
        adaptiveHeight: true,
        afterChange: (currentSlide) => { 
          setCurrentSlide(currentSlide)
        },
      };
  
      const settingsMobile = {
        infinite: true,
        speed: 1000,
        arrows: false,
        slidesToShow: 1,
        autoplay: false,
        slidesToScroll: 1,
        adaptiveHeight: true,
      };

      const handleNextSlide = () => {
        if (sliderRef.current || sliderRefWeb.current) {
          // let srcCrurrent = sliderRef.current.innerSlider.state.currentSlide
          sliderRefWeb.current.slickPrev();
          sliderRef.current.slickPrev();
          // if (imagen.open) {
          //   setImagen({ open: true, src: imgArr[srcCrurrent] })
          // }
        }
      };
    
      const handlePrevSlide = () => {
        if (sliderRefWeb.current || sliderRef.current) {
          sliderRefWeb.current.slickNext();
          sliderRef.current.slickNext();
          // if (imagen.open) {
          //   let srcCrurrent = sliderRef.current.innerSlider.state.currentSlide
          //   setImagen({ open: true, src: imgArr[srcCrurrent] })
          //   console.log({ open: imagen.open, src: imgArr[srcCrurrent] })
          // }
        }
      };
    return(
      <>
      <div className={s.navSpace}></div>
      <div className={s.header}>
      <div className={s.absolute} onClick={() => handleNextSlide()}><IoIosArrowBack className={s.flecha} color="#fff" /></div>
      <div className={s.absoluteR} onClick={() => handlePrevSlide()}><IoIosArrowForward className={s.flecha} color="#fff" /></div>
      <Slider {...settings} className={s.slider} ref={sliderRefWeb} >
        <div className={s.slide}>
          <img src={pathImages + img} alt="test" />
        </div>
        <div className={s.slide}>
          <img src={pathImages + img2} alt="test" />
        </div>
        <div className={s.slide}>
          <img src={pathImages + img3} alt="test" />
        </div>
        <div className={s.slide}>
          <img src={pathImages + img4} alt="test" />
        </div>
        <div className={s.slide}>
          <img src={pathImages + img5} alt="test" />
        </div>
        <div className={s.slide}>
          <img src={pathImages + img6} alt="test" />
        </div>
        <div className={s.slide}>
          <img src={pathImages + img7} alt="test" />
        </div>
      </Slider>
      <Slider className={s.sliderMobile} {...settingsMobile} ref={sliderRef} >
        <div className={s.slide}>
          <img src={pathImages + imgmobile} alt="test" />
        </div>
        <div className={s.slide}>
          <img src={pathImages + img2mobile} alt="test" />
        </div>
        <div className={s.slide}>
          <img src={pathImages + img3mobile} alt="test" />
        </div>
        <div className={s.slide}>
          <img src={pathImages + img4mobile} alt="test" />
        </div>
        <div className={s.slide}>
          <img src={pathImages + img5mobile} alt="test" />
        </div>
        <div className={s.slide}>
          <img src={pathImages + img6mobile} alt="test" />
        </div>
        <div className={s.slide}>
          <img src={pathImages + img7mobile} alt="test" />
        </div>
      </Slider>
      <div className={s.absoluteText}>construido en Italia, diseñado con pasión.</div>
      <div className={s.absoluteShadow}></div>
      </div>
      <div className={s.barra}>
      <div className={s.centrado}>
        <span style={{textAlign:"start"}}>construido en Italia, diseñado con pasión.</span>
        <div className={s.circles}>
            <BsCircleFill style={currentSlide == 0 ? {color:"#FF3A2D"}: {}}/>
            <BsCircleFill style={currentSlide > 0 && currentSlide < 3 ? {color:"#FF3A2D"}: {}}/>
            <BsCircleFill style={currentSlide > 2  && currentSlide < 6? {color:"#FF3A2D"}: {}}/>
            <BsCircleFill style={currentSlide == 6 ? {color:"#FF3A2D"}: {}}/>
        </div>
        <span style={{textAlign:"end"}}>galería zar</span>
      </div>
      </div>
      </>
    )
}