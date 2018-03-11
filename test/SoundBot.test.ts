import fs from 'fs';
import Discord from 'discord.js';

import { token } from '../config/config.json'
import SoundBot from  '../src/SoundBot';

describe('SoundBot', () => {
  let bot: SoundBot;

  beforeEach(() => {
    bot = new SoundBot();
  });

  describe('#login', () => {
    beforeEach(() => {
      spyOn(bot, 'login');
    });

    it('starts the bot', () => {
      bot.start();
      expect(bot.login).toHaveBeenCalledWith(token);
    });
  });

  describe('#setAvatar', () => {
    describe('when avatar exists', () => {
      beforeEach(() => {
        spyOn(fs, 'existsSync').and.returnValue(true);
        bot.user = jasmine.createSpyObj('user', ['setAvatar']);
      });

      it('sets the avatar', () => {
        expect((bot as any).avatarExists()).toBe(true);

        (bot as any).setAvatar();
        expect(bot.user.setAvatar).toHaveBeenCalledWith('./config/avatar.png');
      });
    });

    describe('when avatar does not exist', () => {
      beforeEach(() => {
        spyOn(fs, 'existsSync').and.returnValue(false);
        bot.user = jasmine.createSpyObj('user', ['setAvatar']);
      });

      it('sets the avatar', () => {
        expect((bot as any).avatarExists()).toBe(false);

        (bot as any).setAvatar();
        expect(bot.user.setAvatar).toHaveBeenCalledWith('');
      });
    });
  });
})
