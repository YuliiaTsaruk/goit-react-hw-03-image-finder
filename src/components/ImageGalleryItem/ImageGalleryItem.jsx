import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    modalIsOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ modalIsOpen: !prevState.modalIsOpen }));
  };

  render() {
    // const { image, largeImage, tags } = this.props;
    // const { modalIsOpen } = this.state;

    return (
      <>
        <li onClick={this.toggleModal}>
          {/* <img src={image} alt={tags} /> */}
        </li>
      </>
    );
  }
}
