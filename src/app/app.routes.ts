import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Gallary } from './pages/gallary/gallary';
import { DirectorMessagePage } from './pages/director-message-page/director-message-page';
import { Service } from './pages/service/service';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'gallary', component: Gallary },
    { path: 'contact', component: Contact },
    { path: 'director-message', component: DirectorMessagePage },
    { path: 'services', component: Service }
];
