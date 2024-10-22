function ImageShow({ url, description }) {
  return (
    <div>
      <img src={url} alt={description} width={250} />
    </div>
  );
}

export default ImageShow;
