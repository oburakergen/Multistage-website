
export const state =  () => {
    return {
        _token: ''
    };
};

export const mutations = {
    setToken (state, data) {
        state._token = data;
    }
};
