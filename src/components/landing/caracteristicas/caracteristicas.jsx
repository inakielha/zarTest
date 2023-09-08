import { IoIosSearch, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import s from "./caracteristicas.module.css"
import { useState } from "react";
import calidad from "../../../assets/caracteristicas/calidad.svg"
import calidadMobile from "../../../assets/zar/home/caracteristicas/caracterisitcas mobile/Imagen 400.jpg"
import barcoMobile from "../../../assets/zar/home/caracteristicas/caracterisitcas mobile/Enmascarar grupo 531.jpg"
import solMobile from "../../../assets/zar/home/caracteristicas/caracterisitcas mobile/Imagen 402.jpg"
import hidroMobile from "../../../assets/zar/home/caracteristicas/caracterisitcas mobile/Imagen 404.jpg"
import intemperieMobile from "../../../assets/zar/home/caracteristicas/caracterisitcas mobile/Imagen 410.jpg"
import resstenciaMobile from "../../../assets/zar/home/caracteristicas/caracterisitcas mobile/Imagen 411.jpg"
import fuegoMobile from "../../../assets/zar/home/caracteristicas/caracterisitcas mobile/Imagen 413.jpg"
import abrasionMobile from "../../../assets/zar/home/caracteristicas/caracterisitcas mobile/Imagen 415.jpg"
import tubularMobile from "../../../assets/zar/home/caracteristicas/caracterisitcas mobile/Imagen 419.jpg"
import carenaMobile from "../../../assets/zar/home/caracteristicas/caracterisitcas mobile/carena.jpg"
import bote3Mobile from "../../../assets/zar/home/caracteristicas/caracterisitcas mobile/spazio (1).jpg"

import sol from "../../../assets/caracteristicas/sol.svg"
import fuego from "../../../assets/caracteristicas/fuego.svg"
import abrasion from "../../../assets/caracteristicas/abrasion.svg"
import hidro from "../../../assets/caracteristicas/hidrocarburos.svg"
import tubular from "../../../assets/caracteristicas/tubular.svg"
import mecanica from "../../../assets/caracteristicas/mecanica.svg"
import interperie from "../../../assets/zar/home/caracteristicas/Imagen 391.jpg"
import orca from "../../../assets/caracteristicas/Enmascarar grupo 489.png"
import materiales from "../../../assets/caracteristicas/Enmascarar grupo 490.png"
import carena from "../../../assets/caracteristicas/carena.png"
import bote from "../../../assets/caracteristicas/Enmascarar grupo 492.png"
import bote2 from "../../../assets/caracteristicas/Enmascarar grupo 493.png"
import bote3 from "../../../assets/caracteristicas/spazio (1).png"
import grafico from "../../../assets/caracteristicas/Imagen 399.png"

export default function Caracteristicas() {
    const [isOpen, setIsOpen] = useState()
    const toggleAccordion = (id) => {
        if (isOpen === id) {
            setIsOpen("")
        } else {
            setIsOpen(id);
        }
    };
    return (
        <div className={s.section}>
            <div className={s.caracteristicas}>
                <h3>CARACTERISTICAS</h3>
                <div className={s.select}>
                    <div className={s.info} onClick={() => toggleAccordion(1)} style={isOpen == 1 ? { backgroundColor: "#FF3A2D" } : {}}>
                        {isOpen === 1 ? <IoIosArrowUp size={"2em"} style={{ paddingLeft: "0.5em" }} /> : <IoIosArrowDown size={"2em"} style={{ paddingLeft: "0.5em" }} />}
                        <span>CALIDAD</span>
                    </div>
                    <div className={s.txtCont}>
                        {isOpen === 1 &&
                            <>
                                <div className={ `${s.option} ${s.mobile}`}>
                                    <div className={s.imgCont}><img src={calidad} alt="" /></div>
                                    <div className={s.textoCont}>
                                        <h4>LA CALIDAD SE PUEDE VER Y TOCAR.</h4>
                                        <span className={s.texto} style={{ paddingLeft: "0", width: "100%" }}>
                                            Calidad de vida a bordo:  espacio, comodidad y seguridad son el resultado de una extrema atención a cada detalle, pasamanos para cada pasajero, ausencia de salientes que puedan lesionarte, cierres estancos, deflector en el parabrisas, asientos ergonómicos, espacios modulares.
                                        </span>
                                        <span className={s.texto} style={{ paddingLeft: "0", width: "100%" }}>
                                            Calidad de construcción:  atención al detalle hasta las piezas más pequeñas, incluso las invisibles: doble sellado de los elementos neumáticos, juntas debajo de las piezas metálicas, tornillos y tuercas autoblocantes (no remaches ciegos). Materiales de primera elección y mano de obra muy cuidada.
                                        </span>
                                    </div>
                                </div>
                                <div className={s.optionTwo}>
                                    <div className={s.textoCont}>
                                        <h4>LA CALIDAD SE PUEDE VER Y TOCAR.</h4>
                                        <div className={s.imgCont}><img src={calidadMobile} alt="" /></div>
                                        <span className={s.texto} style={{ paddingLeft: "0", width: "100%" }}>
                                            Calidad de vida a bordo:  espacio, comodidad y seguridad son el resultado de una extrema atención a cada detalle, pasamanos para cada pasajero, ausencia de salientes que puedan lesionarte, cierres estancos, deflector en el parabrisas, asientos ergonómicos, espacios modulares.
                                        </span>
                                        <span className={s.texto} style={{ paddingLeft: "0", width: "100%" }}>
                                            Calidad de construcción:  atención al detalle hasta las piezas más pequeñas, incluso las invisibles: doble sellado de los elementos neumáticos, juntas debajo de las piezas metálicas, tornillos y tuercas autoblocantes (no remaches ciegos). Materiales de primera elección y mano de obra muy cuidada.
                                        </span>
                                    </div>
                                </div>
                            </>


                        }
                    </div>

                    <div className={s.info} onClick={() => toggleAccordion(2)} style={isOpen == 2 ? { backgroundColor: "#FF3A2D" } : {}}>
                        {isOpen === 2 ? <IoIosArrowUp size={"2em"} style={{ paddingLeft: "0.5em" }} /> : <IoIosArrowDown size={"2em"} style={{ paddingLeft: "0.5em" }} />}
                        <span>EL PROYECTO Y LA TECNOLOGIA</span>
                    </div>
                    <div className={s.txtCont}>
                        {isOpen === 2 &&
                            <div className={s.option}>
                                <div className={s.imgCont}><img src={barcoMobile} alt="" /></div>
                                <div className={s.textoCont}>
                                    <span className={s.texto} >
                                        El eje sobre el que gira toda la actividad de elaboración de un nuevo ZAR es el prototipo "virtual" desarrollado por el centro de cómputo. Los cálculos matemáticos, las simulaciones, la definición de las líneas de agua se materializan en el modelo del casco.
                                    </span>
                                    <span className={s.texto} >
                                        Así nació el primer prototipo náutico que fue probado y optimizado hasta conseguir los objetivos del proyecto: seguridad, confort y prestaciones, por este orden.
                                    </span>
                                    <span className={s.texto} >
                                        Las pruebas tienen lugar en las más diversas condiciones y los datos obtenidos contribuyen a la defi nición de los espacios y volúmenes de la cubierta que deben diseñarse para respetar mejor la posición ideal del centro de gravedad y el equilibrio estático y dinámico del vehículo. en todas las condiciones de carga y con todos los modos de andar.
                                    </span>
                                    <span className={s.texto} >
                                        El paso del diseño virtual informatizado a la construcción real del modelo se confía a enormes fresadoras de 5 ejes de control numérico que, pasada tras pasada, excavan, desbastan y acaban una gran masa de una resina particular, el "chocolate" en jerga.
                                    </span>
                                    <span className={s.texto} >
                                        El toque mágico del hombre completa, con un pulido minucioso, el modelo fi nal del que nacerán los moldes. Una vez terminada la maqueta, listos los moldes, ahora comienza toda la obra: moldurados y contramoldeados, tubulares, encolados, bisagras, cojines.

                                    </span>
                                    <span className={s.texto} >
                                        La organización corporativa toma el relevo gestionando ese delicado equilibrio de alta artesanía y tecnología avanzada de la mejor manera posible.
                                    </span>
                                    <span className={s.texto}>
                                        Nacía un nuevo zar.
                                    </span>
                                </div>
                            </div>
                                                   }
                    </div>


                    <div className={s.info} onClick={() => toggleAccordion(3)} style={isOpen == 3 ? { backgroundColor: "#FF3A2D" } : {}}>
                        {isOpen === 3 ? <IoIosArrowUp size={"2em"} style={{ paddingLeft: "0.5em" }} /> : <IoIosArrowDown size={"2em"} style={{ paddingLeft: "0.5em" }} />}
                        <span>LA TELA GOMADA</span>
                    </div>
                    <div className={s.txtCont}>
                        {isOpen === 3 &&
                            <div className={s.option}>
                                <div className={s.textoCont}>
                                    <span className={s.texto}>
                                        Para la construcción de las partes encauchadas de los barcos ZAR, el Astillero ZAR-Formenti utiliza exclusivamente productos ORCA® de Pennel Industries: tejido de poliéster "High Tenacity" con recubrimiento de CSM (caucho sintético policlorosulfonado) y CR (cloropreno). Los tubulares se embalan con cubrejuntas interior y exterior y la junta entre ellos y el casco es doble en todo el perímetro
                                    </span>
                                    <div className={s.cualidades}>
                                        <div className={s.dimensions}><img className={s.dimensions} src={solMobile} alt="" /></div>
                                        <div className={s.dimensionsMobile}><img className={s.dimensions} src={sol} alt="" /></div>
                                        <div className={s.cualidadesText}>
                                            <h4>Resistencia a los rayos ultravioleta</h4>
                                            <span>La capa exterior de los tejidos engomados ORCA® presenta unas excepcionales características de resistencia al envejecimiento que permiten ofrecer una gama cromática incomparable.</span>
                                        </div>
                                    </div>
                                    <div className={s.cualidades}>
                                        <div className={s.dimensions}><img className={s.dimensions} src={fuegoMobile} alt="" /></div>
                                        <div className={s.dimensionsMobile}><img className={s.dimensions} src={fuego} alt="" /></div>
                                        <div className={s.cualidadesText}>
                                            <h4>Resistencia al fuego</h4>
                                            <span>Es gracias a la base de caucho que los productos ORCA® mantienen todas sus propiedades en caso de exposición accidental al calor.</span>
                                        </div>
                                    </div>
                                    <div className={s.cualidades}>
                                        <div className={s.dimensions}><img className={s.dimensions} src={abrasionMobile} alt="" /></div>
                                        <div className={s.dimensionsMobile}><img className={s.dimensions} src={abrasion} alt="" /></div>
                                        <div className={s.cualidadesText}>
                                            <h4>Resistencia a la abrasión</h4>
                                            <span>La fórmula química de la capa de CSM confiere al tejido cauchutado ORCA® una buena resistencia a la abrasión.</span>
                                        </div>
                                    </div>
                                    <div className={s.cualidades}>
                                        <div className={s.dimensions}><img className={s.dimensions} src={hidroMobile} alt="" /></div>
                                        <div className={s.dimensionsMobile}><img className={s.dimensions} src={hidro} alt="" /></div>
                                        <div className={s.cualidadesText}>
                                            <h4>Resistencia a los hidrocarburos</h4>
                                            <span>La resistencia a los hidrocarburos del tejido engomado ORCA® lo convierte en un material recomendado para la construcción de embarcaciones de trabajo.</span>
                                        </div>
                                    </div>
                                    <div className={s.cualidades}>
                                        <div className={s.dimensions}><img className={s.dimensions} src={tubularMobile} alt="" /></div>
                                        <div className={s.dimensionsMobile}><img className={s.dimensions} src={tubular} alt="" /></div>
                                        <div className={s.cualidadesText}>
                                            <h4>Reparación tubular</h4>
                                            <span>Al igual que una cámara de aire, las mantas ORCA® son fáciles de reparar, con pegamento.</span>
                                        </div>
                                    </div>
                                    <div className={s.cualidades}>
                                        <div className={s.dimensions}><img className={s.dimensions} src={resstenciaMobile} alt="" /></div>
                                        <div className={s.dimensionsMobile}><img className={s.dimensions} src={mecanica} alt="" /></div>
                                        <div className={s.cualidadesText}>
                                            <h4>Resistencia mecánica</h4>
                                            <span>La elección de un soporte textil de alta tenacidad, asociado a una excelente adherencia, confiere al producto ORCA® una excelente resistencia mecánica.</span>
                                        </div>
                                    </div>
                                    <div className={s.cualidades}>
                                        <div className={s.dimensions}><img className={s.dimensions} src={intemperieMobile} alt="" /></div>
                                        <div className={s.dimensionsMobile}><img className={s.dimensions} src={interperie} alt="" /></div>

                                        <div className={s.cualidadesText}>
                                            <h4>Resistencia a la intemperie</h4>
                                            <span>El tejido engomado ORCA®, destinado tanto al ocio como a actividades profesionales y militares, satisface las exigencias de navegación más severas.</span>
                                        </div>
                                    </div>
                                    <div className={s.cualidades}>
                                        <div className={s.imgCont}><img src={orca} alt="" /></div>
                                        <div className={s.imgCont}><img src={materiales} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                    <div className={s.info} onClick={() => toggleAccordion(4)} style={isOpen == 4 ? { backgroundColor: "#FF3A2D" } : {}}>
                        {isOpen === 4 ? <IoIosArrowUp size={"2em"} style={{ paddingLeft: "0.5em" }} /> : <IoIosArrowDown size={"2em"} style={{ paddingLeft: "0.5em" }} />}
                        <span>EL CASCO</span>
                    </div>
                    <div className={s.txtCont}>
                        {isOpen === 4 &&
                        <>
                            <div className={ `${s.option} ${s.mobile}`} >
                                <div className={s.imgContCarena}><img src={carena} alt="" /></div>
                                <div className={s.casco}>
                                    <span className={s.texto} >
                                        La longitud del casco es el parámetro más importante, a igualdad de otros elementos de diseño, para determinar las cualidades de navegación de un bote con casco de fibra de vidrio. Todos los ZAR, gracias a la ausencia del tubo de proa y al retroceso del espejo de popa hasta el límite de los conos de popa, tienen un casco mucho más largo que el de las embarcaciones neumáticas con casco convencional de fibra de vidrio de la misma eslora. en los diagramas, todos los ZAR deben compararse con barcos mucho más largos si desea tener cascos de la misma longitud. Además, la ausencia del tubo de proa (patente internacional) ha permitido crear cascos con una "V" muy profunda y generar formas extremadamente efectivas en todas las condiciones de navegación. Los túneles laterales (otra patente),
                                    </span>
                                    <div className={s.cualidades} style={{ borderBottom: "none" }}>
                                        <div className={s.imgCont} ><img src={bote2} alt="" /></div>
                                        <div className={s.imgCont} ><img src={bote} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className={ s.optionTwo} style={{flexDirection:"column-reverse"}}>
                                <div className={s.imgContCarena}><img src={carenaMobile} alt="" /></div>
                                <div className={s.casco}>
                                    <span className={s.texto} >
                                        La longitud del casco es el parámetro más importante, a igualdad de otros elementos de diseño, para determinar las cualidades de navegación de un bote con casco de fibra de vidrio. Todos los ZAR, gracias a la ausencia del tubo de proa y al retroceso del espejo de popa hasta el límite de los conos de popa, tienen un casco mucho más largo que el de las embarcaciones neumáticas con casco convencional de fibra de vidrio de la misma eslora. en los diagramas, todos los ZAR deben compararse con barcos mucho más largos si desea tener cascos de la misma longitud. Además, la ausencia del tubo de proa (patente internacional) ha permitido crear cascos con una "V" muy profunda y generar formas extremadamente efectivas en todas las condiciones de navegación. Los túneles laterales (otra patente),
                                    </span>
                                </div>
                            </div>
                        </>
                        }
                    </div>

                    <div className={s.info} onClick={() => toggleAccordion(5)} style={isOpen == 5 ? { backgroundColor: "#FF3A2D" } : {}}>
                        {isOpen === 5 ? <IoIosArrowUp size={"2em"} style={{ paddingLeft: "0.5em" }} /> : <IoIosArrowDown size={"2em"} style={{ paddingLeft: "0.5em" }} />}
                        <span>ESPACIO A BORDO</span>
                    </div>
                    <div className={s.txtCont}>
                        {isOpen === 5 &&
                        <>
                            <div className={`${s.option} ${s.mobile}`} >
                                <div className={s.imgCont} style={{ paddingLeft: "1em" }}><img src={bote3} alt="" /></div>
                                <div className={s.textoCont}>
                                    <span className={s.texto} >
                                        La longitud del casco es el parámetro más importante, a igualdad de otros elementos de diseño, para determinar las cualidades de navegación de un bote con casco de fibra de vidrio. Todos los ZAR, gracias a la ausencia del tubo de proa y al retroceso del espejo de popa hasta el límite de los conos de popa, tienen un casco mucho más largo que el de las embarcaciones neumáticas con casco convencional de fibra de vidrio de la misma eslora. en los diagramas, todos los ZAR deben compararse con barcos mucho más largos si desea tener cascos de la misma longitud. Además, la ausencia del tubo de proa (patente internacional) ha permitido crear cascos con una "V" muy profunda y generar formas extremadamente efectivas en todas las condiciones de navegación. Los túneles laterales (otra patente),
                                    </span>
                                </div>
                            </div>
                            <div className={s.optionTwo} >
                                <div className={s.textoCont}>
                                    <span className={s.texto} >
                                        La longitud del casco es el parámetro más importante, a igualdad de otros elementos de diseño, para determinar las cualidades de navegación de un bote con casco de fibra de vidrio. Todos los ZAR, gracias a la ausencia del tubo de proa y al retroceso del espejo de popa hasta el límite de los conos de popa, tienen un casco mucho más largo que el de las embarcaciones neumáticas con casco convencional de fibra de vidrio de la misma eslora. en los diagramas, todos los ZAR deben compararse con barcos mucho más largos si desea tener cascos de la misma longitud. Además, la ausencia del tubo de proa (patente internacional) ha permitido crear cascos con una "V" muy profunda y generar formas extremadamente efectivas en todas las condiciones de navegación. Los túneles laterales (otra patente),
                                    </span>
                                </div>
                                <div className={s.imgCont} style={{ paddingLeft: "1em" }}><img style={{width:"90%"}} src={bote3Mobile} alt="" /></div>
                            </div>
                        </>
                        }
                    </div>
                    <div className={s.info} onClick={() => toggleAccordion(6)} style={isOpen == 6 ? { backgroundColor: "#FF3A2D" } : {}}>
                        {isOpen === 6 ? <IoIosArrowUp size={"2em"} style={{ paddingLeft: "0.5em" }} /> : <IoIosArrowDown size={"2em"} style={{ paddingLeft: "0.5em" }} />}
                        <span>ZAR DE FASE-COMPOSITIVE</span>
                    </div>
                    <div className={s.txtCont}>
                        {isOpen === 6 &&
                            <div className={s.option} style={{ flexDirection: "column", gap:"0.5em" }} >
                                <div className={s.option} style={{ alignItems: "center" }} >
                                    <div className={s.textoCont} >
                                        <span className={s.texto}>FACE-FIBRE: fibras naturales compatibles con cualquier tipo de resina
                                            creada para ofrecer una alternativa real a la fibra de vidrio
                                            facilidad de uso y limpieza en los procesos productivos.
                                        </span>
                                        <span className={s.texto}>
                                            CORECORK: aglomerado de corcho ideal para composites sándwich
                                            adaptable a superficies complejas y doble curvatura
                                            reciclable hasta desde su primeras fases de producción.

                                        </span>
                                        <span className={s.texto}>
                                            BIRESIN CR83: resina epoxi libre de estireno, aminas de naturaleza aromática, alcohol furfurílico y fenoles, sustancias notoriamente reconocidas como
                                            agresivas y nocivas para la salud, especialmente diseñada para procesos de infusión.
                                        </span>
                                    </div>
                                    <div className={s.imgCont} style={{ paddingLeft: "1em" }}><img src={grafico} alt="" /></div>

                                </div>
                                <div className={s.textoCont} style={{ paddingBottom: "2.5em" }}>
                                    <span className={s.texto} style={{ paddingLeft: "0", width: "92%" }}>
                                        PRODUCCIÓN SOSTENIBLE
                                    </span>
                                    <span className={s.texto} style={{ padding: "0", width: "92%" }}>
                                        TECNOLOGÍA DE INFUSIÓN AL VACÍO
                                    </span><span className={s.texto} style={{ paddingTop: "0.2em", paddingBottom: "0", paddingLeft: "0", width: "92%" }}>
                                        Producción limitada de materiales de desecho • Reducción de emisiones de humos tóxicos al ambiente • Limpieza del ambiente de trabajo • Contacto limitado del operador con las resinas • Mejores características mecánicas del producto terminado
                                    </span>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}