import Handlebars from "handlebars";
import tpl from './message.hbs'
import './message.css'

Handlebars.registerPartial('message ', tpl());

export default (type,name,message,time) => {
    return Handlebars.compile(tpl(type,name,message,time))()
}