export const addProduct = () => {
    return {type:"add"}
}
export const delProduct = () => {
    return {type:"del"}
}

export const addLog = (log) => {
    return {type:"addLog",newLog:log}
}