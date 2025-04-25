import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4 sm:ml-64">
        <h1 className="text-2xl font-bold">Main Content</h1>
      </main>
    </div>
  )
}

export default App
