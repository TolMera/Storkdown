import NetworkController from "./controller/network";
import MainMenu from "./view/menus/mainMenu";
import SettingsMenu from "./view/menus/settingsMenu";

new NetworkController();

(new MainMenu).doCall();
window.addEventListener('New Game', () => {
    
});
window.addEventListener('Settings', () => {
    (new SettingsMenu).doCall();
});
window.addEventListener('Back to Main Menu', () => {
    (new MainMenu).doCall();
})