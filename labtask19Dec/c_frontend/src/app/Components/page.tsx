"use client";
import Image from "next/image";
import "./sidebar.css";
import Link from "next/link";
import Welcome from "../welcome/page";
import { useState } from "react";
import Server from "../server/page";

const Sidebar: React.FC = () => {
    const [showServer, setShowServer] = useState(false);
  
    const handleServerClick = () => {
        setShowServer((prevShowServer) => !prevShowServer);
      };
  return (
    <>
      <div className="sidebar">
        <div className="logo-container">
          <Image
            src="/communify.svg"
            alt="communify"
            className="sidebar-logo"
            width="73"
            height="73"
          />
          <h4 className="communify-text">Communify</h4>
        </div>
        <br />
        <br />
        <input type="text" placeholder="Search" className="sidebar-search" />
        <div className="sidebar-menu">
          <div className="messages-container">
            <Image
              src="/messages.svg"
              alt="messages"
              className="messages-logo"
              width="43"
              height="43"
            />
            <label className="messages">Messages</label>
          </div>
          <div className={`servers-container ${showServer ? "withServerContainer" : ""}`} onClick={handleServerClick}>
            <Image
              src="/cahnnels.svg"
              alt="cahnnels"
              className="cahnnels-logo"
              width="43"
              height="43"
            />
            <label className="servers">Servers</label>
          </div>
          {showServer && <Server />}
          <div className="notifications-container">
            <Image
              src="/notifications.svg"
              alt="notifications"
              className="notifications-logo"
              width="43"
              height="43"
            />
            <label className="notifications">Notifications</label>
          </div>
          <div className="friends-container">
            <Image
              src="/friends.svg"
              alt="friends"
              className="friends-logo"
              width="43"
              height="43"
            />
            <label className="friends">Friends</label>
          </div>
          <div className="profile-container">
            <Image
              src="/profile.svg"
              alt="profile"
              className="profile-logo"
              width="43"
              height="43"
            />
            <label className="profile">Profile</label>
          </div>
          <div className="settings-container">
            <Image
              src="/settings.svg"
              alt="settings"
              className="settings-logo"
              width="43"
              height="43"
            />
            <label className="settings">Settings</label>
          </div>
        </div>
        <Link className="signout" href="/welcome">
          SignOut
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
