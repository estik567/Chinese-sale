export function addItem(item) {
    return { type: 'addItem', payload: item }
}
export function setItem(item) {
    return { type: 'setItem', payload: item }
}
