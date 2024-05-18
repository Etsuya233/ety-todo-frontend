import axioss from "@/utils/axioss.js";

const AUTH_GATEWAY_PREFIX = "/auth";

export const loginPw = (data) => axioss({
    method: "post",
    url: `${AUTH_GATEWAY_PREFIX}/auth/login`,
    data: data
})