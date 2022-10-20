import Handlebars from "handlebars";
import tpl from './chat.hbs'
import './chat.css'

Handlebars.registerPartial('chat ', tpl());

export default (name,last_message,avatar,count) => {
    return Handlebars.compile(tpl(name,last_message,avatar,count))()
}