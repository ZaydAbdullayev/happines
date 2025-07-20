import WorldMap from "./components/world-map";
import "./home.scss";

export function App() {
  return (
    <div className="app">
      <div className="container">
        <header>
          <h1>World Happiness Index 2024</h1>
          <p>Happiness levels by country based on the World Happiness Report</p>
        </header>

        <div className="map-wrapper">
          <WorldMap />
          <div className="legend">
            <h3>Happiness Level</h3>
            <div className="legend-item">
              <div
                className="color-box"
                style={{ backgroundColor: "#ef4444" }}
              ></div>
              <span>0-50%</span>
            </div>
            <div className="legend-item">
              <div
                className="color-box"
                style={{ backgroundColor: "#facc15" }}
              ></div>
              <span>51-70%</span>
            </div>
            <div className="legend-item">
              <div
                className="color-box"
                style={{ backgroundColor: "#22c55e" }}
              ></div>
              <span>71-100%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
