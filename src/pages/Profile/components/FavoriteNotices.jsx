// Components
import Eyes from "../../../assets/Icons/profile_icons/eyes.svg"
import Share from "../../../assets/Icons/profile_icons/share.svg"
import {IoIosStar} from "react-icons/io"

const FavoriteNotices = ({title}) => {
  return (
    <div className='my_cards_profile'>
        <p>{title}</p>
        <ul>
            <li>
                <IoIosStar/>
            </li>
            <li>
                <img src={Eyes} alt="Visualizar" />
            </li>
            <li>
                <img src={Share} alt="compartilhar" />
            </li>
        </ul>
    </div>
  )
}

export default FavoriteNotices