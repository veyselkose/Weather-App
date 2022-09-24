import React from "react";
import SettingsBtn from "./SettingsBtn";
import { useMainContext } from "../context/MainContext";
import GithubProfileBtn from "./GithubProfileBtn";
function Settings({ settingsModal, setSettingsModal }) {
  const { lang, setLang, tempType, setTempType, theme, setTheme } = useMainContext();
  return (
    <nav
      className="settingsNavMobile fixed flex flex-col p-4 gap-4 bg-white xl:shadow-2xl z-50 rounded-24 top-16 right-4 w-80 dark:bg-zinc-800 duration-300 dark:shadow-white extra-shadow"
      style={{
        transform: `translateY(${settingsModal}%)`,
        "--tw-shadow-colored": " 0 0px 50px -12px",
      }}
    >
      <button
        className="w-full mt-1 bg-red-400 text-white h-12 z-50 rounded-full top"
        onClick={() => {
          setSettingsModal(settingsModal === -200 ? 0 : -200);
          document.body.style.overflow = "unset";
        }}
      >
        {lang ? "Geri" : "Back"}
      </button>
      <SettingsBtn
        checked={theme}
        setChecked={setTheme}
        name="theme"
        icon
        values={["01n", "01d"]}
      />
      <SettingsBtn checked={lang} setChecked={setLang} name="lang" values={["EN", "TR"]} />
      <SettingsBtn checked={tempType} setChecked={setTempType} name="temp" values={["°C", "°F"]} />
      <GithubProfileBtn className={"xl:hidden dark:bg-black dark:text-white mb-2 !w-full"} />
    </nav>
  );
}

export default Settings;
