import { forwardRef } from 'react';
import styles from '../styles/Popup.module.css';

export const CharacterOptionsPopup = forwardRef((props, popupRef) => {
  const {
    characters,
    popup: { isOpen, style },
  } = props;
  return (
    <div className={styles.popup} style={style} ref={popupRef}>
      {isOpen &&
        characters.map(({ image, name }) => (
          /* using the character's name as key because I know it is going to be different and there are very few characters */
          <div key={name} className={styles.characterOptionsContainer}>
            <img src={image} />
            <p>{name.toUpperCase()}</p>
          </div>
        ))}
    </div>
  );
});
