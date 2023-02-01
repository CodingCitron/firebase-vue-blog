import DynamicTask from './DynamicTask'
import { toRaw } from 'vue'
import { useTaskStore } from '@/strores/task'
import { storeToRefs } from 'pinia'

function Button(config) {
    const { button } = config

    this.name = config.name
    this['task-info'] = config.task
    this['scope-component'] = button['scope-component']
    this['style'] = button.style
    this['icon-name'] = button['icon-name']
    this['option'] = button.option

    this.repository = new WeakMap()
    this.repository.set(this, [])

    this.init()
}

Button.prototype.click = function () {}

Button.prototype.rightClick = function () {}

Button.prototype.toggleHandler = function () {
    const array = this.repository.get(this)
    if(array.length === 1) array[0].toggle = !array[0].toggle
}

Button.prototype.setElement = function (element) {
    this.element = element
}

Button.prototype.getRepository = function () {
    return this.repository.get(this)
}

Button.prototype.getToggle = function () {
    if(this.repository.get(this).length !== 1) return
    return this.repository.get(this)[0].toggle
}

Button.prototype.init = function () {
    const { option, style } = this['task-info']
    if(option.created) this.createTask()
}

Button.prototype.createTask = function () {
    const taskStore = useTaskStore()
    const { tasks } = storeToRefs(taskStore)

    const array = this.repository.get(this)

    const task = new DynamicTask(
        this.name, 
        {
            name: this.name,
            ...this['task-info'],
            key: this,
        }
    )

    array.push(task)
    let count = tasks.value.push(task)

    console.log(array[0] === toRaw(tasks.value[count - 1]))
}

Button.prototype.removeTask = function (object) {
    const taskStore = useTaskStore()
    const { tasks } = storeToRefs(taskStore)

    // console.log(array[0] === task) // 같으면 지울 수 있다.
    // proxy는 어떻게 지울 것인가?

    // toRaw는 원본 객체를 가져올 수 있다.
    // 이것으로 어떤 객체를 삭제해야 할지 알 수 있다.
}

export default Button