import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { DiCodeigniter } from "react-icons/di";
import { HiAcademicCap } from "react-icons/hi2";
import Card from "../Card/CardView";
import "./DashBoard.css";
import { useSelector } from "react-redux";
import userImage from '../Assets/user-image.png'

const DashView = () => {
  const { selectedData, user } = useSelector(
    (state) => state.pickupDataReducer
  );

  return (
    selectedData && (
      <div className="dashboardContainer" style={{ justifyContent: "space-around" }}>
        {selectedData.map((elem, index) => {
          return (
            <>
              <div key={index} className="dashboardCardContainer">
                <div className="dashCardHeading flex-sb">
                  <div className="leftView">
                    {!user ? (
                      <HiAcademicCap />
                    ) : (
                      <>
                        <div
                          className="imageContainer relative"
                          style={{ width: "20px", height: "20px", display : 'inline-block' }}
                        >
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "70%",
                            }}
                            src={userImage}
                            alt="UserImage"
                          />
                        </div>
                      </>
                    )}
                    <span>
                      {" "}
                      {elem[index]?.title} {elem[index]?.value?.length}
                    </span>
                  </div>
                  <div className="rightView">
                    <AiOutlinePlus />{" "}
                    <span style={{ letterSpacing: "6px" }}>...</span>
                  </div>
                </div>
                <div className="dashList flex-gap-10">
                  {elem[index]?.value?.map((elem, ind) => {
                    return (
                      <Card id={elem.id} title={elem.title} tag={elem.tag} />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default DashView;
