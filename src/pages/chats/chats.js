import Handlebars from "handlebars";
import tpl from './chats.hbs'
import './chats.css'
import chat from '../../components/chat/chat.js'
import message from '../../components/message/message.js'

export default () => {
    console.log(chat());
    Handlebars.registerPartial('chat', chat);
    Handlebars.registerPartial('message', message);
    return Handlebars.compile(tpl())();
}