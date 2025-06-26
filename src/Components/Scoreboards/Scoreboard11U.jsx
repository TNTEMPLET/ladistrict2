import React, { useEffect } from 'react';

const Scoreboard11U = () => {
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
            target: "#gc-scoreboard-widget-lr8r",
            widgetId: "2df2c9b5-b32c-4a1b-a0ad-4534e31c6148",
            maxVerticalGamesVisible: 4,
          });
        }
      };
  
      // Cleanup script when component is unmounted
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    return <div id="gc-scoreboard-widget-lr8r"></div>;
  };

  export default Scoreboard11U;