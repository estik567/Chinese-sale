export function setCurUserName(userName) {
    return { type: 'setCurUserName', payload: userName }
}

export function setCurUserPass(userPass) {
    return { type: 'setCurUserPass', payload: userPass }
}

export function addUser(user) {
    return { type: 'addUser', payload: user }
}
export function  setCurUserSum(sum) {
    return { type: 'addToSum', payload:sum }
}