import ImageShow from "./ImageShow";

import "./ImageList.css";

function ImageList({ images }) {
  return (
    <div className="image-list">
      {images.map((image) => (
        <ImageShow key={image.id} image={image} />
      ))}
    </div>
  );
}

export default ImageList;
