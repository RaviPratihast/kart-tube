import React from "react";
import ReactDOM from "react-dom/client";
import "@heroicons/react/solid";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { VideoProvider } from "./context/video-context/video-context";
import { AuthProvider } from "./context/auth-context/auth-context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <VideoProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </VideoProvider>
    </Router>
  </React.StrictMode>
);
