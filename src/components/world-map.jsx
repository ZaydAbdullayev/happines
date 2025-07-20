import { useState } from "react";
import "./index.scss";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import {
  happinessData,
  getCountryColor,
  getCountryPercentage,
} from "../context/data";

// Natural Earth world topology
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function WorldMap() {
  const getCountryStyle = (geo) => {
    const countryCode = geo.properties.name;
    const data = happinessData[countryCode];

    if (!data) {
      return {
        default: {
          fill: "#9ea1a8",
          stroke: "#e5e7eb",
          strokeWidth: 0.3,
          opacity: 0.3,
          outline: "none",
        },
        hover: {
          fill: "#ccc",
          stroke: "#999",
          strokeWidth: 0.3,
          opacity: 0.3,
          outline: "none",
        },
        pressed: {
          fill: "#f3f4f6",
          stroke: "#e5e7eb",
          strokeWidth: 0.3,
          opacity: 0.3,
          outline: "none",
        },
      };
    }

    const baseColor = getCountryColor(data.score);

    return {
      default: {
        fill: baseColor,
        stroke: "#9ca3af",
        strokeWidth: 0.5,
        opacity: 0.8,
        outline: "none",
      },
      hover: {
        fill: baseColor,
        stroke: "#374151",
        strokeWidth: 1.2,
        opacity: 0.9,
        outline: "none",
        filter: "brightness(1.1)",
      },
      pressed: {
        fill: baseColor,
        stroke: "#374151",
        strokeWidth: 1.2,
        opacity: 0.9,
        outline: "none",
      },
    };
  };

  // Country label positions (approximate centroids)
  const countryPositions = {
    "United States of America": [-95, 40],
    Canada: [-105, 60],
    "United Kingdom": [-2, 54],
    Germany: [10, 51],
    France: [2, 46],
    Netherlands: [5, 52],
    Switzerland: [8, 47],
    Norway: [10, 62],
    Sweden: [15, 62],
    Denmark: [10, 56],
    Russia: [100, 60],
    China: [105, 35],
    Japan: [138, 36],
    "South Korea": [128, 36],
    India: [77, 20],
    Australia: [135, -25],
  };

  return (
    <div className="map-wrapper">
      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{
          scale: 140,
          center: [0, 0],
        }}
        width={700}
        height={410}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={getCountryStyle(geo)}
                />
              );
            })
          }
        </Geographies>

        {Object.entries(happinessData).map(([code, data]) => {
          const position = countryPositions[code];
          if (!position) return null;

          return (
            <Marker key={code} coordinates={position}>
              <text className="country-label">
                {getCountryPercentage(data.score)}%
              </text>
            </Marker>
          );
        })}
      </ComposableMap>
    </div>
  );
}
