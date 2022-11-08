import App from "./app";
import { createRoot } from "react-dom/client";
import "./main.css";

const app = document.getElementById("root");

const root = createRoot(app);

root.render(<App />);
