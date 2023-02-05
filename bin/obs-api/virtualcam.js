const virtualCamGet = async (obs) => {
    try {
        const { outputActive } = await obs.call('GetVirtualCamStatus');
        console.log(outputActive);
    } catch (error) {
        console.error(error);
    }
}

const virtualCamToggle = async (obs) => {
    try {
        const { outputActive } = await obs.call('ToggleVirtualCam');
        console.log(outputActive);
    } catch (error) {
        console.error(error);
    }
}

const virtualCamStart = async (obs) => {
    try {
        await obs.call('StartVirtualCam');
    } catch (error) {
        console.error(error);
    }
}

const virtualCamStop = async (obs) => {
    try {
        await obs.call('StopVirtualCam');
    } catch (error) {
        console.error(error);
    }
}

export const virtualCamCommand = async (command, obs) => {
    const { type, args } = command;

    switch (type) {
        case "get":
            await virtualCamGet(obs);
            break;
        case "toggle":
            await virtualCamToggle(obs);
            break;
        case "start":
            await virtualCamStart(obs);
            break;
        case "stop":
            await virtualCamStop(obs);
            break;
        default:
            break;
    }
}