<script setup>
import { ref, computed, onUnmounted } from 'vue'
import DraggableContainer from '../DraggableContainer.vue'

const props = defineProps({
    config: Object
})

const variable = {
    host: '',
    element: null,
    command: ''
}

const history = []
const command = {
    'login': {
        'message': ['input your id', 'input your password'],
    }
}

const host = ref(window.location.hostname)
const getHost = computed(() => host.value + '>')
const lines = ref([variable])

const nowSelectedLine = ref({
    host: '',
    element: null,
    command: ''
})

function focus(e, item) {
    const input = e.currentTarget.querySelector('.input-field')

    nowSelectedLine.value.host = ''
    nowSelectedLine.value.element = null
    nowSelectedLine.value.command = ''

    if(document.activeElement !== input) return
    input.focus()

    nowSelectedLine.value.host = item.host
    nowSelectedLine.value.element = item.element
    nowSelectedLine.value.command = item.command
}

function keydownHandler (e) {
    console.log(e.key)

    if(e.key === 'Enter') {
        console.log(nowSelectedLine.value)
    }
}
</script>
<template>
    <DraggableContainer 
        :config="config.getWrapConfig()"
        @close="e => config.close.call(config, e)"
    >
        <div 
            class="editor-view" 
            @keydown="keydownHandler"
        >
            <h4 class="head">Sangmin's Blog</h4>
            <div 
                class="editor-body"
            >
                <p 
                    class="line" 
                    v-for="item in lines"
                    @click="e => focus(e, item)"
                    :ref="target => item.element = target"
                >
                    <span>
                        {{ getHost }}
                    </span>
                    <span 
                        class="input-field"
                        contenteditable="true"
                    >
                        {{ item.command }}
                    </span>
                </p>
            </div>
        </div>
    </DraggableContainer>
</template>
