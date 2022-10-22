import Handlebars from "handlebars";
import tpl from './404.hbs'

export default () => {
    return Handlebars.compile(tpl())();
}