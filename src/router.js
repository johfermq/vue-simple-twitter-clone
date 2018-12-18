import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './components/Home.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "register" */ './components/Auth/SignUpForm.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './components/Auth/LogInForm.vue')
    },
    {
      path: '/settings/profile',
      name: 'userprofilesettings',
      component: () => import(/* webpackChunkName: "userprofilesettings" */ './components/User/Settings/UserProfileSettings.vue')
    },
    {
      path: '/settings/password',
      name: 'userpasswordsettings',
      component: () => import(/* webpackChunkName: "userpasswordsettings" */ './components/User/Settings/UserPasswordSettings.vue')
    },
    {
      path: '/following',
      name: 'following',
      component: () => import(/* webpackChunkName: "following" */ './components/User/Profile/UsersFollowing.vue'),
    },
    {
      path: '/:username/following',
      name: 'usernamefollowing',
      component: () => import(/* webpackChunkName: "usernamefollowing" */ './components/User/Profile/UsersFollowing.vue'),
      props: true
    },
    {
      path: '/followers',
      name: 'followers',
      component: () => import(/* webpackChunkName: "followers" */ './components/User/Profile/UserFollowers.vue'),
    },
    {
      path: '/:username/followers',
      name: 'usernamefollowers',
      component: () => import(/* webpackChunkName: "usernamefollowers" */ './components/User/Profile/UserFollowers.vue'),
      props: true
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import(/* webpackChunkName: "favorites" */ './components/User/Profile/FavoriteTweets.vue'),
    },
    {
      path: '/:username/favorites',
      name: 'usernamefavorites',
      component: () => import(/* webpackChunkName: "usernamefavorites" */ './components/User/Profile/FavoriteTweets.vue'),
      props: true
    },
    {
      path: '/:username/status/:id',
      name: 'singletweet',
      component: () => import(/* webpackChunkName: "singletweet" */ './components/Tweet/SingleTweet.vue'),
      props: true
    },
    {
      path: '/:username',
      name: 'username',
      component: () => import(/* webpackChunkName: "username" */ './components/User/Profile/UserProfile.vue'),
      props: true
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
