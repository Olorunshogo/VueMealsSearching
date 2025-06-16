import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DefaultLayout from '@/components/DefaultLayout.vue'
import CustomLayout from '@/components/CustomLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    // Default Layout
    {
      path: '/',
      component: DefaultLayout,
      children: [

        {
          path: '/home',
          name: 'home',
          component: HomeView,
        },

        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue'),
        },

        {
          path: '/by-name/:name?',
          name: 'byName',
          component: () => import('../views/MealsByName.vue'),
        },

        {
          path: '/ingredients/:ingredients?',
          name: 'byIngredients',
          component: () => import('../views/MealsByIngredients.vue'),
        },

        {
          path: '/letter/:letter?',
          name: 'byLetter',
          component: () => import('../views/MealsByLetter.vue'),
        },

        // Meal Details
        {
          path: '/meal/:id',
          name: 'mealDetails',
          component: () => import('../views/MealDetails.vue'),
        }
      ]

    },

    // Custom Layout
    {
      path: '/auth',
      component: CustomLayout,
      children: [

      ]
    }

    

  ],
})

export default router
