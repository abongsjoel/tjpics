import axios from "axios";

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID a8uvQCYxkIz1Mad1YUK6VgwPKTrGkyogYHD83jniePs",
    },
    params: {
      query: "cars",
    },
  });

  console.log({ response });
  return response;
};

export default searchImages;
