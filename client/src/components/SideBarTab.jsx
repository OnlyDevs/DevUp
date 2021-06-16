import React from "react";

function SideBarTab({ tabName, description, onClick }) {
  return (
    <div className="grow" onClick={onClick}>
      <h2>{tabName}</h2>

      <div style={{ marginTop: "5px", fontSize: "1.4rem" }}>{description}</div>
    </div>
  );
}

export default SideBarTab;
