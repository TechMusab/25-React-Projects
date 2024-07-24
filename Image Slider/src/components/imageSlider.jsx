import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import Image from "./image";
export default function ImageSlider(props) {
  const [images, setimages] = useState([]);
  const [error, seterror] = useState(false);
  const [currentimage, setcurrentimage] = useState(0);
  async function FetchURL(url) {
    try {
      const reponse = await fetch(url);
      const data = await reponse.json();
      setimages(data);
    } catch (error) {
      console.log("Error fetching image");
      seterror(true);
    }
  }
  useEffect(() => {
    FetchURL(props.url);
  }, [props.url]);

  const movetoright = () => {
    if (currentimage < 9) {
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
      {error ? (
        <span className="Errormsg">
          {" "}
          An Error Occured while Fetching Images
        </span>
      ) : (
        <div className="container">
          <FaArrowLeft className="arrow-left" onClick={movetoleft} />
          {images.length > 0 &&
            images.map((image, index) => {
              return currentimage == index ? (
                <Image key={image.id} url={image.download_url}></Image>
              ) : null;
            })}
          <FaArrowRight className="arrow-right" onClick={movetoright} />
          <div className="circlecontainer">
            {images.map((_, index) => {
              return (
                <FaCircle
                  key={index}
                  className={currentimage == index ? "circle" : null}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
