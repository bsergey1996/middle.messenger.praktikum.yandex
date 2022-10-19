import Handlebars from "handlebars";
import tpl from 'bundle-text:./404.hbs'

Handlebars.registerPartial('404', tpl);

export default () => {
    return Handlebars.compile(tpl)()
}