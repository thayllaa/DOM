<template>
    <div>
        <h2>My Diary</h2>
        <form @submit.prevent="createEntry">
            <input type="text" v-model="title" placeholder="Título" />
            <textarea v-model="content" placeholder="Conteúdo"></textarea>
            <button type="submit">Save</button>
        </form>
        <div v-for="entry in entries" :key="entry.id">
            <h3>{{ entry.title }}</h3>
            <p>{{ entry.content }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            title: '',
            content: '',
            entries: [],
        };
    },
    mounted() {
        this.fetchEntries();
    },
    methods: {
        async createEntry() {
            try {
                const response = await axios.post('/diary/entries', {
                    title: this.title,
                    content: this.content,
                });
                console.log(response.data);
                this.fetchEntries();
            } catch (error) {
                console.error(error);
            }
        },
        async fetchEntries() {
            try {
                const response = await axios.get('/diary/entries');
                this.entries = response.data;
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>