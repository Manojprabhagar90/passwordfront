import instance from "./instance";

const authServices = {
    forgot_password: async (data) => {
        return await instance.post('/forgot_password', data);
    },
    change_password: async (data) => {
        return await instance.get(`/reset_password/${data}`);
    },
    change_password_submit: async (data) => {
        return await instance.post(`/reset_password/reset_submit`,data);
    },
    register_submit: async (data) => {
        return await instance.post(`/register/register_submit`,data);
    },
    login: async (data) => {
        return await instance.post(`/login/login`,data);
    }
}

export default authServices;