<script setup>
import { ref, computed, onUnmounted } from 'vue'
import DraggableContainer from '../DraggableContainer.vue'

const props = defineProps({
    config: Object
})

const host = ref(window.location.hostname)
const getHost = computed(() => host.value + '>')

const lines = ref([])
const nowSelectedLine = ref({
    
})

function focus(e) {
    const input = e.currentTarget.querySelector('.input-field')

    if(document.activeElement !== input) return
    input.focus()
}
</script>
<template>
    <DraggableContainer 
        :config="config.getWrapConfig()"
        @close="e => config.close.call(config, e)"
    >
        <div class="editor-view">
            <h4 class="head">Sangmin's Blog</h4>
            <div 
                class="editor-body"
            >
                <p class="line" @click="focus">
                    <span>{{ getHost }}</span>
                    <span 
                        class="input-field"
                        contenteditable="true"
                    >
                        
                    </span>
                </p>
            </div>
        </div>
    </DraggableContainer>
</template>
