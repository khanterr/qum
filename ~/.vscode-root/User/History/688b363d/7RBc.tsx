import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-64 py-24 bg-red-500">
      <div className="w-full">
        <header className="flex items-center justify-between bg-green-500 px-5 py-5">
          <div className="flex items-center">
            <div className="text-2xl">qum</div>
            <div>
              <input className="border-red-500" type="text" />
            </div>
          </div>
          <div>
            <Button primary>Sign In</Button>
            <Button secondary>Sign Up</Button>
          </div>
        </header>
      </div>
    </main>
  );
}