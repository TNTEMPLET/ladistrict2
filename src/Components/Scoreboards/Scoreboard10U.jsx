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
            target: "#gc-scoreboard-widget-scwt",
            widgetId: "2fc9c161-147d-4fea-b61e-1e0fc9deb5de",
            maxVerticalGamesVisible: 4,
          });
        }
      };
  
      // Cleanup script when component is unmounted
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    return <div id="gc-scoreboard-widget-scwt"></div>;
  };

  export default Scoreboard10U;