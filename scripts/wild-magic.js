/**
 * Main Module Organizational Tools
 */
import { MODULE } from './module.js';

/**
 * Sub Modules
 */
import { DnDWildMagic } from './modules/DnDWildMagic.js';

const SUB_MODULES = {
    MODULE,
    DnDWildMagic,
};

/*
  Initialize Module
*/
MODULE.build();

/*
  Initialize all Sub Modules
*/
Hooks.on(`setup`, () => {
    Object.values(SUB_MODULES).forEach(cl => cl.register());
    Hooks.callAll('simbulsReady', {MODULE});
});
