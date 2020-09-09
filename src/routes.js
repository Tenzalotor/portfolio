import Home from './components/Home.vue';
import Samples from './components/samples/Samples.vue';
import Offer from './components/offer/Offer.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/samples', component: Samples },
    { path: '/offer', component: Offer }
];