import whatsapp from "../../assets/footer/whatsapp.svg"
import { pathImages } from "../../pathImages";
import s from "./Footer.module.css"
import {BsCurrencyDollar,BsLinkedin,BsInstagram, BsYoutube} from "react-icons/bs"

export default function Footer({color}) {
  return (
    <footer id={s.contacto}>
      <div className={s.footerContainer}>
        <div className={s.info}>
          <p className={s.text} style={color ? {color:color} : {color:"#DF0404"}}>EXPOSICIÓN, VENTAS Y SHOWROOM</p>
          <p>Av. del Libertador 701, Vicente López, Buenos Aires</p>
          <p>info@navalmotor.com</p>
          <div className={s.numero}>
            {/* <div className={s.wspContainer}>
              <img src={pathImages+ whatsapp} alt="contact" />
            </div> */}
            <span>011 4796 1888</span>
          </div>
        </div>
        <div className={s.redes}>
          <p className={s.follow}>FOLLOW US</p>
          <div className={s.redesContainer}>
            <div>
              <a
                target="_blank"
                href= {pathImages ? "https://www.instagram.com/naval_motor" : "https://www.instagram.com/naval_motor"}
              >
                <BsInstagram size={"2.5em"} color={"#707070"} />
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/channel/UCT1SJPaMSOsG1_3H0tflf0A"
                target="_blank"
              >
                <BsYoutube size={"2.5em"} color={"#707070"}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
