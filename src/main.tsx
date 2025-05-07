import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import Layout from './Layout.tsx'
import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import OverviewPage from './components/Overview.tsx'
import IAMPage from './components/Iam.tsx'
import CompliancePage from './components/Compliance.tsx'
import  { AutomationCenter } from './components/Automation.tsx'
import { BackupDRPage } from './components/Backup.tsx'
import IntegrationsPage from './components/Integrations.tsx'
import { NotificationsPage } from './components/Notifications.tsx'
import { ObservabilityPage } from './components/Observability.tsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Layout children={[]}/>}>
      <Route path='' element={<OverviewPage/>} />
      <Route path='Overview' element={<OverviewPage/>} />
      <Route path='/IAM' element={<IAMPage/>} />
      <Route path='/Compliance' element={<CompliancePage/>} />
      <Route path='/Automation' element={<AutomationCenter/>} />
      <Route path='/Backup' element={<BackupDRPage/>} />
      <Route path='/Integrations' element={<IntegrationsPage/>} />
      <Route path='/Notifications' element={<NotificationsPage/>} />
      <Route path='/Observability' element={<ObservabilityPage/>} />

    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Layout children={[]}/> */}
    <RouterProvider router={router}/>
  </StrictMode>
)
