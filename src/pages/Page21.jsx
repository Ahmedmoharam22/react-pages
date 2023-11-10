import React from "react";
import image1 from "../media/images.png";
function Page21() {
  return (
    <>
      <main className="mainOverlay">
        <div className="overlay">
          <div className="container">
            <div className="text py-4">
              <h6>Profile</h6>
              <p>6th june 2023</p>
            </div>
            <div className="profile d-flex justify-content-between align-items-center">
              <div className="profile-text d-flex justify-content-between align-items-center">
                <img src={image1} alt="" />
                <div>
                  <h2>Balqees hamdi Saber</h2>
                  <span>computer science,mansoura univercity</span>
                </div>
              </div>
              <button className="btn btn-primary">Edit Profile</button>
            </div>
            <div className="row ">
              <div className="col-md-3 py-4">
                <div className="wrapper  d-flex flex-column">
                  <div className="users d-flex flex-column">
                    <h5 className="user-title">Personal Info</h5>
                    <div className="d-flex justify-content-between">
                      <h6>Student iD</h6>
                      <h6>12346 </h6>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <h6>Age </h6>
                      <h6>21yo </h6>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <h6>Country </h6>
                      <h6>Egypt </h6>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <h6>Nationality </h6>
                      <h6>Egyption </h6>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <h6>City </h6>
                      <h6>Cairo </h6>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <h6>Score </h6>
                      <h6>222 </h6>
                    </div>
                  </div>
                  <div className="users d-flex flex-column">
                    <h5 className="user-title mt-3">Education</h5>
                    <h6>Univercity</h6>
                    <p>lorempsum dolor sit amet, consectetur adipisicing</p>
                    <h6>Major</h6>
                    <p>lorempsum dolor sit amet, consectetur adipisicing</p>
                  </div>
                  <div className="users d-flex flex-column">
                    <h5 className="user-title">Contact Info</h5>
                    <a href="/">Email : ahmed@gmail.com</a>
                    <a href="/">Mobile Number : 0103598456</a>
                  </div>
                </div>
              </div>
              <div className="col-md-9 my-4">
                <div className="about">
                  <h4>About</h4>
                  <p>
                    elit. Aut, quisquam esse? Quam, nulla. Quaerat saepe alias
                    voluptatibus libero repudiandae obcaecati, numquam sed
                    maiores iste totam tempora aliquid
                  </p>
                </div>
                <h5 className="mt-5 mb-4 text-white">in Progress</h5>
                <div className="language-box d-flex justify-content-between align-items-center">
                  <div className="text-box">
                    <h4>introduction to react js</h4>
                    <span style={{ color: " #BF9B30" }}>instructor:</span>
                    Mohamed Nour
                  </div>
                  <p className="fs-3">LEV.1</p>
                </div>
                <div className="language-box d-flex justify-content-between align-items-center">
                  <div className="text-box">
                    <h4>introduction to react js</h4>
                    <span style={{ color: " #BF9B30" }}>instructor:</span>
                    Mohamed Nour
                  </div>
                  <p className="fs-3">LEV.1</p>
                </div>
                <h5 className="mt-5 mb-4 text-white">Previus</h5>
                <div className="language-box d-flex justify-content-between align-items-center">
                  <div className="text-box">
                    <h4>introduction to react js</h4>
                    <span style={{ color: " #BF9B30" }}>instructor:</span>
                    Sara Ahmed
                  </div>
                  <p className="fs-3">LEV.1</p>
                </div>
                <div className="language-box d-flex justify-content-between align-items-center">
                  <div className="text-box">
                    <h4>introduction to react js</h4>
                    <span style={{ color: " #BF9B30" }}>instructor:</span>
                    Mohamed Nour
                  </div>
                  <p className="fs-3">LEV.1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Page21;
