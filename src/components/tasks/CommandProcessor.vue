<script setup>
import { onUnmounted } from 'vue'
import DraggableContainer from '../DraggableContainer.vue'
import Container from '../services/Container'

const props = defineProps({
    config: Object
})

console.log(props.config)

const config = {
    header: {
        style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '30px',
            fontSize: '12px',
            padding: '0 8px'
        },
        className: 'header',
        title: '명령 프롬프트',
        iconName: 'terminal-icon.png'
    },
    style: {
        ...props.config.style,
        borderRadius: '4px',
        overflow: 'hidden',
    },
    className: 'command-prompt-container',
}

const container = new Container(config)
// props.config 인스턴스를 container로 넘겨주고 close 기능을 연결시킨다.
// config는 따로 주고
// new task에 container를 인스턴스를 만들고 draggblecontainer에 해당
// 인스턴스를 전달한다
// container 인스턴스는 닫기 최소화 최대화 기능을 사용한다. 
</script>
<template>
    <DraggableContainer 
        :config="container"
    >
        <div class="editor-view">

        </div>
    </DraggableContainer>
</template>
