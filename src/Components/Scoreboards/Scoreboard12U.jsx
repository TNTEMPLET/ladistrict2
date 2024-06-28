import React, { useEffect } from 'react';

const Scoreboard12U = () => {
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
            target: "#gc-scoreboard-widget-k3zz",
            widgetId: "65f9a568-3dc6-4c7e-be12-ac2581e7e4ad",
            maxVerticalGamesVisible: 4,
          });
        }
      };
  
      // Cleanup script when component is unmounted
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    return <div id="gc-scoreboard-widget-k3zz"></div>;
  };

  export default Scoreboard12U;