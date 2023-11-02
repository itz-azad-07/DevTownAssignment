import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <React.Fragment>
      <h1>Welcome to My DevTown Assignment</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card" style={{ width: "18rem" }}>
              <img src="https://picsum.photos/seed/picsum/200/303" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card" style={{ width: "18rem" }}>
              <img src="https://picsum.photos/seed/picsum/200/302" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card" style={{ width: "18rem" }}>
              <img src="https://picsum.photos/seed/picsum/200/301" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
