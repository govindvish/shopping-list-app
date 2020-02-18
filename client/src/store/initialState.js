export default {
    list: {
        items: [],
        loading: false,
    },
    error: {
        msg: {},
        status: null,
        id: null
    },
    auth: {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        isLoading: false,
        user: null
    }
}