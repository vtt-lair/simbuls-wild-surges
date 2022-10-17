import { logger } from '../../simbuls-athenaeum/scripts/logger.js';
import { HELPER } from '../../simbuls-athenaeum/scripts/helper.js'

const NAME = "simbuls-wild-surges";
const PATH = `/modules/${NAME}`;
const TITLE = "Simbul's Wild Surges";


/**
 * @class
 * @property {Function} patch
 */
export class MODULE {
    static async register(){
        logger.info(NAME, "Initializing Module");
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

    static applySettings(settingsData){
        Object.entries(settingsData).forEach(([key, data])=> {
            game.settings.register(
                MODULE.data.name, key, {
                    name : HELPER.localize(`setting.${key}.name`),
                    hint : HELPER.localize(`setting.${key}.hint`),
                    ...data
                }
            );
        });
    }
}
