import http from "../http-common";

class CourseDataService {
    static getAll() {
        return http.get("/courses");
    }

    static get(id) {
        return http.get(`/courses/${id}`)
    }

    static create(data) {
        return http.post("/courses", data);
    }

    static update(id, data) {
        return http.put(`/courses/${id}`, data);
    }

    static delete(id) {
        return http.delete(`/courses/${id}`);
    }

    static deleteAll() {
        return http.delete("/courses")
    }

    static findByTitle(title) {
        return http.get(`/courses?title=${title}`);
    }
}

export default CourseDataService;
