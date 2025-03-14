import React from "react";
import { useContext } from "react";

import avatar from "../../images/avatar.png";
import "./SideBar.css";
import CurrentUserContext from "../../Contexts/CurrentUserContext";

function SideBar({ editProfileClick, logout }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__user-info">
        <img
          className="sidebar__avatar"
          src={currentUser.avatar || avatar}
          alt="side bar Avatar"
        />
        <p className="sidebar__username">{currentUser.name}</p>
      </div>
      <div className="sidebar__button">
        <button className="sidebar__edit-button" onClick={editProfileClick}>
          Change profile data
        </button>
        <button
          onClick={logout}
          type="button"
          className="sidebar__logout-button"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
export default SideBar;
