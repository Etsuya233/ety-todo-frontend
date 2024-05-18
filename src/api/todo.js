import axioss from "@/utils/axioss.js";

const TODO_GATEWAY_PREFIX = "/todo";

export const addTodo = async (data) => {
    return axioss({
        method: "post",
        url: `${TODO_GATEWAY_PREFIX}/todo`,
        data: data
    })
}

export const todoPage = async (data) => {
    return axioss({
        method: "get",
        url: `${TODO_GATEWAY_PREFIX}/todo/page`,
        params: data
    })
}