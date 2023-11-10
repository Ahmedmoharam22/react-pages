import React from "react";
import image1 from "../media/images.png";
function Page24() {
  return (
    <div>
      <main className="mainOverlay">
        <div className="overlay">
          <div className="container">
            <div className="text pt-5 pb-3">
              <h6>Tech</h6>
              <h2 className="fw-bold">Python programming language</h2>
              <p>
                <span style={{ color: " #BF9B30" }} className="mx-1">
                  instructor:
                </span>
                Mohamed Ali
              </p>
            </div>
            <div className="row">
              <div className="col-md-8 overflow-hidden">
                <div className="right-text text-white">
                  <img
                    src={image1}
                    style={{
                      width: "85%",
                      height: "450px",
                      objectFit: "cover",
                    }}
                    alt=""
                  />
                  <h4 className="my-3">introduction</h4>
                  <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut, quisquam esse? Quam, nulla. Quaerat saepe alias
                    voluptatibus libero repudiandae obcaecati, elit. Aut,
                    quisquam esse? Quam, nulla. Quaerat saepe alias voluptatibus
                    libero repudiandae obcaecati, numquam sed maiores iste totam
                    tempora aliquid aperiam. Rerum, animi. quisquam esse? Quam,
                    nulla. Quaerat saepe alias voluptatibus libero repudiandae
                    obcaecati, numquam sed maiores iste totam tempora aliquid
                    aperiam. Rerum, animi.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="left-text">
                  <div className="d-flex justify-content-between align-items-center">
                    <i class="fa-solid fa-address-book"></i>
                    lesson
                    <br />
                    12
                    <i class="fa-solid fa-address-book"></i>
                    level
                    <br />
                    beginner
                  </div>
                </div>
                <div className="midle-text mt-4">
                  <p>
                    <i class="fa-solid fa-user"></i>
                    Students: <span>20</span>
                  </p>
                  <p>
                    <i class="fa-solid fa-language"></i>
                    language: <span>Arabic</span>
                  </p>
                  <p>
                    <i class="fa-regular fa-clock"></i>
                    Duration: <span>13hours</span>
                  </p>
                  <p>
                    <i class="fa-solid fa-calendar-days"></i>
                    Start Date: <span>13 jun 2023</span>
                  </p>
                  <p>
                    <i class="fas fa-certificate"></i>
                    certifecate: <span>Upon complete</span>
                  </p>
                </div>
                <div className="bottom-text">
                  <h4>Assesment</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut, quisquam esse? Quam, nulla. Quaerat saepe alias. Aut,
                    quisquam esse? Quam, nulla. Quaerat saepe alias.
                  </p>
                  <h4>Requeirments</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut, quisquam esse? Quam, nulla. Quaerat saepe alias. Aut,
                    quisquam esse? Quam, nulla. Quaerat saepe alias.
                  </p>
                  <h4>Material</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut, quisquam esse? Quam, nulla. Quaerat saepe alias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page24;
