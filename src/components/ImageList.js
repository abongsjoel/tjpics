import ImageShow from "./ImageShow";

function ImageList({ images }) {
  return (
    <div>
      {images.map((image) => (
        <ImageShow
          key={image.id}
          url={image.urls.raw}
          description={image.description}
        />
      ))}
    </div>
  );
}

export default ImageList;
