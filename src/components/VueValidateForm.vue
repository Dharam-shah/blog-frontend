<!-- <template>
    <div>
        <h2>learning veevalidate</h2>
        <input type="text" class="form-control" v-model="name">
        <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(onSubmit)">
                <ValidationProvider name="Name" rules="required|alpha" v-slot="{ errors }">
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="name">
                        <span>{{ errors[0] }}</span>
                    </div>
                </ValidationProvider>
            </form>
        </ValidationObserver>
    </div>
</template>

<script>
export default{
    data() {
        return{
            formData:{
                name:'',
                email: '',
                password: '',
                gender: '',
                acceptTerms: null
            }
        }
    },
    methods:{
        onSubmit(){
            console.log(this.formData)
        }
    }
}
</script> -->

<!-- <template>
<h2>cascdads</h2>
    <ValidationObserver>
    <form >
        <ValidationProvider>
            <input type="text">
            <span id="error">{{ errors[0] }}</span>
        </ValidationProvider>
        <v-btn :disabled="invalid">Submit</v-btn>
    </form>
    </ValidationObserver>
</template>

<script>
import { ValidationObserver } from 'vee-validate';
import { ValidationProvider } from 'vee-validate';


export default {
    name: "validation-form",
    components: {
        ValidationObserver,
        ValidationProvider,
        
    }
};
</script> -->

<template>
    <div class="form contact-form">
        <ValidationObserver v-slot="props">
            <ValidationProvider rules="required|min:2"  v-slot="props">
                <div class="form-group position-relative">
                    <!-- <label for="company">{{ translations.company_label }}</label> -->
                    <input type="text" id="company" class="form-control" />
                    <span class="error">{{ props.errors[0] }}</span>
                </div>
            </ValidationProvider>
            
            <button :disabled="props.invalid" class="btn btn-primary btn-lg">aa</button>
        </ValidationObserver>
    </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import { ValidationObserver } from 'vee-validate';

export default {
    components: {
        ValidationProvider,
        ValidationObserver
    },
};
</script>
<style>
 @import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");
</style>