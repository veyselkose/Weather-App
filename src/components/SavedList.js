import React, { useState } from "react";
import SavedWeather from "./SavedWeather";
import { Icon } from "@iconify/react";
import { useMainContext } from "../context/MainContext";
import { useSavedWeatherContent } from "../hooks/useWeather";
function SavedList({ savedModal, setSavedModal }) {
  const { lang, savedList, savedWeatherContent } = useMainContext();
  const [scrollIndex, setscrollIndex] = useState(0);
  const [scrollValue, setscrollValue] = useState(0);

  useSavedWeatherContent();
  return (
    <div
      className="duration-300 xl:duration-150 xl:!translate-x-0 bg-white dark:bg-zinc-800 xl:dark:bg-black extra-shadow fixed xl:static top-4 left-4 right-4 bottom-4 xl:rounded-none rounded-24 z-30 flex justify-center xl:items-center xl:h-full"
      style={{ transform: `translateX(${savedModal}%)` }}
    >
      <button
        className="xl:hidden fixed right-5 top-5 left-5 bg-red-400 text-white h-12 z-50 rounded-full"
        id="savedSliderPrevious"
        title="savedSliderPrevious"
        onClick={() => {
          setSavedModal(savedModal === 200 ? 0 : 200);
          document.body.style.overflow = "unset";
        }}
      >
        {lang ? "Geri" : "Back"}
      </button>
      {scrollIndex > 0 && (
        <button
          className="hidden xl:flex h-5 w-5 mr-5 rounded-full shrink-0 bg-slate-300 items-center justify-center"
          onClick={() => {
            setscrollValue(scrollValue - 13);
            setscrollIndex(scrollIndex - 1);
          }}
        >
          <Icon icon="bytesize:chevron-left" width="12" height="12" />
        </button>
      )}
      <div className="hide-scrollbar pt-16 xl:pt-0 mx-5 xl:mx-0 xl:mt-0 flex-col xl:flex-row w-[26rem] flex xl:h-full overflow-auto xl:overflow-hidden xl:left-11">
        {savedWeatherContent.length > 0 ? (
          savedWeatherContent
            .sort(function (a, b) {
              return a[3] - b[3];
            })
            .map((item) => (
              <SavedWeather
                scroll={scrollValue}
                city={item[0]}
                icon={item[2]}
                key={item[3]}
                temp={item[1]}
              />
            ))
        ) : (
          <h2 className="h-full flex justify-center items-center font-light text-gray-400">
            {lang ? "Kaydedilenler Boş" : "Saved is empty"}
          </h2>
        )}
      </div>
      {scrollIndex >= 0 && scrollIndex < savedList.length - 2 && (
        <button
          className="hidden xl:flex h-5 w-5 ml-5 shrink-0 rounded-full bg-slate-300 items-center justify-center"
          id="savedSliderNext"
          title="savedSliderNext"
          onClick={() => {
            setscrollValue(scrollValue + 13);
            setscrollIndex(scrollIndex + 1);
          }}
        >
          <Icon icon="bytesize:chevron-right" width="12" height="12" />
        </button>
      )}
    </div>
  );
}

export default SavedList;
