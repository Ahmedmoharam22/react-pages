import React from "react";
import image1 from "../media/images.png";
function Page20() {
  return (
    <>
      <main className="mainOverlay">
        <div className="overlay">
          <div className="container">
            <div className=" py-5">
              <div className="form-row d-flex justify-content-between align-items-center">
                <div className="form-group ">
                  <h2
                    className="d-inline text-uppercase fon"
                    style={{ color: "white" }}
                  >
                    welcome back
                    <span
                      className="d-inline-block coulor"
                      style={{ color: "#BF9B30" }}
                    >
                      balquees sabir
                    </span>
                  </h2>
                </div>
                <button className="btn btn-primary">web profile</button>
              </div>
            </div>

            <div className=" wrapper-box ">
              <div className="icon-item">
                <h2 className=" px-4 py-3 font-weight-bolder border rounded">
                  1
                </h2>
                <div>
                  <h4 className="text-uppercase">
                    upcomming <br />
                    exams
                  </h4>
                </div>
              </div>
              <div className="icon-item">
                <h2 className=" px-4 py-3 font-weight-bolder border rounded">
                  4
                </h2>
                <div>
                  <h4 className="text-uppercase">
                    registered <br />
                    courses
                  </h4>
                </div>
              </div>
              <div className="icon-item">
                <h2 className=" px-4 py-3 font-weight-bolder border rounded">
                  2
                </h2>
                <div>
                  <h4 className="text-uppercase">
                    completed <br />
                    courses
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="alert row text-uppercase text-white  alertExam p-4 mt-5 "
              role="alert"
              style={{ width: "55%", marginLeft: "initial" }}
            >
              <i className="far fa-check-circle col-1"></i>
              <h4 className="col-11 mb-0 mt-1">
                all clear,you don’t have any exams today.
              </h4>
            </div>
            <div className="row py-5 ">
              <div className="col-md-6">
                <h2 className="level-title">ongoing Course</h2>
                <div className="ongoing-course mb-4">
                  <h4>introduction to react js</h4>
                  <div className="level">
                    <h3>Lev1.</h3>
                    <div className="level-details d-flex justify-content-between align-items-center">
                      <div className="icon-wrapper ">
                        <i class="fa-regular fa-user"></i>
                        <span>20 students</span>
                      </div>
                      <button className="btn btn-primary">View Details</button>
                    </div>
                  </div>
                </div>
                <div className="ongoing-course">
                  <h4>introduction to react js</h4>
                  <div className="level">
                    <h3>Lev1.</h3>
                    <div className="level-details d-flex justify-content-between align-items-center">
                      <div className="icon-wrapper ">
                        <i class="fa-regular fa-user"></i>
                        <span>20 students</span>
                      </div>
                      <button className="btn btn-primary">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6   align-items-center ">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="text-capitalize text-white mb-4">
                    upcomming exams
                  </h2>
                  <button className="btn btn-primary">Create New</button>
                </div>
                <div className="exams d-flex gap-5 align-items-center">
                  <div className="exam-date text-white d-flex flex-column">
                    <h5>7TH</h5>
                    <h5>JUN</h5>
                    <div
                      className="web d-inline"
                      style={{ color: "white", backgroundColor: "#BF9B30" }}
                    >
                      Web
                    </div>
                  </div>
                  <div className="exam-text text-white">
                    <h4>introduction to react js</h4>
                    <h6>
                      {" "}
                      <span style={{ color: "#BF9B30" }}>instructor:</span>Ahmed
                      Ali
                    </h6>
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="text-uppercase d-inline-block font-weight-bolder ">
                        lev.1
                      </h5>
                      <div className="d-flex mt-1">
                        <i
                          className="far fa-clock "
                          style={{ fontSize: "25px" }}
                        ></i>
                        <p className="ml-2">12.30pm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h2 className="text-capitalize text-white my-4">
                  upcomming exams
                </h2>
                <div className="course-plan d-flex justify-content-between align-items-center ">
                  <img src={image1} className="img-fluid" alt="" />
                  <div className="course-text text-white">
                    <h4>Python For Beginners</h4>
                    <p>
                    <i class="fa-solid fa-calendar-days"></i>
                    Mondey 24th jun</p>
                    <span>
                    <i class="fa-solid fa-clipboard"></i>
                    12 lessons</span>
                  </div>
                  <button className="btn btn-primary mx-3 ">View Details</button>
                </div>
              </div>
              <div className="col-md-6 ">
              <h2 className="text-capitalize text-white my-4">
                  upcomming exams
                </h2>
                <div className="course-plan d-flex justify-content-between align-items-center ">
                  <img src={image1} alt="" />
                  <div className="course-text text-white">
                    <h4>Python For Beginners</h4>
                    <p>
                    <i class="fa-solid fa-calendar-days"></i>
                    Mondey 24th jun</p>
                    <span>
                    <i class="fa-solid fa-clipboard"></i>
                    12 lessons</span>
                  </div>
                  <button className="btn btn-primary mx-3 ">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Page20;
