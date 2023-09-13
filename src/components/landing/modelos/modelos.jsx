import img from "../../../assets/zar/85/portada.jpg"
import img2 from "../../../assets/zar/65/portada.jpg"
import img3 from "../../../assets/zar/59/portada.jpg"
import s from "./modelos.module.css"
import Link, { useNavigate } from "react-router-dom"

export default function Modelos() {
    const navigate = useNavigate()
    return (
        <div className={s.section}>
            <div className={s.modelosContainer}>
                <div className={s.titulo}>
                    <h3>MODELOS</h3>
                </div>
                <div className={s.lanchasContainer}>
                    <div className={s.modelo}>
                        <div className={s.imgContainer}>
                            <img src={img} alt="" />
                        </div>
                        <button onClick={()=>navigate("/zar85")}>zar 85 sl</button>
                    </div>
                    <div className={s.modelo}>
                        <div className={s.imgContainer}>
                            <img src={img2} alt="" />
                        </div>
                        <button onClick={()=>navigate("/zar65")}>zar 65</button>
                    </div>
                    <div className={s.modelo}>
                        <div className={s.imgContainer}>
                            <img src={img} alt="" />
                        </div>
                        <button onClick={()=>navigate("/zar59")}>zar 59 sl</button>
                    </div>
                </div>
            </div>
            <div className={s.texto_gris}>
                {/* <div className={s.texto_cont}> */}
                <h3>BOTES DE GOMA</h3>
                <span>Diseñar un bote, el barco más versátil jamás inventado, es hoy ante todo una búsqueda de nuevos equilibrios. La ardua pero estimulante tarea del diseñador es conciliar infinitas variables, repensar y comparar, concebir y experimentar. No sólo se diseña el bote, sino también la forma de vivirlo y construirlo, inmersos en una mezcla de alta tecnología y refinada artesanía, brillantes intuiciones y rigurosa técnica, de esta filosofía nacen los Zars.
                    Unidos por un estilo inconfundible (la vida familiar), cada uno es el resultado de un proyecto independiente, de un equilibrio diferente entre los componentes para ofrecer el producto más eficiente en su segmento de mercado. Campeones de habitabilidad y polivalencia, el Dinghy  Zar están en la cima de las habilidades de navegación, comodidad y calidad de construcción.
                </span>
                <span>Al timón de una embarcación auxiliar Zar experimentas el sutil placer de poseer una embarcación absolutamente vanguardista. Sientes el placer de estar por delante…</span>
                {/* </div> */}
            </div>
          
        </div>
    )
}