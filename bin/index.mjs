#!/usr/bin/node

import OBSWebSocket from 'obs-websocket-js';
import { executeCommand, parseCommand } from './commands.js';
import { ObsCliConnect, ObsCliDisconnect } from './obs-api/connect.js';
const obs = new OBSWebSocket();

(async () => {
    await ObsCliConnect(obs);
    const command = parseCommand(process.argv);
    if (!command.error) {
        await executeCommand(command, obs);
    } else {
        console.log(command.error);
    }
    await ObsCliDisconnect(obs);
})();