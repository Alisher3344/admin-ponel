import React from "react";

const First = () => {
  return (
    <div className="First_div">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "40px",
        }}
      >
        <h2 className="h2InFirst">Overview</h2>
        <div className="button_first">
          <button style={{ color: "rgba(157, 173, 185, 1)" }}>...</button>
          <button
            style={{
              color: "rgba(255, 255, 255, 1)",
              backgroundColor: "rgba(16, 205, 69, 1)",
            }}
          >
            Add
          </button>
        </div>
      </div>
      <div className="table">
        <div className="thead">
          <p className="pInTable">Owner</p>
          <p className="pInTable">End date</p>
          <p className="pInTable">Profits</p>
          <p className="pInTable">Losses</p>
          <p className="pInTable">Phone</p>
        </div>
        <div className="div_f">
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <img src="user1.svg" alt="" />
            <h5 className="pInTable">Savannah Nguyen</h5>
          </div>
          <p className="pInTable">1/15/12</p>
          <p className="pls">$328.85</p>
          <p className="mns">$779.58</p>
          <p className="pInTable">(603) 555-0123</p>
        </div>
        <div className="div_f">
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <img src="user2.svg" alt="" />
            <h5 className="pInTable">Savannah Nguyen</h5>
          </div>
          <p className="pInTable">8/30/14 </p>
          <p className="pls">$328.85</p>
          <p className="mns">$779.58</p>
          <p className="pInTable">(603) 555-0123</p>
        </div>
        <div className="div_f">
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <img src="user3.svg" alt="" />
            <h5 className="pInTable">Savannah Nguyen</h5>
          </div>
          <p className="pInTable">5/30/14</p>
          <p className="pls">$328.85</p>
          <p className="mns">$779.58</p>
          <p className="pInTable">(603) 555-0123</p>
        </div>
        <div className="div_f">
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <img src="user4.svg" alt="" />
            <h5 className="pInTable">Savannah Nguyen</h5>
          </div>
          <p className="pInTable">11/7/16</p>
          <p className="pls">$328.85</p>
          <p className="mns">$779.58</p>
          <p className="pInTable">(603) 555-0123</p>
        </div>
        <div className="div_f">
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <img src="user5.svg" alt="" />
            <h5 className="pInTable">Savannah Nguyen</h5>
          </div>
          <p className="pInTable">7/27/13</p>
          <p className="pls">$328.85</p>
          <p className="mns">$779.58</p>
          <p className="pInTable">(603) 555-0123</p>
        </div>
        <div className="div_f">
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <img src="user6.svg" alt="" />
            <h5 className="pInTable">Savannah Nguyen</h5>
          </div>
          <p className="pInTable">5/19/12</p>
          <p className="pls">$328.85</p>
          <p className="mns">$779.58</p>
          <p className="pInTable">(603) 555-0123</p>
        </div>
        <div className="div_f">
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <img src="user7.svg" alt="" />
            <h5 className="pInTable">Savannah Nguyen</h5>
          </div>
          <p className="pInTable">8/21/15</p>
          <p className="pls">$328.85</p>
          <p className="mns">$779.58</p>
          <p className="pInTable">(603) 555-0123</p>
        </div>
        <div className="div_f">
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <img src="user8.svg" alt="" />
            <h5 className="pInTable">Savannah Nguyen</h5>
          </div>
          <p className="pInTable">5/27/15</p>
          <p className="pls">$328.85</p>
          <p className="mns">$779.58</p>
          <p className="pInTable">(603) 555-0123</p>
        </div>
        <div className="div_f">
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <img src="user9.svg" alt="" />
            <h5 className="pInTable">Savannah Nguyen</h5>
          </div>
          <p className="pInTable">3/4/16</p>
          <p className="pls">$328.85</p>
          <p className="mns">$779.58</p>
          <p className="pInTable">(603) 555-0123</p>
        </div>
        <div className="div_f">
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <img src="user10.svg" alt="" />
            <h5 className="pInTable">Savannah Nguyen</h5>
          </div>
          <p className="pInTable">1/15/12</p>
          <p className="pls">$328.85</p>
          <p className="mns">$779.58</p>
          <p className="pInTable">(603) 555-0123</p>
        </div>
      </div>
    </div>
  );
};

export default First;
