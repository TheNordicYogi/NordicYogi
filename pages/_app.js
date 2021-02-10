import "../styles/globals.css";
import { TrackingProvider } from "../contexts/trackers";

function MyApp({ Component, pageProps }) {
  return (
    <TrackingProvider value="dark">
      <Component {...pageProps} />;
    </TrackingProvider>
  );
}

export default MyApp;
