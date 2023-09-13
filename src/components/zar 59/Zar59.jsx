import img from "../../assets/zar/59/portada2.jpg"
import zar from "../../assets/zar/59/Enmascarar grupo 491.png"
import lancha from "../../assets/zar/59/1Zar 59 SL Limited 2.jpg"
import lancha2 from "../../assets/zar/59/2Zar 59 SL Limited 6.jpg"
import lancha3 from "../../assets/zar/59/3Zar 59 SL Limited 6.jpg"
import { IoIosSearch, IoIosArrowDown, IoIosArrowUp, IoIosArrowForward } from "react-icons/io";
import { useRef, useState } from "react"
import datos from "../../assets/zar/59/datos tecnicos.jpg"
import datosMobile from "../../assets/zar/59/mobile/datos tecnicos.jpg"
import s from "./Zar.module.css"
import video59 from "../../assets/zar/59/59sl.mp4"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ImageOpen from "../imageOpen/imageOpen"
import pdf from "../../assets/zar/59/59sl.pdf"

export default function Zar59() {
    const sliderRef = useRef(null);
    const [imagen, setImagen] = useState({ open: false, src: "" ,index:""})

    const [caracteristica, setCaracteristica] = useState("")
    const desplegar = (descripcion) => {
        if (caracteristica === descripcion) setCaracteristica("")
        else setCaracteristica(descripcion)
    }
    const bigPicture = (e) => {
        console.log(e.target.src)
        setImagen({ open: true, src: e.target.src, index: e.target.id })
    }

    const handleDownload = () => {
        const fileUrl = '../../../../assets/ecooter/E5.pdf'; // Reemplaza esto con la URL real del PDF
        const fileName = 'ZAR 59SL.pdf'; // Reemplaza esto con el nombre que desees para el archivo
    
        // Crear un enlace temporal para la descarga
        const link = document.createElement('a');
        link.href = pdf;
        link.target = '_blank'; // Abrir el enlace en una nueva pestaña (opcional)
        link.download = fileName;
        link.click();
      };

    const settings = {
        infinite: true,
        speed: 1000,
        arrows: false,
        slidesToShow: 1.5,
        autoplay: true,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };
  let imgArr = [lancha2, lancha3, lancha]

    return (
        <div className={s.section}>
            <div className={imagen.open ? s.filtro : ""}> </div>
                <div className={s.navSpace}></div>
                <div className={s.header}>
                    <div className={s.imgContainer}><img src={img} alt="" /></div>
                    <div className={s.absolute}>
                        <div className={s.imgContainer}><img src={zar} alt="" /></div>
                        <button onClick={()=> handleDownload()}>FICHA TECNICA</button>
                    </div>
                </div>
                <div className={s.headerMobile}>
                    <div className={s.imgContainer}><img src={zar} alt="" /></div>
                    <div className={s.imgContainerBote}><img src={img} alt="" /></div>
                    <button onClick={()=> handleDownload()}>FICHA TECNICA</button>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <div className={s.titulo}>
                        <h3 >CARACTERISTICAS</h3>
                    </div>
                    <div className={s.caracteristicas}>
                        <div className={s.items} onClick={() => desplegar(1)} style={caracteristica == 1 ? { color: "#FF3A2D" } : {}}>
                            {caracteristica == 1 ? <IoIosArrowDown size={"1.5em"} /> : <IoIosArrowForward size={"1.5em"} />}
                            <span>DESCRIPCIÓN</span>
                        </div>
                        <div className={s.items} onClick={() => desplegar(2)} style={caracteristica == 2 ? { color: "#FF3A2D" } : {}}>
                            {caracteristica == 2 ? <IoIosArrowDown size={"1.5em"} /> : <IoIosArrowForward size={"1.5em"} />}
                            <span>EQUIPAMIENTO</span>
                        </div>
                        <div className={s.items} onClick={() => desplegar(3)} style={caracteristica == 3 ? { color: "#FF3A2D" } : {}}>
                            {caracteristica == 3 ? <IoIosArrowDown size={"1.5em"} /> : <IoIosArrowForward size={"1.5em"} />}
                            <span>DATOS TÉCNICOS</span>
                        </div>
                    </div>
                    {caracteristica == 1 &&
                        <div className={s.textContainer}>
                            <p>Nace el nuevo ZAR 59SL.
                            </p>
                            <p>Segundo nacimiento de la nueva línea SPORT LUXURY: una nueva serie que incorpora sin cambios, consolidándolas, todas las características ganadoras que han llevado a la ZAR a ser el punto de referencia en el mundo de las embarcaciones neumáticas. </p>
                            <p>De hecho, se mantienen inalterables las grandes cualidades de habitabilidad, confort, cuidado constructivo y esa especial calidad de navegación por el diseño exclusivo del casco ZAR. </p>
                            <p>El diseño de esta nueva serie, sin dejar de seguir la senda marcada por todos los ZAR más nobles, se lanza hacia líneas de luz salpicadas de aristas inesperadas y superficies cortantes que crean armonía en la disimilitud paralela de las líneas.
                            </p>
                            <p>La ZAR 59 Sport Luxury es una embarcación auxiliar por descubrir, con una línea cautivadora e innovadora, que lleva el concepto de embarcación neumática aún más allá gracias a soluciones técnicas y funcionales de vanguardia, equipamiento de primer nivel, cuidado de la construcción de primer nivel y alta termina la clase.</p>
                            <p>Es un zar: no podía ser de otro modo.</p>
                        </div>
                    }
                    {caracteristica == 2 &&

                        <div className={s.contenedorTexto}>
                            <ul className={s.textContainer}>
                                <li>Taquilla de fondeo  </li>
                                <li>Morro de ancla con placa de acero inoxidable preparado para molinete eléctrico </li>
                                <li>3 amplios compartimentos portaobjetos delanteros </li>
                                <li>2 compartimentos laterales de proa</li>
                                <li>Amplio compartimento de almacenamiento trasero </li>
                                <li>2 cómodos compartimentos de almacenamiento en la cabina del motor trasero </li>
                                <li>Depósito de combustible de unos 160 l/42 gal estándar CE instalado</li>
                                <li>Consola de conducción de 2 plazas con compartimento de almacenamiento interno, sistema de dirección hidráulica y rueda motriz deportiva
                                </li>
                                <li>Asiento del conductor para conducción sentada o semisentada </li>
                                <li>Compartimento debajo del asiento del piloto
                                </li>
                                <li>Parachoques doble de goma resistente </li>
                                <li>7 manijas de acero inoxidable para seguridad de los pasajeros </li>
                                <li>4 tacos de acero inoxidable</li>
                                <li>3 cáncamos de acero inoxidable para perchas </li>
                                <li>Escalera plegable de acero inoxidable en la cubierta de popa izquierda Cubierta de popa derecha bomba de achique Kit de reparación, bomba de inflado, par de paletas.</li>
                                <li>Sistema de presión de agua dulce con tanque de agua (alrededor de 60 L/ 16 gal) y ducha; </li>
                                <li>Arco de radar basculante de acero inoxidable con luces de navegación, bocina; destacar; </li>
                                <li>Extensión de solarium delantero con mesa que incluye tablas y cojines. el tablero del centro España viene con una pata de acero inoxidable que se puede usar como mesa; CO </li>
                                <li>Soporte de motor auxiliar;</li>
                                <li>Panel de interruptores con fusibles. </li>
                                <li>Anclaje de acero inoxidable de 0,7 kg/15 libras</li>
                            </ul>
                        </div>
                    }
                    {caracteristica == 3 &&
                        <>
                            <div className={`${s.textContainer} ${s.mobile}`}>
                                <h4>DATOS TÉCNICOS</h4>
                                <div className={s.imgContainer}><img src={datos} alt="" /></div>
                            </div>
                            <div className={s.textContainerMobile}>
                                <div className={s.imgContainer}><img src={datosMobile} alt="" /></div>
                            </div>
                        </>
                    }
                    <div className={s.titulo}>
                        <h3 >GALERIA</h3>
                    </div>
                    <div className={s.galeria}>
                        {imagen.open && <ImageOpen  imgArr={imgArr} src={imagen.src} setImagen={setImagen} imagen={imagen} />}
                        <div className={s.imgGaleria}><img id="0" onClick={(e) => bigPicture(e)} src={lancha2} alt="" /></div>
                        <div className={s.imgGaleria}><img id="1" onClick={(e) => bigPicture(e)} src={lancha3} alt="" /></div>
                        <div className={s.imgGaleria}><img id="2" onClick={(e) => bigPicture(e)} src={lancha} alt="" /></div>
                    </div>
                    <div className={s.sliderContainer}>
                        <Slider className={s.slider} {...settings} ref={sliderRef} >
                            <div className={s.imgGaleria}><img src={lancha} alt="" /></div>
                            <div className={s.imgGaleria}><img src={lancha2} alt="" /></div>
                            <div className={s.imgGaleria}><img src={lancha3} alt="" /></div>
                        </Slider>
                    </div>
                    <div className={s.titulo}>
                        <h3 >VIVI LA EXPERIENCIA 3D ZAR</h3>
                    </div>
                    <div className={s.iframe}>
                        <video width={"100%"} src={video59} controls ></video>
                    </div>
                </div>
        </div>
    )
}
