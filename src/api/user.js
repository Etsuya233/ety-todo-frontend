import axioss from "@/utils/axioss.js";

const USER_GATEWAY_PREFIX = "/user";

export const getUserById = async (userId) => {
    return axioss({
        method: "get",
        url: `${USER_GATEWAY_PREFIX}/user`,
        params: {
            id: userId
        }
    })
}

export const getCurrentUser = async() => {
    return axioss({
        method: "get",
        url: `${USER_GATEWAY_PREFIX}/user/current`
    })
}