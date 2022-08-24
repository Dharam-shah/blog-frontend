<template>
    <div>
        <h2>learning veevalidate</h2>
        <input type="text" class="form-control" v-model="name">
        <ValidationObserver v-slot="handleSubmit">
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
</script>

<style>
 @import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");
</style>