import "../styles/globals.css";
import { TrackingProvider } from "../contexts/trackers";
import { useEffect, componentDidMount } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  return (
    <TrackingProvider value="dark">
      <Component {...pageProps} />;
    </TrackingProvider>
  );
}

export default MyApp;
