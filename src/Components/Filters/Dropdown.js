import React from "react";

const Dropdown = props => {
  const titleArr = props.title;
  return (
    <div className="select_container">
      <div className="select_icon">
        {props.icon}
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
          <path d="M14.83 16.42L24 25.59l9.17-9.17L36 19.25l-12 12-12-12z" />
        </svg>
      </div>
      <label htmlFor="recruitnemt-filter" style={{ position: "absolute", left: "-500%" }}>
        Recruitnemt filter
      </label>
      <select
        id="recruitnemt-filter"
        className="select"
        onChange={e => props.handleChange(event.target.value)}
      >
        {titleArr.map((item, key) => {
          return (
            <option value={item.value} key={key}>
              {item.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
