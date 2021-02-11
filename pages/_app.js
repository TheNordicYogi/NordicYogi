import "../styles/globals.css";
import { TrackingProvider } from "../contexts/trackers";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <TrackingProvider value="dark">
      <Component {...pageProps} />;
    </TrackingProvider>
  );
}

export default MyApp;
