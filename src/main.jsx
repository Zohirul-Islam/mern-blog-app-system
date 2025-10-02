
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './routes/Homepage.jsx'
import Loginpage from './routes/Loginpage.jsx'
import SignUpPage from './routes/SignUpPage.jsx'
import PostListPage from './routes/PostListPage.jsx'
import SinglePostPage from './routes/SinglePostPage.jsx'
import Write from './routes/Write.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

const router = createBrowserRouter([
  {
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Homepage/>
      },
      {
        path:"/login",
        element:<Loginpage/>
      },
      {
        path:"/register",
        element:<SignUpPage/>
      },
      {
        path:"/posts",
        element:<PostListPage/>
      },
      {
        path:"/:slug",
        element:<SinglePostPage/>
      },
            {
        path:"/write",
        element:<Write/>
      },
    ]
  },
])
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <RouterProvider router={router}/>
    </ClerkProvider>
)
