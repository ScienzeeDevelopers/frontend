//Components
import Delete from "../../../assets/Icons/profile_icons/delete.svg"
import Eyes from "../../../assets/Icons/profile_icons/eyes.svg"
import Share from "../../../assets/Icons/profile_icons/share.svg"

const MyArticles = ({title}) => {
  return (
    <div className='my_cards_profile'>
        <p>{title}</p>
        <ul>
            <li>
                <img src={Delete} alt="deletar" />
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

export default MyArticles