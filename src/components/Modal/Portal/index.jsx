import ReactDOM from 'react-dom';

function PortalModal({ children }) {
  const portal = document.getElementById('modal-root');

  return ReactDOM.createPortal(children, portal);
}

export default PortalModal;
