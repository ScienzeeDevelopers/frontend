import styles from './ChangeComponent.module.css'

// Hooks
import { useRef, useState } from 'react'

const ChangeComponent = ({childToParent}) => {
  const myArt = useRef()
  const favArt = useRef()

  const handleClick = (option) => {
    switch(option){
      case "myArt":
        myArt.current.classList.add(`${styles.active}`)
        favArt.current.classList.remove(`${styles.active}`)
      break
      case "favArt":
        myArt.current.classList.remove(`${styles.active}`)
        favArt.current.classList.add(`${styles.active}`)
      break
    }
    childToParent(option)
  }

  return (
    <ul className={styles.container_change}>
      <li>
        <h2 
          ref={myArt}
          onClick={() => handleClick("myArt")}
        >
          Meus Artigos
        </h2>
      </li>
      <li>
        <h2
          ref={favArt}
          onClick={() => handleClick("favArt")}
          className={styles.active}
        >
            Artigos Favoritos
        </h2>
      </li>
    </ul>
  )
}

export default ChangeComponent
