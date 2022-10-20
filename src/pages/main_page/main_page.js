import Handlebars from "handlebars";
import tpl from './main_page.hbs'

export default () => {
    return Handlebars.compile(tpl())();
}