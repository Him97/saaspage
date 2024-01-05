<template>
    <v-fade-transition hide-on-leave>
        <v-card v-if="dialog" append-icon="$close" class="mx-auto" elevation="16" max-width="500" title="Send a receipt">
            <template v-slot:append>
                <v-btn icon="$close" variant="text" @click="dialog = false"></v-btn>
            </template>

            <v-divider></v-divider>

            <div class="py-12 text-center">
                <div>This receipt was sent</div>
            </div>

            <v-divider></v-divider>

            <div class="pa-4 text-end">
                <v-btn class="text-none" color="medium-emphasis" min-width="92" rounded variant="outlined"
                    @click="dialog = false">
                    Close
                </v-btn>
            </div>
        </v-card>
    </v-fade-transition>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    const dialog = ref(true)
</script>