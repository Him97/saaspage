<template>
    <v-container class="fill-height">
        <v-responsive class="align-center content-center fill-height">
            <form @submit="handleSubmit(onSubmit)">
                <v-text-field v-model="title.value" label="Title" />
                <v-textarea clearable label="Write a note" prepend-inner-icon="mdi-comment" variant="solo-filled"
                    v-model="content.value" />
                <v-btn variant="tonal" type="submit">
                    Add Note
                </v-btn>
                <v-btn variant="tonal" @click="resetForm">
                    Clear
                </v-btn>
            </form>
            <v-row class="notes">
                <v-col v-for="(note, index) in notes" :key="index" cols="12" sm="6" md="4" lg="3">
                    <v-card class="mx-auto" hover @click="openModal(index)">
                        <v-card-item>
                            <v-card-title>
                                {{ note.title }}
                            </v-card-title>
                            <v-card-subtitle>
                                {{ note.date }}
                            </v-card-subtitle>
                        </v-card-item>
                        <v-card-text>
                            {{ note.content }}
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <Note :show="modal.show" :onHide="closeModal" :title="modal.title" :content="modal.content"
                :date="modal.date" />
        </v-responsive>
    </v-container>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useField, useForm } from 'vee-validate';
import moment from 'moment';
moment().format();
import Note from './Note.vue';

const { handleSubmit, resetForm } = useForm({
    validationSchema: {
        content: {
            required: true,
            message: 'Please write something.',
        },
    },
});

const title = reactive(useField('title'));
const content = reactive(useField('content'));
const notes: object = ref([]);
const modal = reactive({
    show: false,
    title: '',
    content: '',
    date: '',
});

const onSubmit = async () => {
    const newNote = {
        title: title.value,
        content: content.value,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
    };
    console.log(newNote)
    notes.push(newNote);
    resetForm();
}

const openModal = (index) => {
    modal.title = notes.value[index].title;
    modal.content = notes.value[index].content;
    modal.date = notes.value[index].date;
    modal.show = true;
};

const closeModal = () => {
    modal.show = false;
};
</script>