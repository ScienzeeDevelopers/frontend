import styles from "./Message.module.css";

// Component
import { MdNotificationImportant } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

// hooks
import { useState } from "react";

const Message = ({active, handleClose}) => {

  return (
    <>
      {active && (
        <div className={styles.container_msg}>
          <div className={styles.close}>
            <AiOutlineClose onClick={handleClose}/>
          </div>
          <ul className={styles.notification}>
            <li>
              <MdNotificationImportant />
              <p>Um Edital que você está seguindo já está aberto.</p>
            </li>
            <li>
              <MdNotificationImportant />
              <p>Um Edital que você está seguindo já está aberto.</p>
            </li>
            <li>
              <MdNotificationImportant />
              <p>Um Edital que você está seguindo já está aberto.</p>
            </li>
            <li>
              <MdNotificationImportant />
              <p>Um Edital que você está seguindo já está aberto.</p>
            </li>
            <li>
              <MdNotificationImportant />
              <p>Um Edital que você está seguindo já está aberto.</p>
            </li>
            <li>
              <MdNotificationImportant />
              <p>Um Edital que você está seguindo já está aberto.</p>
            </li>
            <li>
              <MdNotificationImportant />
              <p>Um Edital que você está seguindo já está aberto.</p>
            </li>
            <li>
              <MdNotificationImportant />
              <p>Um Edital que você está seguindo já está aberto.</p>
            </li>
            <li>
              <MdNotificationImportant />
              <p>Um Edital que você está seguindo já está aberto.</p>
            </li>
            <li>
              <MdNotificationImportant />
              <p>Um Edital que você está seguindo já está aberto.</p>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Message;
