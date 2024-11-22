import Link from "next/link";

export default function HomePage() {
    return (
        <main className="flex min-h-screen flex-col items-center gap-8 py-6 px-2 md:p-24">
            <h1>Welcome, this is <u>Home</u> page</h1>
            <div className="flex gap-2">
                <Link href='/'>
                    <b>Back to Main page</b>
                </Link>
                -
                <Link href='/about'>
                    <b>Going to About page</b>
                </Link>
            </div>
        </main>
    );
  }
  