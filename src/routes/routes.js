import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/Dashboard.vue')
      },
      {
        path: '/icons',
        name: 'icons',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Icons.vue')
      },
      {
        path: '/accounts',
        name: 'accounts',
        component: () => import('../views/Pages/Account/AccountList')
      },
      {
        path: '/account/create',
        name: 'Create account',
        component: () => import('../views/Pages/Account/AccountCreate')
      },
      {
        path: '/tasks',
        name: 'tasks',
        component: () => import('../views/Pages/Task/TaskList')
      },
      {
        path: '/account/task/create',
        name: 'Create task',
        component: () => import('../views/Pages/Task/TaskCreate')
      },
      {
        path: '/extractors',
        name: 'extractors',
        component: () => import('../views/Pages/Extractor/ExtractorList')
      },
      {
        path: '/extractor/create',
        name: 'Create extractor',
        component: () => import('../views/Pages/Extractor/ExtractorCreate')
      },
      {
        path: '/users',
        name: 'users',
        component: () => import('../views/Pages/User/UserList')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/UserProfile.vue')
      },
      {
        path: '/maps',
        name: 'maps',
        component: () => import(/* webpackChunkName: "demo" */ '../views/GoogleMaps.vue')
      },
      {
        path: '/tables',
        name: 'tables',
        component: () => import(/* webpackChunkName: "demo" */ '../views/RegularTables.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
      },
      { path: '*', component: NotFound }
    ]
  }
];

export default routes;
