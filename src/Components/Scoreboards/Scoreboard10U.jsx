import React, { useEffect } from 'react';

const Scoreboard10U = () => {
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
            target: "#gc-scoreboard-widget-89td",
            widgetId: "6818a21c-0a20-445d-8ea8-d68f94d5e87f",
            maxVerticalGamesVisible: 4,
          });
        }
      };
  
      // Cleanup script when component is unmounted
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    return <div id="gc-scoreboard-widget-89td"></div>;
  };

  export default Scoreboard10U;