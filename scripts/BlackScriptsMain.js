import { sidebarDisplay } from "./sidebar.js";
import { showPopup } from "./overlay.js";
import { initScrollAnimation } from "./animations.js";
import initWatchAnimation from "./watch.js";
initWatchAnimation();
sidebarDisplay();
showPopup();
initScrollAnimation();
