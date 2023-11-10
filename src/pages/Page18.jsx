import React from "react";
import TitleTop from "../components/TitleTop";

function Page18() {
  return (
    <>
      <main className="mainOverlay">
        <div className="overlay">
          <div className="container">
            <TitleTop />
            <div className="row">
              <div className="col-md-3 py-4">
                <div className="wrapper  d-flex flex-column">
                  <div className="users d-flex flex-column">
                    <h5 className="user-title">Users</h5>
                    <a href="/">Admins</a>
                    <a href="/">Editors</a>
                    <a href="/">Instructors</a>
                    <a href="/">Students</a>
                  </div>
                  <div className="users d-flex flex-column">
                    <h5 className="user-title">Article</h5>
                    <a href="/">Admins</a>
                    <a href="/">Editors</a>
                    <a href="/">Instructors</a>
                    <a href="/">Students</a>
                  </div>
                  <div className="users d-flex flex-column">
                    <h5 className="user-title">Jops</h5>
                    <a href="/">Admins</a>
                    <a href="/">Editors</a>
                    <a href="/">Instructors</a>
                    <a href="/">Students</a>
                  </div>
                  <div className="users d-flex flex-column">
                    <h5 className="user-title">Courses</h5>
                    <a href="/">Admins</a>
                    <a href="/">Editors</a>
                    <a href="/">Instructors</a>
                    <a href="/">Students</a>
                  </div>
                </div>
              </div>
              <div className="py-4 col-md-9">
                <div className="course-details d-flex justify-content-between align-items-center">
                  <h5 className="course-details-title">Add Course Details</h5>
                  <button className="btn btn-primary rounded">PUBLISH</button>
                </div>
                <form className="row g-3 mt-3 course-form">
                  <div className="col-md-6">
                    <label for="inputState" className="form-label">
                      Course Name
                    </label>
                    <select id="inputState" className="form-select">
                      <option selected></option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <label for="inputCity" className="form-label">
                      Level
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                  <div className="col-md-4">
                    <label for="inputZip" className="form-label">
                      Number Of Course
                    </label>
                    <input type="text" className="form-control" id="inputZip" />
                  </div>
                  <div className="col-md-3">
                    <label for="inputZip" className="form-label">
                      Language
                    </label>
                    <input type="text" className="form-control" id="inputZip" />
                  </div>
                  <div className="col-md-3">
                    <label for="inputZip" className="form-label">
                      Start Date
                    </label>
                    <input type="date" className="form-control" id="inputZip" />
                  </div>
                  <div className="col-md-3">
                    <label for="inputZip" className="form-label">
                      Duration
                    </label>
                    <input type="time" className="form-control" id="inputZip" />
                  </div>
                  <div className="col-md-3">
                    <label for="inputZip" className="form-label">
                      Certifecate
                    </label>
                    <input type="text" className="form-control" id="inputZip" />
                  </div>
                  <div className="col-12">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Course introduction
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="col-md-6">
                    <label for="inputZip" className="form-label">
                      Course Asseesment
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="col-md-6">
                    <label for="inputZip" className="form-label">
                      Course Requrements
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Course Materials
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="col-md-4">
                    <label for="inputCity" className="form-label">
                      Publish Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                  <div className="col-md-4">
                    <label for="inputCity" className="form-label">
                      Instructor
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                  <div className="col-md-12 ">
                    <h6 className="upload-title">Upload Cover Photo</h6>
                    <div className="upload-frame">
                      <div className="upload-text">
                        <i class="fas fa-cloud-upload-alt"></i>
                        <h6 style={{ fontSize: "19px", color: "#fff" }}>
                          Drog & drop files or
                          <span
                            style={{
                              cursor: "pointer",
                              textDecoration: "underline",
                              color: "#e6ab0a",
                            }}
                          >
                            Browse
                          </span>
                        </h6>
                        <p style={{ fontSize: "14px", color: "gray" }}>
                          Supported formotes:
                          JPEG,PNG,GIF,MP4,PDF,PSD,AL,Word,PPT
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Page18;
