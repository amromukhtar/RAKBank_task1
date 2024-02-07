import { useState } from "react";
import Carousel from "../../components/shared/Carousel";
import type { Slide } from "../../@types/common";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios, { delayResponse: 500 });

mock.onPost("/api/data").reply(200, {
  status: "success",
});

const data = [
  { title: "How Was Your Week Overall?", option: null },
  { title: "How Was Your Day?", option: null },
  { title: "How Was The Interview?", option: null },
  { title: "How Was Your Holiday?", option: null },
  { title: "How Are You?", option: null },
];

function Home() {
  const [summary, setSummary] = useState(false);
  const [slides, setSlides] = useState<Slide[]>(data);

  const handleChange = (index: number, value: string) => {
    let slidesCopy = [...slides];
    slidesCopy[index].option = value;
    setSlides(slidesCopy);
  };

  const handleConfirm = () => {
    setSummary(true);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/data");
      if (response.data.status !== "success") return;
      setSummary(false);
      handleReset();
    } catch (err) {}
  };

  const handleReset = () => {
    let slidesCopy = slides.map((slide: Slide) => {
      slide.option = null;
      return slide;
    });
    setSlides(slidesCopy);
  };

  return (
    <div>
      <Carousel
        summary={summary}
        slides={slides}
        handleChange={handleChange}
        handleConfirm={handleConfirm}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Home;
