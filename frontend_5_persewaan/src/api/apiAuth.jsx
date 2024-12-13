import useAxios from ".";

const SignUp = async (data) => {
    try {
        const response = await useAxios.post("/register", data);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

const SignIn = async (data) => {
    try {
        const response = await useAxios.post("/login", data);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
const getUserProfile = async () => {
    try {
        const response = await useAxios.get("/profile");
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

const updateUserProfile = async (data) => {
    try {
        const response = await useAxios.put("/profile", data);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};


export { SignUp, SignIn, getUserProfile, updateUserProfile  };
