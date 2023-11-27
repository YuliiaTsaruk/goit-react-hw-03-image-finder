import { ImgModal } from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { image, largeImage, tags } = this.props;
    const { isModalOpen } = this.state;

    return (
      <>
        <li onClick={this.toggleModal}>
          <img src={image} alt={tags} />
          {isModalOpen && (
            <ImgModal
              isOpen={isModalOpen}
              onRequestClose={this.toggleModal}
              largeImage={largeImage}
              tags={tags}
            />
          )}
        </li>
      </>
    );
  }
}
