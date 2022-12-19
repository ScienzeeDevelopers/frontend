import { NavLink } from "react-router-dom"

import "./Notices.css"

//components
import CardContainer from './components/CardContainer'
import Image from "../../assets/imagens/Notice02.svg"
import DesktopFillter from './components/DesktopFillter'
import MobileFiltter from './components/MobileFiltter'
import NavigatePage from "../../components/NavigateToNotice/NavigatePage"


const Pre_Bidding = () => {

  return (
    <div className="container">

        <NavigatePage/>
        <div className="main">
            <DesktopFillter />
            <MobileFiltter />
            <div className="notice_container">
                <CardContainer Image={Image} />
                <CardContainer Image={Image} />
                <CardContainer Image={Image} />
                <CardContainer Image={Image} />
                <CardContainer Image={Image} />
                <CardContainer Image={Image} />
                <CardContainer Image={Image} />
                <CardContainer Image={Image} />
                <div className="container_btn">
                    <button className="btn_traditional">Ver mais</button>
                </div>
            </div>
        </div>

    </div>
  );
}

export default Pre_Bidding