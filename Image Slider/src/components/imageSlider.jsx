import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import Image from "./image";
export default function ImageSlider(props) {
  const [images, setimages] = useState([]);
  const [error, seterror] = useState(false);
  const [loader, setloader] = useState(false);
  const [currentimage, setcurrentimage] = useState(0);
  useEffect(() => {
    FetchURL(props.url);
  }, [props.url]);

  if (loader) {
    return <span>Loading...</span>;
  }

  if (error) {
    return (
      <span className="Errormsg">An Error Occurred while Fetching Images</span>
    );
  }
  async function FetchURL(url) {
    setloader(true);
    try {
      const reponse = await fetch(url);
      const data = await reponse.json();
      setloader(false);
      setimages(data);
    } catch (error) {
      console.log("Error fetching image");
      seterror(true);
      setloader(false);
    }
  }

  const movetoright = () => {
    if (currentimage < images.length - 1) {
      setcurrentimage((previmage) => previmage + 1);
    } else {
      setcurrentimage(0);
    }
  };
  const movetoleft = () => {
    if (currentimage > 0) {
      setcurrentimage((previmage) => previmage - 1);
    } else {
      setcurrentimage(0);
    }
  };

  return (
    <>
      {
        <div className="container">
          <FaArrowLeft className="arrow-left" onClick={movetoleft} />
          {images.length > 0 &&
            images.map((image, index) =>
              currentimage === index ? (
                <Image key={image.id} url={image.download_url} />
              ) : null
            )}
          <FaArrowRight className="arrow-right" onClick={movetoright} />
          <div className="circlecontainer">
            {images.map((_, index) => (
              <FaCircle
                key={index}
                className={currentimage === index ? "circle" : null}
              />
            ))}
          </div>
        </div>
      }
    </>
  );
}
/*
How React State Updates Work
Asynchronous State Updates: When you call setLoader(true), React schedules an update to the state. The component re-renders, but this re-rendering happens asynchronously. That means the state change is not instant; React needs time to process and apply the update.

Effect of State Updates: Because state updates are asynchronous, the code following setLoader(true) in the same function will still execute immediately, even though React will eventually trigger a re-render with the updated state.
 */