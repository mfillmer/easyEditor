import raw_control from './res/controls'
import Normal_Control from './normal_control';
import Interactive_Control from './interactive_control';
import Select_Control from './select_control';

let controls:any = [];
let initial_commands:any = [];

for (let data of raw_control){
    switch (data.type) {
        case 'normal':
            controls.push(new Normal_Control (data.command, data.icon));
            break;
        case 'interactive':
            controls.push(new Interactive_Control(data.command, data.interaction, data.icon));
            break;
        case 'select':
            controls.push(new Select_Control(data.command, data.values));
            break;
        default:
            initial_commands.push(data.command);
    }
}

window.onload = e => {
    var toolbar = document.getElementById("toolbar");

    for(let command of initial_commands){
        document.execCommand(command);
    }

    for(let control of controls){
        toolbar.appendChild(control.element);
    }
};