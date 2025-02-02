import { createRouter, createWebHistory } from "vue-router";
import Mainpage from "../src/views/Mainpage.vue";
import Locker from "../src/views/Locker.vue"
import NotAvailable from "../src/views/NotAvailable.vue";
import Contact from "../src/views/Contact.vue";

const routes = [
    { path: '/', name: 'Mainpage', component: Mainpage },
    { path : '/Locker', name: 'Locker', component: Locker},
    { path : '/Cart', name:'Cart', component: NotAvailable},
    { path : '/Contact', name:'Contact', component: Contact}
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;