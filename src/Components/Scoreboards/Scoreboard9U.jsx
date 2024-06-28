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
            target: "#gc-scoreboard-widget-ejfk",
            widgetId: "83aa6642-ee29-4547-89ba-3369a89e2e33",
            maxVerticalGamesVisible: 4,
          });
        }
      };

      // Cleanup script when component is unmounted
      return () => {
        document.body.removeChild(script);
      };
    }, []);

    return <div id="gc-scoreboard-widget-ejfk"></div>;
  };

export default Scoreboard9U;

