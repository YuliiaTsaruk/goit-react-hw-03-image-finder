export const ImageGalleryItem = ({ image, largeImage, tags }) => {
  return (
    <li>
      <img src={image} alt={tags} />
    </li>
  );
};
