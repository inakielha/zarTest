import s from "./header.module.css";
import { HiOutlineArrowSmallLeft, HiOutlineArrowLeft, HiChevronLeft } from "react-icons/hi";
import { IconContext } from "react-icons";
import logo from "../../../../assets/logosar.svg"
import logo from "../../../../assets/zar/home/Asset 2.png"



export default function Header() {
  return (
    <div className={s.section}>
      <div className={s.contenedor}>
        <div className={s.back}>
          <IconContext.Provider value={{ className: s.icon, size: "1em" }}>
            <HiChevronLeft />
          </IconContext.Provider>

          <span>Home</span>
        </div>
        <div className={s.imgContainer}><img src={logo} alt="logo" /></div>
        <span>ss</span>
      </div>
    </div>
  );
}
