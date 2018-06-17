export default {
  default: '/',
  home: {
    name: 'home',
    url: '/',
    template: '<authapp-home></authapp-home>',
  },
  login: {
    name: 'login',
    url: '/login',
    template: '<authapp-login></authapp-login>',
  },
  profile: {
    name: 'profile',
    url: '/profile',
    template: '<authapp-profile></authapp-profile>',
  },
  instructor: {
    name: 'instructor',
    url: '/instructor',
    template: '<authapp-instructor></authapp-instructor>',
    data: { requiresLogin: true }
  },
  newInstructor: {
    name: 'new-instructor',
    url: '/new-instructor',
    template: '<authapp-new-instructor></authapp-new-instructor>',
    data: { requiresLogin: true }
  },
};
