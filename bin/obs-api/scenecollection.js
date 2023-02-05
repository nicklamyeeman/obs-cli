const sceneCollectionList = async (obs) => {
    try {
        const { sceneCollections } = await obs.call('GetSceneCollectionList');
        console.log(sceneCollections);
    } catch (error) {
        console.error(error);
    }
}

const sceneCollectionGet = async (obs) => {
    try {
        const { currentSceneCollectionName } = await obs.call('GetSceneCollectionList');
        console.log(currentSceneCollectionName);
    } catch (error) {
        console.error(error);
    }
}

const sceneCollectionSet = async (obs, args) => {
    try {
        const sceneCollectionName = args[0] || 'default';
        await obs.call('SetCurrentSceneCollection', { sceneCollectionName });
    } catch (error) {
        console.error(error);
    }
}

export const sceneCollectionCommand = async (command, obs) => {
    const { type, args } = command;

    switch (type) {
        case "list":
            await sceneCollectionList(obs);
            break;
        case "get":
            await sceneCollectionGet(obs);
            break;
        case "set":
            await sceneCollectionSet(obs, args);
            break;
        default:
            break;
    }
}