<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-textarea clearable label="Write a note" prepend-inner-icon="mdi-comment" variant="solo-filled"></v-textarea>

      <v-btn variant="tonal">
        Add Note
      </v-btn>

      <v-card class="mx-auto" max-width="344" hover>
        <v-card-item>
          <v-card-title>
            Card title
          </v-card-title>
          <v-card-subtitle>
            Card subtitle secondary text
          </v-card-subtitle>
        </v-card-item>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </v-card-text>
      </v-card>
      <Note/>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
  import Note from './Note.vue'
</script>