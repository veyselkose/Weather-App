import React from "react";
import { useState } from "react";
import Search from "./Search";
import { Icon } from "@iconify/react";
import Settings from "./Settings";
import SavedList from "./SavedList";
import GithubProfileBtn from "./GithubProfileBtn";
function Header() {
  const [savedModal, setSavedModal] = useState(200);
  const [settingsModal, setSettingsModal] = useState(-200);
  return (
    <header className="bg-white dark:bg-black h-14 duration-150 ">
      <div className="mx-auto px-4 h-full flex items-center ">
        <Search />
        <SavedList savedModal={savedModal} setSavedModal={setSavedModal} />

        <button
          className=" headerButtons ml-auto hover:rotate-180"
          id="settingsModalToggle"
          title="settingsModalToggle"
          onClick={() => {
            setSettingsModal(settingsModal === -200 ? 0 : -200);
            document.body.style.overflow = "hidden";
          }}
        >
          <Icon icon="flat-color-icons:settings" width="24" height="24" />
        </button>

        <Settings settingsModal={settingsModal} setSettingsModal={setSettingsModal} />
        <GithubProfileBtn className={"!hidden xl:!flex  ml-4"} />
        <button
          className="headerButtons ml-5 xl:hidden day-color"
          id="savedModalToggle"
          title="savedModalToggle"
          onClick={() => {
            setSavedModal(savedModal === 200 ? 0 : 200);
            document.body.style.overflow = "hidden";
          }}
        >
          <Icon icon="bi:bookmark-fill" width="22" height="22" />
        </button>
      </div>
    </header>
  );
}

export default Header;
