import http from "../http-common";

export const getAllStudents = () => {
    return http.get("/students");
};

export const getStudent = (id) => {
    return http.get(`/students/${id}`);
};

export const createStudent = (data) => {
    return http.post("/students", data);
};

export const updateStudent = (id, data) => {
    return http.put(`/students/${id}`, data);
};

export const removeStudent = (id) => {
    return http.delete(`/students/${id}`);
};

