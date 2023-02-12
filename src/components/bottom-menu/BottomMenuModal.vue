<template>
  <app-modal
    :is-visible="isVisible"
    :modal-style="{
      // TODO: move to variable
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
      width: '80%',
      height: '80%',
      padding: '15px',
    }"
    :modal-mask-style="{
      // TODO: move to variable
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'end',
    }"
    @close="closeHandler"  
  >
    <template v-slot:body>
      bottom menu modal body
    </template>
  </app-modal>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

import { AppModal } from '@/components';

const emit = defineEmits(['close']);

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
})

const closeHandler = () => {
  emit('close');
}
</script>