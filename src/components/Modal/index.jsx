import React, { useEffect } from 'react';
import Portal from './Portal';
import { Overlay, Dialog } from './style';

function Modal({ children, open, onClose }) {
  useEffect(() => {
    function onEsc(event) {
      if (event.keyCode === 27) onClose();
    }

    window.addEventListener('keydown', onEsc);

    return () => {
      window.removeEventListener('keydown', onEsc);
    };
  }, [onClose]);

  if (!open) return null;

  const onOverlayClick = () => {
    onClose();
  };

  const onDialogClick = (event) => {
    event.stopPropagation(); // evita que a propagação do elemento pai caia sobre o filho (borbulhe)
  };

  return (
    <Portal>
      <Overlay onClick={onOverlayClick}>
        <Dialog onClick={onDialogClick}>{children}</Dialog>
      </Overlay>
    </Portal>
  );
}

export default Modal;
