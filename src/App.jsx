import UseEarthquake from "./hooks/UseEarthquake";

function App() {
  const earthquake = UseEarthquake();
  const times = earthquake.map((eq) => eq.properties?.time);
  const currentTime = Date.now();

  const mostRecent = times.reduce((latest, t) => {
    if (t <= currentTime && t > latest) {
      return t;
    }
    return latest;
  }, 0);

  return (
    <>
      <div className="font-inter flex flex-col items-center justify-center py-10 mx-auto max-w-[650px]">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl tracking-wide">Earthquake-DB</h1>
          <p className="text-black/50">Powered By USGS&copy;</p>
        </div>
        <div className="flex flex-col w-full gap-y-4 mt-20">
          {earthquake.map((quakes, index) => {
            return (
              <div
                key={index}
                className={`w-full ${
                  !quakes.properties.alert
                    ? "bg-gray-200"
                    : quakes.properties.alert == "red"
                    ? "bg-red-200"
                    : "bg-amber-100"
                } p-2 rounded-xl`}
              >
                <div className="flex items-center w-full justify-between gap-x-10 px-2 py-2">
                  <div className="">
                    <div className="flex items-center gap-x-5">
                      <h1>{quakes.properties.place}</h1>
                      {quakes.properties.time == mostRecent ? (
                        <h1 className="bg-red-500 px-3 rounded-full text-white">
                          New
                        </h1>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="flex items-center gap-x-2 mt-2">
                      <div
                        className={` w-fit px-2 rounded-2xl mt-1 text-white text-[15px] ${
                          !quakes.properties.alert
                            ? "bg-gray-400"
                            : quakes.properties.alert == "red"
                            ? "bg-red-300"
                            : "bg-amber-300"
                        }`}
                      >
                        <h1 className="mt-px">
                          Magnitude: {quakes.properties.mag.toFixed(2)}
                        </h1>
                      </div>
                      <div
                        className={` w-fit px-2 rounded-2xl mt-1 text-white text-[15px] ${
                          quakes.properties.alert == null
                            ? "bg-gray-400"
                            : quakes.properties.alert == "red"
                            ? "bg-red-300"
                            : "bg-amber-300"
                        }`}
                      >
                        <h1 className="mt-px">
                          Alert:{" "}
                          {quakes.properties.alert == null
                            ? "N/A"
                            : quakes.properties.alert}
                        </h1>
                      </div>
                      <div
                        className={` w-fit px-2 rounded-2xl mt-1 text-white text-[15px] ${
                          quakes.properties.alert == null
                            ? "bg-gray-400"
                            : quakes.properties.alert == "red"
                            ? "bg-red-300"
                            : "bg-amber-300"
                        }`}
                      >
                        <h1 className="mt-px">
                          Date:{" "}
                          {new Date(quakes.properties.time).toLocaleDateString(
                            "en-GB"
                          )}
                        </h1>
                      </div>
                      <div
                        className={` w-fit px-2 rounded-2xl mt-1 text-white text-[15px] ${
                          quakes.properties.alert == null
                            ? "bg-gray-400"
                            : quakes.properties.alert == "red"
                            ? "bg-red-300"
                            : "bg-amber-300"
                        }`}
                      >
                        <h1 className="mt-px">
                          Time:{" "}
                          {new Date(quakes.properties.time).toLocaleTimeString(
                            "en-GB",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                              second: "2-digit",
                              hour12: false,
                            }
                          )}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`ring-8 rounded-full size-[30px] ${
                      !quakes.properties.alert
                        ? "bg-gray-400/90 ring-gray-300"
                        : quakes.properties.alert == "red"
                        ? "ring-red-300 bg-red-500/90"
                        : "bg-amber-400/80 ring-amber-300/50"
                    }`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
