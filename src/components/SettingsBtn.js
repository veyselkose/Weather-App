import React from "react";

function SettingsBtn({ values, name, icon, checked, setChecked }) {
  return (
    <label className="switch !w-full " htmlFor={name}>
      <input type="checkbox" id={name} checked={checked} onChange={() => setChecked(!checked)} />
      <span className="slider before:!w-1/2 dark:bg-black day-color settingsBtn-custom-before">
        <span className="z-10 w-2/4 flex justify-center items-center">
          {icon ? (
            <img className="h-7 w-7" src={require(`../icons/${values[1]}.svg`)} alt="light" />
          ) : (
            values[0]
          )}
        </span>
        <span className="w-2/4 flex justify-center items-center ml-auto z-10">
          {icon ? (
            <img className="h-7 w-7" src={require(`../icons/${values[0]}.svg`)} alt="dark" />
          ) : (
            values[1]
          )}
        </span>
      </span>
    </label>
  );
}

export default SettingsBtn;
