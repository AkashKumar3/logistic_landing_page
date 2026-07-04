import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Gallary } from './pages/gallary/gallary';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'gallary', component: Gallary },
    { path: 'contact', component: Contact }
];
