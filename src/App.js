import mainLogo from "./images/image-equilibrium.jpg";
import hoverIcon from "./images/icon-view.svg";
import ethereumIcon from "./images/icon-ethereum.svg";
import clockIcon from "./images/icon-clock.svg";
import userAvatar from "./images/image-avatar.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main-body">
        <div className="main-logo-div">
          <img src={mainLogo} alt="main logo" className="main-logo" />
          <div className="hover-container"></div>
          <img src={hoverIcon} alt="hover eye icon" className="hover-icon" />
        </div>
        <InfoBody />
      </div>
    </div>
  );
}

function InfoBody() {
  return (
    <div className="info-body-div">
      <Info />
      <User />
    </div>
  );
}

function Info() {
  return (
    <div className="info-section">
      <h3 className="info-heading">Equilibrium #3429</h3>
      <p className="info-paragraph">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <InfoPrice />
    </div>
  );
}

function InfoPrice() {
  return (
    <div className="info-price-div">
      <div className="info-box">
        <img src={ethereumIcon} alt="ethereum icon" className="icon" />
        <p className="price-paragraph">0.041 ETH</p>
      </div>
      <div className="info-box">
        <img src={clockIcon} alt="clock icon" className="clock-icon" />
        <p className="regular-paragraph">3 days left</p>
      </div>
    </div>
  );
}

function User() {
  return (
    <div className="user-div">
      <img src={userAvatar} alt="user avatar" className="user-avatar" />
      <p className="regular-paragraph">
        Creation of
        <span className="username"> Jules Wyvern</span>
      </p>
    </div>
  );
}

export default App;
