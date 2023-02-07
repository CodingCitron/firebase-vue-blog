/* 창 닫기, 크기 조절, 최소화 기능을 구현한다.  */
function Container (config) {
    Object.keys(config).forEach(key => {
        this[key] = config[key]
    })
}

export default Container