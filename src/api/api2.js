import * as axios from "axios";

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "def74a82-d2ff-4139-af52-4693cff11c2a"
        }
    }
);

export const usersAPI2 = {
    getUsers2_2(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(response => {
            return response.data;
        });
    },
    notFollow(id = 1) {
        return instance.delete(`follow/${id}`,
        ).then(response => {
            return response.data;
        });
    },
    goFollow(id = 1) {
        return instance.post(`follow/${id}`,
        ).then(response => {
            return response.data;
        });
    }
}
