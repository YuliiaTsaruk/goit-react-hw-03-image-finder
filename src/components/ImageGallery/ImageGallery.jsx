import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ items }) => {
  return (
    <ul>
      {items.map(item => {
        const { id, webformatURL, largeImageURL, tags } = item;
        return (
          <ImageGalleryItem
            image={webformatURL}
            largeImage={largeImageURL}
            tags={tags}
            key={id}
          ></ImageGalleryItem>
        );
      })}
    </ul>
  );
};
