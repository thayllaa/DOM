<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="login">
            <input type="email" v-model="email" placeholder="Email" />
            <input type="password" v-model="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post('/auth/login', {
                    email: this.email,
                    password: this.password,
                });
                console.log(response.data);
                this.$router.push('/diary');
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>