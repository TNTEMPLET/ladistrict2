import React, { useEffect } from 'react';

const Scoreboard9U = () => {
    useEffect(() => {
      // Create script element for the SDK
      const script = document.createElement('script');
      script.src = 'https://widgets.gc.com/static/js/sdk.v1.js';
      script.async = true;
      
      // Append script to the body
      document.body.appendChild(script);

      // Initialize the widget once the script is loaded
      script.onload = () => {
        if (window.GC && window.GC.scoreboard) {
          window.GC.scoreboard.init({
            target: "#gc-scoreboard-widget-u77l",
            widgetId: "f774c38d-7adb-4ee8-a990-266643d7e997",
            maxVerticalGamesVisible: 4,
          });
        }
      };

      // Cleanup script when component is unmounted
      return () => {
        document.body.removeChild(script);
      };
    }, []);

    return <div id="gc-scoreboard-widget-u77l"></div>;
  };

export default Scoreboard9U;
