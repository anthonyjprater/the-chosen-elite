import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUs from '../views/AboutUs.vue'
import TrainingPrograms from '../views/TrainingPrograms.vue'
import AmateurTraining from '../components/programs/AmateurTraining.vue'
import YouthTraining from '../components/programs/YouthTraining.vue'
import ProfessionalTraining from '../components/programs/ProfessionalTraining.vue'
import TeamCoaches from '@/views/TeamCoaches.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about-us',
      props: true,
      component: AboutUs,
    },
    {
      path: '/coaches/',
      name: 'team-coaches',
      props: true,
      component: TeamCoaches, 
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'youth',
          name: 'youth',
          component: YouthTraining,
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'amateur',
          name: 'amateur',
          component: AmateurTraining,
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'professional',
          name: 'professional',
          component: ProfessionalTraining,
        },
      ],
    },
    {
      path: '/training/',
      name: 'training-programs',
      props: true,
      component: TrainingPrograms, 
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'youth',
          name: 'youth',
          component: YouthTraining,
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'amateur',
          name: 'amateur',
          component: AmateurTraining,
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'professional',
          name: 'professional',
          component: ProfessionalTraining,
        },
      ],
    },
    {
      path: '/apply',
      name: 'apply-form',
      component: () => import('../views/ApplyForm.vue'),
    },
    {
      path: '/references',
      name: 'references',
      component: () => import('@/views/ReferencesList.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
    },
    {
      path: '/training_grounds',
      name: 'training-grounds',
      component: () => import('@/views/TrainingGrounds.vue'),
    },
    {
      path: '/photo_gallery',
      name: 'photo-gallery',
      component: () => import('@/views/GalleryView.vue'),
    },
    {
      path: '/news',
      name: 'latest-news',
      component: () => import('@/views/LatestNews.vue'),
    },
  ],
})

export default router
