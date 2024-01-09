export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-red-500 mx-10">
      <div>
        <header className="flex flex-row items-center justify-between bg-green-500">
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
