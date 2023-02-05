import { sceneCollectionCommand } from "./obs-api/scenecollection.js";
import { virtualCamCommand } from "./obs-api/virtualcam.js";

const possibleScopes = [
    'scenecollection',
    'virtualcam'
];

const possibleTypes = [
    'list',
    'get',
    'set',
    'toggle',
    'start',
    'stop'
];

export const parseCommand = (commandLineArguments) => {
    const scope = commandLineArguments.slice(2)[0] || null;
    const type = commandLineArguments.slice(2)[1] || null;

    if (possibleScopes.indexOf(scope) >= 0 && possibleTypes.indexOf(type) >= 0) {
        return { scope, type, args: commandLineArguments.slice(4) };
    }
    return { error: 'Not a valid command' };
};

export const executeCommand = async (command, obs) => {
    const { scope } = command;
    switch (scope) {
        case "scenecollection":
            await sceneCollectionCommand(command, obs);
            break;
        case "virtualcam":
            await virtualCamCommand(command, obs);
            break;
        default:
            break;
    }
}