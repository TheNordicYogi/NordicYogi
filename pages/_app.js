import "../styles/globals.css";
import { TrackingProvider } from "../contexts/trackers";

function MyApp({ Component, pageProps }) {
  return (
    <TrackingProvider>
      <Component {...pageProps} />;
    </TrackingProvider>
  );
}

export default MyApp;
