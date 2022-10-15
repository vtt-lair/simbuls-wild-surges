import { logger } from './logger.js';

const NAME = "simbul-wild-surges";
const PATH = `/modules/${NAME}`;
const TITLE = "Simbul's Wild Surges";


/**
 * @class
 * @property {Function} patch
 */
export class MODULE{
    static async register(){
        logger.info("Initializing Module");
        MODULE.globals();
    }

    static async build(){
        MODULE.data = {
        name : NAME, path : PATH, title : TITLE
        };
    }

    static globals() {
        game.dnd5e.wildsurges = {};
    }

    /**
     * @returns any
     */
    static setting(key){
        return game.settings.get(MODULE.data.name, key);
    }

    static localize(...args){
        return game.i18n.localize(...args);
    }

    static applySettings(settingsData){
        Object.entries(settingsData).forEach(([key, data])=> {
            game.settings.register(
                MODULE.data.name, key, {
                    name : MODULE.localize(`setting.${key}.name`),
                    hint : MODULE.localize(`setting.${key}.hint`),
                    ...data
                }
            );
        });
    }
}
