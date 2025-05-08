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
import { ResourcesPage } from './components/Resources.tsx'
import { MigrationPage } from './components/Migration.tsx'
import { AimlPage } from './components/AIML.tsx'
import { ConfigPage } from './components/Config.tsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Layout children={[]}/>}>
      <Route path='' element={<OverviewPage/>} />
      <Route path='Overview' element={<OverviewPage/>} />
      <Route path='/Resources' element={<ResourcesPage/>} />
      <Route path='/Automation Center' element={<AutomationCenter/>} />
      <Route path='/AI/ML Hub' element={<AimlPage/>} />
      <Route path='/Observability' element={<ObservabilityPage/>} />
      <Route path='/Marketplace' element={<ObservabilityPage/>} />
      <Route path='/Compliance Center' element={<CompliancePage/>} />
      <Route path='/IAM' element={<IAMPage/>} />
      <Route path='/Backup & DR' element={<BackupDRPage/>} />
      <Route path='/Config Management' element={<ConfigPage/>} />
      <Route path='/Support Center' element={<BackupDRPage/>} />
      <Route path='/Notifications' element={<NotificationsPage/>} />
      <Route path='/Cost Management' element={<BackupDRPage/>} />
      <Route path='/Migration Toolkit' element={<MigrationPage/>} />
      <Route path='/Integrations' element={<IntegrationsPage/>} />

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
