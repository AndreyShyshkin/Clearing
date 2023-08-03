import "./style.css";

import switcherKitchenRoomsImg from "/src/assets/images/switcherRoomsImg.png";
import switcherRoomRoomsImg from "/src/assets/images/room.jpeg";
import switcherBathroomRoomsImg from "/src/assets/images/bathroom.jpeg";
import Polygon_1 from "/src/assets/images/Polygon 1.svg";
import plus from "/src/assets/images/plus.png";

import includedBlocks from "./includedBlocks";
import { useState } from "react";

function MainIncluded() {
  const [activeTab, setActiveTab] = useState("Кухня");

  return (
    <>
      <div className="included">
        <div className="container">
          <h2>Що входить в прибирання?</h2>
          {includedBlocks()}
          <div className="mainSwitcherRooms">
            <div
              className={
                activeTab === "Кухня"
                  ? "SwitcherRoom SwitcherRoomActive"
                  : "SwitcherRoom"
              }
              onClick={() => setActiveTab("Кухня")}
            >
              <a>Кухня</a>
            </div>
            <div
              className={
                activeTab === "Кімнати"
                  ? "SwitcherRoom SwitcherRoomActive"
                  : "SwitcherRoom"
              }
              onClick={() => setActiveTab("Кімнати")}
            >
              <a>Кімнати</a>
            </div>
            <div
              className={
                activeTab === "Санвузол"
                  ? "SwitcherRoom SwitcherRoomActive"
                  : "SwitcherRoom"
              }
              onClick={() => setActiveTab("Санвузол")}
            >
              <a>Санвузол</a>
            </div>
          </div>
          <div
            className={
              activeTab === "Кухня"
                ? "switcherRoomsImg KitchenRooms"
                : activeTab === "Кімнати"
                ? "switcherRoomsImg RoomRooms"
                : activeTab === "Санвузол"
                ? "switcherRoomsImg BathroomRooms"
                : "switcherRoomsImg"
            }
          >
            <div className="plusBloks">
              <img
                src={
                  activeTab === "Кухня"
                    ? switcherKitchenRoomsImg
                    : activeTab === "Кімнати"
                    ? switcherRoomRoomsImg
                    : activeTab === "Санвузол"
                    ? switcherBathroomRoomsImg
                    : "switcherRoomsImg"
                }
                alt="switcherRoomsImg"
              />
              <div className="plusBlockFloor">
                <div className="textPlusBlock">
                  <p>Миємо підлогу</p>
                  <img src={Polygon_1} alt="Polygon 1" />
                </div>
                <img src={plus} alt="plus" />
              </div>
              <div className="plusBlockTile">
                <div className="textPlusBlock">
                  <p>Протираємо плитку </p>
                  <img src={Polygon_1} alt="Polygon 1" />
                </div>
                <img src={plus} alt="plus" />
              </div>
              <div className="plusBlockStove">
                <img src={plus} alt="plus" />
                <div className="textPlusBlock">
                  <img src={Polygon_1} alt="Polygon 1" />
                  <p>Миємо раковину та плиту</p>
                </div>
              </div>
              <div className="plusBlockEquipment">
                <div className="textPlusBlock">
                  <p>Миємо техніку</p>
                  <img src={Polygon_1} alt="Polygon 1" />
                </div>
                <img src={plus} alt="plus" />
              </div>
              <div className="plusBlockWindowsills">
                <div className="textPlusBlock">
                  <p>
                    Протираємо підвіконня, батареї, плінтуси, двері та вимикачі!
                  </p>
                  <img src={Polygon_1} alt="Polygon 1" />
                </div>
                <img src={plus} alt="plus" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainIncluded;
