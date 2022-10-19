import Handlebars from "handlebars";
import tpl from 'bundle-text:./500.hbs'

Handlebars.registerPartial('500', tpl);

export default () => {
    return Handlebars.compile(tpl)()
}