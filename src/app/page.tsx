import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col gap-5 min-h-screen items-center justify-center bg-zinc-50 font- text-2xl dark:bg-black">
      <Link href={'/products'}>Go to characters</Link>
      <Link href={'/create-product'}>Create new character</Link>
    </div>
  );
}
