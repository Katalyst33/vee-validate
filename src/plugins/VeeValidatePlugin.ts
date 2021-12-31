import {Form, Field, ErrorMessage, defineRule, configure} from 'vee-validate'
import {required, email, min,confirmed } from '@vee-validate/rules'
import {localize} from '@vee-validate/i18n'
import {$ref} from "vue/macros";
import {ref} from "vue";


export default (app: any) => {

    defineRule('isRequired', required)
    defineRule('isEmail', email)
    defineRule('isMin', min)
    defineRule('isConfirmed', confirmed)


    configure({
        generateMessage: localize('en', {
            messages: {
                isRequired: '{field}  is required',
                isEmail: '{field} must be a valid email',
                isMin: '{field} must be 0:{min} characters long',
                isConfirmed: '{field} does not match'
            }
        })
    })

    app.component('VeeForm', Form)
    app.component('VeeField', Field)
    app.component('VeeErrorMessage', ErrorMessage)
}


