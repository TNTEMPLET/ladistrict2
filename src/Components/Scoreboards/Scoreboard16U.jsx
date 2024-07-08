import React, { useEffect } from 'react';

const Scoreboard14U = () => {
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
            target: "#gc-scoreboard-widget-4rf4",
            widgetId: "8ccee2b7-6b19-4198-b8d3-b7868de20e53",
            maxVerticalGamesVisible: 4,
          });
        }
      };
  
      // Cleanup script when component is unmounted
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    return <div id="gc-scoreboard-widget-4rf4"></div>;
  };

  export default Scoreboard14U;