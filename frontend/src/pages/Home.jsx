import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <div className="home-content">
          <h2 className="home-title">Welcome to Employee Directory</h2>
          <p className="home-text">
            Manage employees, add new staff, and explore your company directory easily.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;