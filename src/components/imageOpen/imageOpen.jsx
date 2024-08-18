import s from "./image.module.css"
import { AiOutlineClose } from "react-icons/ai"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

export default function ImageOpen({ setImagen, imagen, imgArr }) {
    const closeDialog = (e) => {
        if (imagen.open) {
            setImagen({ ok: false, src: "" })
            console.log("entre")
        }
    }

    const handleNextSlide = () => {
        console.log(imagen)
          if (imagen.open) {
            if (imagen.index == 2) setImagen({ open: true, src:  imgArr[0], index: 0 })
            else setImagen({ open: true, src:  imgArr[1 + parseInt(imagen.index)], index: 1 + parseInt(imagen.index) })
          }
      };

      const handlePrevSlide = () => {
          if (imagen.open) {
            if (imagen.index == 0) setImagen({ open: true, src:  imgArr[2], index: 2 })
            else setImagen({ open: true, src:  imgArr[imagen.index - 1], index:imagen.index - 1  })
          }
      };

    return (
        // <div className={s.imgDialog} id="close" onClick={(e) => closeDialog(e)}>
        <div className={s.imgDialog} >
            <div className={s.flechaCont} ><IoIosArrowBack onClick={()=>handlePrevSlide()} className={s.flecha} color="#fff" /></div>
            <div className={s.imgfoto}>
                <div className={s.imgContainer}>
                    <img src={ imagen.src} alt="" />
                </div>
                <div className={s.close}>
                    <AiOutlineClose id="close" onClick={(e) => closeDialog(e)} className={s.icon} color="#fff" />
                </div>
            </div>
            <div className={s.flechaContDer} ><IoIosArrowForward onClick={()=>handleNextSlide()} className={s.flecha} color="#fff" /></div>

        </div>
    )
}