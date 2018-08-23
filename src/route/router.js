import App   from '../App.vue'
import User  from '../components/User.vue'

const Foo = {
  template: '<div>foo</div>'
}

const Bar = {
  template: '<div>bar</div>'
}



const UserProfile = {
  template: '<h2>UserProfile  {{$route.params}} </h2>'
}

const UserPosts = {
  template: '<h3>UserPosts  {{$route.params}} </h3>'
}

const UserID = {
  template:"<h1>4444"+"<router-link to='profile' > profile </router-link>"+
    "<router-link to='posts' > posts </router-link>"+"</h1>"
}

const  route = [{
  path:'/',
  component:App,
  children:[
     {
       name:'foo',
       path: '/foo',
       component: Foo
     }, 
     {
       name:'bar',
       path: '/bar',
       component: Bar
     },
     {       
       path:'user/:id',
       component:User,
       children:[
        {
          path: '',
          component: UserID
        },
        {
          path: 'user/:id',
          component: UserID,
        },
        {
          path:'profile',
          component:UserProfile
        },
        {
          path:'posts',
          component:UserPosts
        }
      ]
     },
    //  {
    //    path:'/user/:id/post/:postid',
    //    component:User
    //  }
  ]
}]

export  default route;