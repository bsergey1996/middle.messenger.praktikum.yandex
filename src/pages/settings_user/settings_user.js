import Handlebars from "handlebars";
import tpl from './settings_user.hbs' //bundle-text:
import './settings_user.css'
import input_setting from '../../components/inputSetting/input_setting.js'

export default () => {
    Handlebars.registerPartial('input_setting', input_setting);
    return Handlebars.compile(tpl())();
}