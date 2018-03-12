import Discord from 'discord.js';
require('../../src/discord/Message');

describe('Message', () => {
  let client: Discord.Client;

  beforeEach(() => {
    client = new Discord.Client();
  });

  describe('#hasPrefix', () => {
    describe('when content starts with prefix', () => {
      it('returns true');
    });

    describe('when content does not start with prefix', () => {
      it('returns false');
    });
  });

  describe('#isDirectMessage', () => {
    describe('when DMChannel', () => {
      it('returns true');
    });

    describe('when GroupDMChannel', () => {
      it('returns true');
    });

    describe('when TextChannel', () => {
      it('returns false');
    });
  });
})
