import { Helpers } from "./helpers";
export class MainMenu extends Helpers {
  doCall() {
    // create a div element for the game menu
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    // create buttons for the menu
    menuDiv.appendChild(
        this.createMenuButton(
            'New Game',
            'Start a new game',
            this.removeMenu
        )
    );

    // menuDiv.appendChild(
    //     this.createMenuButton(
    //         'Continue',
    //         'Continue an existing Game',
    //         this.removeMenu
    //     )
    // );
    
    menuDiv.appendChild(
        this.createMenuButton(
            'Settings',
            'Open Settings window',
            this.removeMenu
        )
    );

    // add the menu div to the body of the HTML page
    document.body.appendChild(menuDiv);
  }
}

export default MainMenu;
