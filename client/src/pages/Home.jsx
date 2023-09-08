import React from "react";
import HomeImage from "../assets/banklogo.png";

const Home = () => {
  return (
    <>
      <div className="home-topscreen">
        <div className="home-leftscreen">
          <div>
            <h3>Welcome To</h3>
          </div>
          <h2>Maze Bank</h2>
          <div>
            <h3>For All Your Banking Needs...</h3>
          </div>
        </div>
        <img src={HomeImage} alt="React Logo" />
      </div>

      <div className="home-centerscreen">
        <h4>
          This is the Maze Bank staff portal. On this website, you are able to
          navigate through the different customers of our back, and allow
          transactions to be made between customers. You can also access the
          transaction history which is recorded after each transaction.
        </h4>
      </div>
    </>
  );
};

export default Home;
