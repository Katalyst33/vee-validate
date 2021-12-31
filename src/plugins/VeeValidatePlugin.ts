import  {Form, Field, ErrorMessage,defineRule} from 'vee-validate'
import {required,email} from '@vee-validate/rules'


export default (app:any) => {

    defineRule('isRequired',required)
    defineRule('isEmail',email)

    app.component('VeeForm', Form)
    app.component('VeeField', Field)
    app.component('VeeErrorMessage', ErrorMessage)
}


