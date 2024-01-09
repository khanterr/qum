import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-64 py-24 bg-red-500">
      <div className="w-full">
        <header className="flex items-center justify-between bg-green-500 px-5 py-5">
          <div className="flex items-center">
            <div className="text-2xl mr-5">qum</div>
            <div>
              <input className="border-red-500" type="text" />
            </div>
          </div>
          <div>
            <Button primary>
              <Link href="signin">Sign In</Link>
            </Button>
            <Button secondary>
              <Link href="signup">Sign Up</Link>
            </Button>
          </div>
        </header>
      </div>
    </main>
  );
}
