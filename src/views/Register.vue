<template>
    <div>
        <h2>Register</h2>
        <form @submit.prevent="register">
            <input type="text" v-model="username" placeholder="Nome de usuário" />
            <input type="email" v-model="email" placeholder="Email" />
            <input type="password" v-model="password" placeholder="Senha" />
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
        };
    },
    methods: {
        async register() {
            try {
                const response = await axios.post('/auth/register', {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                });
                console.log(response.data);
                this.$router.push('/login');
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>