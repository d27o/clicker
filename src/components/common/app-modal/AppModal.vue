<template>
  <div 
    v-if="isVisible" 
    class="modal-mask"
    :style="modalMaskStyle"
  >
    <div 
      class="modal"
      :style="modalStyle"
    >
      <div 
        class="modal__header"
        :style="headerStyle"
      >
        <slot name="header">
        </slot>
        <app-button 
          :button-config="closeButtonConfig"
          @click.prevent="close"
        />
      </div>
      <div 
        class="modal__body"
        :style="bodyStyle"
      >
        <slot name="body">
        </slot>
      </div>
      <div 
        class="modal__footer"
        :style="footerStyle"
      >
        <slot name="footer">
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { AppButton } from '@/components';
import { IAppButton } from '@/interfaces';

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
  modalMaskStyle: {
    type: Object,
    default: () => {
      return {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }  
    }
  },
  modalStyle: {
    type: Object,
    default: () => {
      return {
        width: '50%',
        height: '50%',
        padding: '15px',
      }
    }
  },
  headerStyle: {
    type: Object,
    required: false,
  },
  bodyStyle: {
    type: Object,
    required: false,
  },
  footerStyle: {
    type: Object,
    required: false,
  }
});

const emit = defineEmits(['close']);

const closeButtonConfig: IAppButton = {
  style: {
    width: '25px',
    height: '25px',
    position: 'absolute',
    right: '0',
    top: '0',
  },
  imgStyle: {
    width: '25px',
    height: '25px',
  },
  iconPath: 'clicker/icons/cross.svg' 
};

const close = () => {
  emit('close');
};
</script>

<style lang="scss" scoped>
.modal {
  z-index: 210;
  background-color: #ffffff;
  transition: opacity 0.3s ease;

  &-mask {
    position: absolute;
    z-index: 200;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.3s ease;
  }

  &__header {
    position: relative;
    min-height: 25px;
  }
}
</style>