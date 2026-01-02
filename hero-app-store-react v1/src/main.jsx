import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, redirect } from 'react-router'
import page1 from './components/tests/page1.jsx'
import page2 from './components/tests/page2.jsx'
import page3 from './components/tests/page3.jsx'
import Home from './components/pages/Home.jsx'
import axios from 'axios'
import AllApps from './components/pages/AllApps.jsx'
import AppDetailsPage from './components/pages/AppDetailsPage.jsx'
import PageDoesNotExist from './components/pages/PageDoesNotExist.jsx'
import AppNotFound from './components/pages/AppNotFound.jsx'
import InstalledAppsPage from './components/pages/InstalledAppsPage.jsx'



const router = createBrowserRouter([
  { 
    path: '/', 
    Component: App,
    children: [
      { index: true, 
        loader: async () => {
          const res = await axios.get('/app-list.json');
          return { appData: res.data };
        },
        Component: Home },
      { 
        path: 'allApps', 
        loader: async () => {
          const res = await axios.get('/app-list.json');
          return { appData: res.data };
        },
        Component: AllApps
      },
      {path: 'app/:appId',
       loader : async({params}) => {
        const res = await axios.get('/app-list.json');
        const app = res.data.find((a)=> a.id == params.appId);
        if (!app) {
          return redirect('/app-not-found');
        }
        return { app };
       },
       Component: AppDetailsPage
      },
      { path: 'app-not-found', Component: AppNotFound },
      { 
        path: 'installedApps', 
        loader: async () => {
          const res = await axios.get('/app-list.json');
          return { appData: res.data };
        },
        Component: InstalledAppsPage 
      },
      { path: '*', Component: PageDoesNotExist }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
