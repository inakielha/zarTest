import img from "../../assets/modelos/Enmascarar grupo 496.png"
import s from "./modelo.module.css"
import zar from "../../assets/modelos/Enmascarar grupo 495.png"
import lancha from "../../assets/zar/85/1Zar85SL.jpg"
import lancha2 from "../../assets/zar/85/2Zar85SL_04.jpg"
import lancha3 from "../../assets/zar/85/3Zar85SL_42.jpg"
import { IoIosSearch, IoIosArrowDown, IoIosArrowUp, IoIosArrowForward } from "react-icons/io";
import { useRef, useState } from "react"
import datos from "../../assets/zar/85/datos tecnicos.jpg"
import datosMobile from "../../assets/zar/85/mobile/datos tecnicos.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Modelo() {
    const sliderRef = useRef(null);

    const [caracteristica, setCaracteristica] = useState("")
    const desplegar = (descripcion) => {
        if (caracteristica === descripcion) setCaracteristica("")
        else setCaracteristica(descripcion)
    }

    
    const settings = {
        infinite: true,
        speed: 1000,
        arrows: false,
        slidesToShow: 1.5,
        autoplay: true,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };
    return (
        <>
            <div className={s.navSpace}></div>
            <div className={s.header}>
                <div className={s.imgContainer}><img src={img} alt="" /></div>
                <div className={s.absolute}>
                    <div className={s.imgContainer}><img src={zar} alt="" /></div>
                    <button>FICHA TECNICA</button>
                </div>
            </div>
            <div className={s.headerMobile}>
                <div className={s.imgContainer}><img src={zar} alt="" /></div>
                <div className={s.imgContainerBote}><img src={img} alt="" /></div>
                <button>FICHA TECNICA</button>
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
                        <p>El nuevo modelo ZAR 85 SL es el buque insignia de la Línea Sport Luxury, que ya incluye los ZAR 49 SL y ZAR 59. </p>
                        <p>Las altas prestaciones junto con un diseño futurista y llamativo de la cubierta, hacen que el ZAR 85 SL sea trendy, ideal para los amantes del estilo y, nos atrevemos a decir, del glamour. El diseño ergonómico y orientado a los deportes hace que el ZAR 85 SL sea perfecto para ser un bote auxiliar para un yate o como un barco independiente. </p>
                        <p>Esto se ha desarrollado a partir de la estructura consolidada del ZAR 87 que alberga una cabina de baño interna donde puede estar de pie cómodamente. El mismo casco está perfectamente adaptado al concepto deportivo, en línea con la serie Sport Luxury. </p>
                        <p>Este nuevo ZAR 85 SL, tiene una consola que se puede transformar en una cama doble con espacio debajo para colocar un inodoro. Disponible: Versión de cabina de gelcoat blanco/Versión de cabina de gelcoat color.</p>
                    </div>
                }
                {caracteristica == 2 &&
                    <ul className={s.textContainer}>
                        <li>Taquilla de fondeo </li>
                        <li>Rodillo de anclaje con placa de acero inoxidable preparado para molinete eléctrico </li>
                        <li>2 amplios compartimentos de almacenamiento en proa </li>
                        <li>2 cofres de almacenamiento de proa Amplio cofre de almacenamiento central en popa</li>
                        <li>Pasamanos integrado en la brazola de la cabina Tanque de combustible alrededor de 400 1/105 gal CE estándar instalado</li>
                        <li>Consola de timón de 2 plazas </li>
                        <li>Interruptor eléctrico/panel de fusibles en la consola </li>
                        <li>Luces de navegación completamente instaladas (luces de proa y luz de fondeo en el poste)</li>
                        <li>Sistema de dirección hidráulica</li>
                        <li>Volante deportivo </li>
                        <li>Compartimento de almacenamiento interno con lavabo y WC 2 luces Led en el interior de la cabina Asiento piloto con respaldo inclinado pivotante </li>
                        <li>Cocina de 2 o 3 fuegos (instalación de gas no incluida)</li>
                        <li>Juego completo de cojines exteriores</li>
                        <li>Cojines de cabina (excepto rellenos)</li>
                        <li>Cojines de respaldo ajustados en la zona de asientos de proa</li>
                        <li>Cojines de respaldo ajustados en la zona de asientos de popa </li>
                        <li>Sistema de agua dulce presurizado con tanque de agua integral (alrededor de 100 1/16 gal) y ducha Frigorífico (641)</li>
                        <li>Actuador de gas para la tapa del tambucho de proa Actuadores de gas para la tapa del casillero de popa</li>
                        <li>Actuadores de gas para la tapa del casillero lateral de popa </li>
                        <li>Bimini retráctil oculto dentro del casillero de popa en la cabina </li>
                        <li>bomba de achique Anclaje de acero inoxidable de 0,9 kg Defensa doble de goma resistente</li>
                        <li>Asas de acero inoxidable para todos los ocupantes 4 tacos de acero inoxidable </li>
                        <li>3 argollas de elevación de acero inoxidable </li>
                        <li>Prolongación de la plataforma de baño del puerto con escalera plegable de acero inoxidable Plataforma de baño estribor </li>
                        <li>Juego de reparación bomba de inflado Manómetro</li>
                        <li>Par de remos</li>
                    </ul>
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
                    <div className={s.imgGaleria}><img src={lancha} alt="" /></div>
                    <div className={s.imgGaleria}><img src={lancha2} alt="" /></div>
                    <div className={s.imgGaleria}><img src={lancha3} alt="" /></div>
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
                    <iframe loading="lazy" allowFullScreen="allowfullscreen" width={"100%"} src="https://vrcloud.com/1475647911" frameborder="0" ></iframe>
                </div>
            </div>
        </>
    )
}