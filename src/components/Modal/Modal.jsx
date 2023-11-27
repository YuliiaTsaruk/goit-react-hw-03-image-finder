import Modal from 'react-modal';

const customStyles = {
  overlay: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1200,
  },
  content: {
    maxWidth: 'calc(100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
    position: 'relative',
    overflow: 'hidden',
    outline: 'none',
    border: 'none',
    background: 'none',
  },
};

Modal.setAppElement('#root');

export const ImgModal = ({ isOpen, onRequestClose, largeImage, tags }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Large image"
      shouldCloseOnOverlayClick={true}
    >
      <img src={largeImage} alt={tags} />
    </Modal>
  );
};
