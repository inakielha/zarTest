import img from "../../assets/zar/65/portada.jpg"
import zar from "../../assets/zar/65/descarga.png"
import lancha from "../../assets/zar/65/1Zar65Croazia1.jpg"
import lancha2 from "../../assets/zar/65/2Zar65Croazia4.jpg"
import lancha3 from "../../assets/zar/65/3 ZAR 65 controluce su roccia.jpg"
import { IoIosSearch, IoIosArrowDown, IoIosArrowUp, IoIosArrowForward } from "react-icons/io";
import { useRef, useState } from "react"
import datos from "../../assets/zar/65/datos tecnicos.jpg"
import datosMobile from "../../assets/zar/65/mobile/datos tecnicos.jpg"
import s from "./Zar.module.css"
// import video65 from "../../assets/zar/65/F61C9D83-546A-4687-A411-9FF0CB723212.mov"
// import video65 from "../../assets/zar/65/F61C9D83-546A-4687-.mov"
import video65 from "../../assets/zar/65/65wsp.MOV"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ImageOpen from "../imageOpen/imageOpen"
import pdf from "../../assets/zar/65/65.pdf"
import VideoPlayer from "../videoPlayer/VideoPlayer"
import { pathImages } from "../../pathImages"


export default function Zar65() {
    const sliderRef = useRef(null);
    const [imagen, setImagen] = useState({ open: false, src: "", index: "" })


    const [caracteristica, setCaracteristica] = useState("")
    const desplegar = (descripcion) => {
        if (caracteristica === descripcion) setCaracteristica("")
        else setCaracteristica(descripcion)
    }
    const bigPicture = (e) => {
        // console.log(e.target.src)
        setImagen({ open: true, src: e.target.src, index: e.target.id })
    }

    const handleDownload = () => {
        const fileName = 'ZAR 65.pdf'; // Reemplaza esto con el nombre que desees para el archivo

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

    let imgArr = [pathImages + lancha, pathImages + lancha2, pathImages + lancha3]

    return (
        <div className={s.section}>
            <div className={imagen.open ? s.filtro : ""}> </div>
            <div className={s.navSpace}></div>
            <div className={s.header}>
                <div className={s.imgContainer}><img src={pathImages + img} alt="" /></div>
                <div className={s.absolute}>
                    <div className={s.imgContainer}><img src={pathImages ? pathImages + "descarga.png" : zar} alt="" /></div>
                    <button onClick={() => handleDownload()}>FICHA TECNICA</button>
                </div>
            </div>
            <div className={s.headerMobile}>
                <div className={s.imgContainer}><img src={pathImages ? pathImages + "descarga.png" : zar} alt="" /></div>
                <div className={s.imgContainerBote}><img src={pathImages + img} alt="" /></div>
                <button onClick={() => handleDownload()}>FICHA TECNICA</button>
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
                        <p>El ZAR 65 es grande, espacioso, cómodo: ¡Un verdadero buque insignia! </p>
                        <p>Interpreta mejor la filosofía que dio origen a la generación de los ZAR. Espacios y volúmenes a voluntad pero sin desperdicio. Todo es racional, previsto y construido con objetivos precisos. Los asientos 8/9 en el sentido de la marcha han sido diseñados para ofrecer el máximo confort; los ángulos entre los asientos y los respaldos tienen en cuenta los estudios ergonómicos más recientes, como en las berlinas más prestigiosas. </p>
                        <p>Dedicado al confort y al puro placer de la navegación y de la vida al aire libre, el Zar 65 sabe cómo transmitir a sus afortunados propietarios emociones insólitas también en términos de prestaciones. Es rápido y seguro, suave sobre las olas, maniobrable y ágil incluso en mares agitados. Gracias a un casco con una "V" muy profunda y una eslora mucho mayor de lo que cabría esperar de una embarcación de seis metros y medio. </p>
                        <p>El Zar 65 también demuestra ser excepcional cuando está parado, cuando se requiere de la embarcación todo el espacio posible para disfrutar del sol y el mar.
                            Dos enormes solariums en proa y popa, la posibilidad de un comedor delantero con mesa de caoba, montones, montones de taquillas y mucho espacio para moverse con facilidad.
                        </p>
                        <p>Versión ZAR 65 XL con espejo de popa apta para monomotor con eje extralargo.</p>
                    </div>
                }
                {caracteristica == 2 &&

                    <div className={s.contenedorTexto}>
                        <ul className={s.textContainer}>
                            <li>3 Filas de asientos para 8 personas en dirección de la marcha  </li>
                            <li>Cofre de ancla con puerta y preparado para molinete eléctrico. </li>
                            <li>Cofre posterior delante del motor, para cabosremos, etc.</li>
                            <li>Solarium de proa transformable en cama doble de 150 x 195 cms. con extensión opcional que incluye prolongación de solarium y cojines.</li>
                            <li>Amplia dinette a proa con mesa opcional</li>
                            <li>Amplia dinette a popa con mesa de serie - sólo versión "Suite</li>
                            <li>Amplio cofre de popa.</li>
                            <li>2 cofres laterales en las amuras de proa.
                            </li>
                            <li>Solarium de popa de 160 x 190cms. Consola doble con timonería hidráulicados cofres estancos con puerta, un portaobjetos y dos cofres más uno en el asiento delantero y otro en el asiento del piloto.</li>
                            <li>Asiento del conductor abatible, para ampliar el solarium de popa y para conducción semi-sentado  o de pie.
                            </li>
                            <li>Escalera de baño en acero inoxidable, con tapa de VTR. </li>
                            <li>Tanque de combustible de 250 L</li>
                            <li>6 Agarraderas.</li>
                            <li>4 cornamusas en acero inoxidable.</li>
                            <li>Doble perfil perimetral.</li>
                            <li>Ancla de acero inoxidable pulido de 9 Kgs </li>
                            <li> Ancla con escudo de inox.</li>
                            <li>4 cáncamos de suspensión para varada/botadura con grúa</li>
                        </ul>
                        <span style={{ paddingLeft: "1em" }}>EXTRAS</span>
                        <ul className={s.textContainer}>
                            <li>Arco radar en acero inoxidable </li>
                            <li>Instalación arco radar con luces de navegación,luces de fondeo, bocina e instalación eléctrica.</li>
                            <li>Foco pirata instalado en arco radar.</li>
                            <li>Extensión del solarium de proa. </li>
                            <li>Mesa completa en proa.</li>
                            <li> Soporte para motor auxiliar.</li>
                            <li>Funda de noche completa.</li>
                            <li>Funda de noche parcial Funda de consola.</li>
                            <li>Funda de asiento.</li>
                            <li>Panel eléctrico.</li>
                            <li>Plataforma de popa en babor con escalera plegable.</li>
                            <li>Plataforma de popa de estribor.</li>
                            <li>Ducha con tanque, bomba de presión,tapón exterior e instalación.</li>
                            <li>Kit completo de cinchas para suspensión para varada/botadura</li>
                            <li>Molinete eléctrico para el ancla instalado con motorcable,cadena y doble control (en consola y en pozo de anclas)</li>
                            <li>Kit wake board completo con contraplanchas de refuerzo Kit de modificación de ZAR 65 a Zar 65 suite.
                            </li>
                            <li>Plancha con escala para la doble motorización.</li>
                            <li>Nevera eletrica (12/24V)</li>
                            <li>Modificación del asiento del piloto ZAR 65 (para producciones anteriores a septiembre de 2005)</li>
                            <li>Flexi teek suelo</li>
                            <li>Flexi teak para lapas + cubre (4 pz)</li>
                            <li>Flexi teak para tapas (2 pz.)
                            </li>
                            <li>Instalación flexi tee.k</li>
                            <li>Tienda náutica de camping.</li>
                            <li>Toldo para sol de 3 arcos </li>
                            <li>Toldo para sol telescópico arco radar.
                            </li>

                        </ul>
                    </div>
                }
                {caracteristica == 3 &&
                    <>
                        <div className={`${s.textContainer} ${s.mobile}`}>
                            <h4>DATOS TÉCNICOS</h4>
                            <div className={s.imgContainer}><img src={pathImages + datos} alt="" /></div>
                        </div>
                        <div className={s.textContainerMobile}>
                            <div className={s.imgContainer}><img src={pathImages + datosMobile} alt="" /></div>
                        </div>
                    </>
                }
                <div className={s.titulo}>
                    <h3 >GALERIA</h3>
                </div>
                <div className={s.galeria}>
                    {imagen.open && <ImageOpen imgArr={imgArr} src={imagen.src} setImagen={setImagen} imagen={imagen} />}
                    <div className={s.imgGaleria}><img id="0" onClick={(e) => bigPicture(e)} src={pathImages + lancha} alt="" /></div>
                    <div className={s.imgGaleria}><img id="1" onClick={(e) => bigPicture(e)} src={pathImages + lancha2} alt="" /></div>
                    <div className={s.imgGaleria}><img id="2" onClick={(e) => bigPicture(e)} src={pathImages + lancha3} alt="" /></div>
                </div>
                <div className={s.sliderContainer}>
                    <Slider className={s.slider} {...settings} ref={sliderRef} >
                        <div className={s.imgGaleria}><img src={pathImages + lancha} alt="" /></div>
                        <div className={s.imgGaleria}><img src={pathImages + lancha2} alt="" /></div>
                        <div className={s.imgGaleria}><img src={pathImages + lancha3} alt="" /></div>
                    </Slider>
                </div>
                <div className={s.titulo}>
                    <h3 >VIVI LA EXPERIENCIA 3D ZAR</h3>
                </div>
                <div className={s.iframe}>
                    {/* <video width={"100%"} src={video65} controls ></video> */}
                    <VideoPlayer video={video65} />
                </div>
            </div>
        </div>
    )
}
