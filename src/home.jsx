import { RiTwitterXFill } from "react-icons/ri";
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

        <button className="button-55">
          Follow US <RiTwitterXFill />
        </button>

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
          <div class="top-legend-country">
            <h3>Top 10 Happiest Countries</h3>
            <ul>
              <li>
                1. Finland — <b>77%</b>
              </li>
              <li>
                2. Denmark — <b>75%</b>
              </li>
              <li>
                3. Iceland — <b>75%</b>
              </li>
              <li>
                4. Sweden — <b>73%</b>
              </li>
              <li>
                5. Netherlands — <b>73%</b>
              </li>
              <li>
                6. Costa Rica — <b>73%</b>
              </li>
              <li>
                7. Norway — <b>73%</b>
              </li>
              <li>
                8. Luxembourg — <b>71%</b>
              </li>
              <li>
                9. Mexico — <b>69%</b>
              </li>
              <li>
                10. Australia — <b>69%</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
