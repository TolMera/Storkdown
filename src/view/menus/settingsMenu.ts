import { Helpers } from "./helpers";
export class SettingsMenu extends Helpers {
  doCall() {
    // create a div element for the game menu
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    // create buttons for the menu
    menuDiv.appendChild(
        this.createMenuButton(
            'Back to Main Menu',
            'Go back to the previous menu',
            this.removeMenu
        )
    );

    // add the menu div to the body of the HTML page
    document.body.appendChild(menuDiv);
  }
}

export default SettingsMenu;
