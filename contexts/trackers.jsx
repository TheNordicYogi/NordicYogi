import React, { useState, useEffect } from "react";
import Router from "next/router";
import ReactGA from "react-ga";

const TrackingID = "UA-171822364-1";
const TrackingContext = React.createContext();

function TrackingProvider(props) {
  // we create a default state to keep track of whether GA
  // has been initialized, if we're tracking a unique user,
  // and to hold all of our trackers
  const [analytics, setAnalytics] = useState({
    isInitialized: false,
    trackers: ["myDefaultTracker"],
  });

  // We create a function handle all route changes that occur
  // and track a users movements across pages in our app

  const handleRouteChange = (url) => {
    ReactGA.set({ page: url }, analytics.trackers);
    ReactGA.pageview(url, analytics.trackers);
  };

  // We only want to initialize GA on the client side
  // This will fail if you're trying to initialize server side
  // useEffect will help us handle this case as it only runs
  // client side

  useEffect(() => {
    const { isInitialized, trackers } = analytics;

    // initialize GA with our tracking id
    // uncomment the user tracking method that works for you

    if (!isInitialized) {
      ReactGA.initialize(TrackingID);

      // Handle all route changes
      Router.events.on("routeChangeComplete", handleRouteChange);

      setAnalytics((prev) => ({
        ...prev,
        isInitialized: true,
      }));

      // in case we dont have the user initially,
      // we handle setting a user in our tracker
    }
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return <TrackingContext.Provider {...props} />;
}

const useTracking = () => React.useContext(TrackingContext);

export { TrackingProvider, useTracking };
