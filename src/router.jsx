import { createHashRouter } from "react-router-dom";
import App from "./App";
import Bracket from "./routes/Bracket";
import Parking from "./routes/Parking";
import Rosters from "./routes/Rosters";

export const router = createHashRouter([
    {path: "/", element: <App />},
    {path: "/bracket", element: <Bracket /> },
    {path: "/parking", element: <Parking /> },
    {path: "/rosters", element: <Rosters /> },
  ])