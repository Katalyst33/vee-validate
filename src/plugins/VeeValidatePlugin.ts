import  {Form, Field, ErrorMessage,defineRule, configure} from 'vee-validate'
import {required,email,min} from '@vee-validate/rules'
import {localize} from '@vee-validate/i18n'


export default (app:any) => {

    defineRule('isRequired',required)
    defineRule('isEmail',email)
    defineRule('isMin',min)


    configure({
        generateMessage:localize('en', {
            messages: {
                isRequired: '{field}  is required',
                isEmail: 'This field must be a valid email',
                isMin: 'This field must be at least {length} characters'
            }
        })
    })

    app.component('VeeForm', Form)
    app.component('VeeField', Field)
    app.component('VeeErrorMessage', ErrorMessage)
}


