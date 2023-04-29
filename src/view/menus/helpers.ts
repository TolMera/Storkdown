/*
 The Helpers class provides utility functions to simplify the process of creating and manipulating buttons. These functions include adding tooltips and event listeners.
*/
export abstract class Helpers {
    altToToolTip(button: HTMLButtonElement, altText: string) {
        let tooltipTimeout: number;

        button.addEventListener('mouseenter', () => {
            tooltipTimeout = setTimeout(() => {
                const tooltip = document.createElement('div');
                tooltip.innerHTML ??= altText;
                tooltip.classList.add('tooltip', 'tooltip-top');
                tooltip.style.left = `${button.getBoundingClientRect().left}px`;
                tooltip.style.top = `${button.getBoundingClientRect().top - 10}px`;
                document.body.appendChild(tooltip);
            }, 2500);
        });

        button.addEventListener('mouseleave', () => {
            clearTimeout(tooltipTimeout);
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });

        return button;
    }

    buttonAttachEvent(button: HTMLButtonElement, eventName: string, callback?: Function) {
        button.addEventListener('click', function (mouse: MouseEvent) {
            callback && callback(this, mouse);
            window.dispatchEvent(new Event(eventName));
        });
    }

    createMenuButton(text: string, altText: string, callback?: Function) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.classList.add('menu-button', 'tooltip-button');
        this.buttonAttachEvent(button, text, callback);
        this.altToToolTip(button, altText);
        return button;
    }

    removeMenu(button: HTMLButtonElement) {
        const menu = button.closest('.menu');
        if (menu) {
            menu.remove();
        }
    }
}

export default Helpers;
