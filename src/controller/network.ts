import { KeyboardController, KeyboardCurrentState } from "./keyboard";
import { MouseController, MouseCurrentState } from "./mouse";
import { GamepadController, GamepadCurrentState } from "./gamepad";


export class NetworkController {
    keyboardState: Array<KeyboardCurrentState> = [];
    mouseState: Array<MouseCurrentState> = [];
    gamepadState: Array<GamepadCurrentState> = [];
    constructor() {
        // Initialize the network controller

        this.listenToKeyboard();
        this.listenToMouse();
        this.listenToGamepad();

        setInterval(() => {
            this.sendStateToServer();
        }, 25);
    }

    listenToKeyboard() {
        // Initialize the controller
        const keyboardController = new KeyboardController();

        setInterval(() => {
            this.keyboardState.push(...keyboardController.getState());
        }, 100);
    }

    listenToMouse() {
        // Initialize the controller
        const mouseController = new MouseController();

        setInterval(() => {
            this.mouseState.push(...mouseController.getState());
        }, 100);
    }

    listenToGamepad() {
        // Initialize the controller
        const gamepadController = new GamepadController();

        setInterval(() => {
            this.gamepadState.push(...gamepadController.getState());
        }, 100);
    }

    sendStateToServer() {
        // Send Keyboard state to server
        if (this.keyboardState.length > 0) {
            const keyboardState = this.keyboardState;
            this.keyboardState = [];

            // !IMPORTANT = Send this state don't just log it.
            console.log("keyboardState:", keyboardState);
        }

        if (this.mouseState.length > 0) {
            const mouseState = this.mouseState;
            this.mouseState = [];

            // !IMPORTANT = Send this state don't just log it.
            console.log("mouseState:", mouseState);
        }

        if (this.gamepadState.length > 0) {
            const gamepadState = this.gamepadState;
            this.gamepadState = [];

            // !IMPORTANT = Send this state don't just log it.
            console.table(gamepadState);
        }

    }
}

export default NetworkController;
