import Navigation from './components/Navigation'
import Feed from './components/Feed'
import Friends from './components/Friends'

function App() {

  return (
    <>
      <div className="flex min-h-screen w-full items-center justify-center md:flex-row">
        <main className="flex min-h-screen w-full">
          <Navigation />
          <Feed />
          <Friends />
        </main>
      </div>
    </>
  )
}

export default App
