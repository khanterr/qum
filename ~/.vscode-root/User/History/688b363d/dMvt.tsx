export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <header className="flex flex-row items-center">
          <div className="text-2xl">
            QUM
          </div>
          <div>
            <input className="border-red-500" type="text" />
          </div>
          <div>
            <button>Sign In</button>
            <button>Sign Up</button>
          </div>
        </header>
      </div>
    </main>
  )
}