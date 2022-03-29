import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GiftGrid = ({ category }) => {
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   getGifs(category).then((imgs) => setImages(imgs));
  // }, [category]);

  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__bounce">{category}</h3>
      {loading ? (
        <p className="animate__animated animate__flash">Loading...</p>
      ) : null}
      <div className="card-grid">
        {data.map((data) => (
          <GifGridItem key={data.id} {...data} />
        ))}
      </div>
    </>
  );
};
