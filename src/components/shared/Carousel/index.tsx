import { useState } from "react";
import classNames from "classnames";
import type { Slide } from "../../../@types/common";
import Button from "../Button";

const SlideDots = ({
  len,
  onChange,
}: {
  len: number;
  onChange: (index: number) => void;
}) => {
  const [selected, setSelected] = useState(0);
  let array = new Array(len).fill(0);

  const handleChange = (index: number) => {
    setSelected(index);
    onChange(index);
  };

  return (
    <div className={`absolute top-[35%] left-[5%]`}>
      {array.map((_, index: number) => (
        <div
          onClick={() => handleChange(index)}
          className={classNames(
            "h-7 w-7 rounded-2xl mb-5",
            index == selected ? "border-2" : "bg-white"
          )}
        />
      ))}
    </div>
  );
};

const Carousel = ({
  slides,
  handleSubmit,
  handleConfirm,
  handleChange,
  summary,
}: {
  slides: Slide[];
  handleChange: (index: number, option: string) => void;
  handleConfirm: () => void;
  handleSubmit: () => void;
  summary: boolean;
}) => {
  const [index, setIndex] = useState(0);

  const handleSlider = (value: number) => {
    setIndex(value);
  };

  const handleOption = (value: string) => {
    handleChange(index, value);
  };

  return (
    <div>
      {summary ? (
        <div
          className="flex flex-col items-center justify-center h-screen animate-fade-in"
          style={{ backgroundColor: "#6b52fe" }}
        >
          {slides.map((element: Slide) => (
            <div className="mt-5">
              <strong className="text-4xl text-white">
                {element.title}{" "}
                <span className="text-gray-300">{element.option}</span>
              </strong>
            </div>
          ))}
          <Button className="mt-10" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-2 h-screen">
          <div style={{ backgroundColor: "#6b52fe" }}>
            <div className="h-screen overflow-hidden relative">
              <SlideDots len={slides.length} onChange={handleSlider} />
              <div
                className="absolute left-[15%] text-white text-6xl transition-transform ease-out duration-500"
                style={{
                  transform: `translateY(-${index * window.innerHeight}px)`,
                }}
              >
                {slides.map((element: Slide) => (
                  <div
                    className={`flex items-center`}
                    style={{ height: window.innerHeight }}
                  >
                    <strong>{element.title}</strong>
                  </div>
                ))}
              </div>
              <div className={`absolute top-[90%] left-[75%]`}>
                <Button onClick={handleConfirm}>Confirm</Button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-20">
            <div
              className="relative group"
              onClick={() => handleOption("like")}
            >
              <span className="text-8xl" role="img" aria-label="smile emoji">
                👍
              </span>
              <div
                className={`absolute top-100 text-center mt-4 left-0 w-full h-full  opacity-0 group-hover:opacity-100  ${
                  slides[index].option === "like" ? "opacity-100" : ""
                } transition-opacity duration-300`}
              >
                <strong className="text-2xl text-gray-500">Like</strong>
              </div>
            </div>
            <div
              className="relative group"
              onClick={() => handleOption("think")}
            >
              <span className="text-8xl" role="img" aria-label="smile emoji">
                🤔
              </span>
              <div
                className={`absolute top-100 text-center mt-4 left-0 w-full h-full  opacity-0 group-hover:opacity-100  ${
                  slides[index].option === "think" ? "opacity-100" : ""
                } transition-opacity duration-300`}
              >
                <strong className="text-2xl text-gray-500">Think</strong>
              </div>
            </div>
            <div
              className="relative group"
              onClick={() => handleOption("dislike")}
            >
              <span className="text-8xl" role="img" aria-label="smile emoji">
                👎
              </span>
              <div
                className={`absolute top-100 text-center mt-4 left-0 w-full h-full  opacity-0 group-hover:opacity-100  ${
                  slides[index].option === "dislike" ? "opacity-100" : ""
                } transition-opacity duration-300`}
              >
                <strong className="text-2xl text-gray-500">Dislike</strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
