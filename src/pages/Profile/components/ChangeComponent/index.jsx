import {useRef, useState} from 'react'
import styles from "./ChangeComponent.module.css"

const ChangeComponent = ({childToParent}) => {

    const myArticlesRef = useRef()
    const myNoticeRef = useRef()
    const favoriteNoticeRef = useRef()
    const favoriteArticleRef = useRef()

    const handleClick = (option) => {

        switch(option){
            case "MyArt":
                myArticlesRef.current.classList.add(`${styles.active}`)
                myNoticeRef.current.classList.remove(`${styles.active}`)
                favoriteNoticeRef.current.classList.remove(`${styles.active}`)
                favoriteArticleRef.current.classList.remove(`${styles.active}`)
            break
            case "MyNot":
                myArticlesRef.current.classList.remove(`${styles.active}`)
                myNoticeRef.current.classList.add(`${styles.active}`)
                favoriteNoticeRef.current.classList.remove(`${styles.active}`)
                favoriteArticleRef.current.classList.remove(`${styles.active}`)
            break
            case "FavNot":
                myArticlesRef.current.classList.remove(`${styles.active}`)
                myNoticeRef.current.classList.remove(`${styles.active}`)
                favoriteNoticeRef.current.classList.add(`${styles.active}`)
                favoriteArticleRef.current.classList.remove(`${styles.active}`)
            break
            case "FavArt":
                myArticlesRef.current.classList.remove(`${styles.active}`)
                myNoticeRef.current.classList.remove(`${styles.active}`)
                favoriteNoticeRef.current.classList.remove(`${styles.active}`)
                favoriteArticleRef.current.classList.add(`${styles.active}`)
            break
        }

        childToParent(option)
    }

  return (
    <ul className={styles.list}>
        <li>
            <span
            ref={myArticlesRef}
            onClick={() => handleClick("MyArt")}
            className={styles.active}
            >
                Meus Artigos
            </span>
        </li>
        <li>
            <span
            ref={myNoticeRef}
            onClick={() => handleClick("MyNot")}
            >
                Meus Editais
            </span>
        </li>
        <li>
            <span
            ref={favoriteNoticeRef}
            onClick={() => handleClick("FavNot")}
            >
                Editais Favoritos
            </span>
        </li>
        <li>
            <span
            ref={favoriteArticleRef}
            onClick={() => handleClick("FavArt")}
            >
                Artigos Favoritos
            </span>
        </li>
    </ul>
  )
}

export default ChangeComponent