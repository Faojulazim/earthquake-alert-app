import { useEffect, useState } from "react";

function useEarthquake() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function run() {
      const earthquake = await fetch(
        `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2025-11-21&minlatitude=20.6&maxlatitude=26.6&minlongitude=88.0&maxlongitude=92.7`
      );
      const earthquakeJson = await earthquake.json();
      setData(earthquakeJson.features);
    }
    run();
  }, []);

  return data;
}

export default useEarthquake;
