import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        alias: "/courses",
        name: "courses",
        component: () => import("./components/CoursesList")
    },
    {
        path: "/courses/:id",
        name: "course-details",
        component: () => import("./components/Course")
    },
    {
        path: "/add",
        name: "add",
        component: () => import("./components/AddCourse")
    }
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

export default router;