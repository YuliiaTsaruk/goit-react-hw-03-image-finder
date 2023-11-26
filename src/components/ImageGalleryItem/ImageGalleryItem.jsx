import { ImgModal } from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ modalIsOpen: !prevState.isModalOpen }));
  };

  render() {
    const { image, largeImage, tags } = this.props;
    const { isModalOpen } = this.state;

    return (
      <>
        <li onClick={this.toggleModal}>
          <img src={image} alt={tags} />
        </li>
        {isModalOpen && (
          <ImgModal
            isOpen={isModalOpen}
            onClose={this.toggleModal}
            largeImage={largeImage}
            tags={tags}
          />
        )}
      </>
    );
  }
}
