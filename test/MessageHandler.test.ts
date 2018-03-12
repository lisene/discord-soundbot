import fs from 'fs';
import Discord from 'discord.js';

import { prefix } from '../config/config.json';
import MessageHandler from '../src/MessageHandler';

describe('MessageHandler', () => {
  let messageHandler: MessageHandler;
  let client: Discord.Client;

  beforeEach(() => {
    client = new Discord.Client();
    messageHandler = new MessageHandler(prefix);
  });

  describe('#handle', () => {
    it('does nothing on private messages');
    it('does nothing without the right prefix');
  });
})
