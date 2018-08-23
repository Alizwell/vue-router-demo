import App   from '../App.vue'
import User  from '../components/User.vue'
import Nested  from  '../components/Nested.vue'
const Foo = {
  template: '<div>foo</div>'
}

const Bar = {
  template: '<div>bar</div>'
}


const UserPosts = {
  template: '<h3>UserPosts  {{$route.params}} </h3>'
}

const UserID = {
  template:"<h1>4444"+"<router-link to='profile' > profile </router-link>"+
    "<router-link to='posts' > posts </router-link>"+"</h1>"
}


const UserEmailsSubscriptions = {
  template: `
  <div>
    <h3>Email Subscriptions</h3>
  </div>
    `
}


const UserProfile = {
  	template: `
<div>
	<h3>Edit your profile</h3>
</div>
  `
}

const UserProfilePreview = {
  template: `
<div>
	<h3>Preview of your profile</h3>
</div>
  `
}

const  route = [{
  path:'/',
  component:App,
  children:[
    // {
    //   path:'nested',
    //   component:Nested
    // },
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
          path:'posts',
          component:UserPosts
        }
      ]
     },
     {
       path: '/settings',
       component: Nested,     
       children:[
         {
           path:'emails',
           component: UserEmailsSubscriptions
         },
         {
           path:'profile',
           components:{
             default: UserProfile,
             helper: UserProfilePreview
           }
         }
       ]  
     }
  ]
}]

export  default route;