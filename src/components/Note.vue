<template>
    <v-dialog :value="show" max-width="600" @input="onHide">
        <v-card append-icon="$close" class="mx-auto" elevation="16" max-width="500">
            <v-card-item>
                <v-card-title class="text-h5">
                    {{ date }}
                </v-card-title>
                <v-card-subtitle v-if="title" class="text-h6">
                    {{ title }}
                </v-card-subtitle>
            </v-card-item>
            <v-divider />
            <v-card-text>
                {{ text }}
            </v-card-text>
            <v-card-actions>
                <v-btn class="content-none" color="medium-emphasis" min-width="92" rounded variant="outlined"
                    @click="onHide">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

const props = defineProps(['show', 'onHide', 'title', 'text', 'date']);
</script>