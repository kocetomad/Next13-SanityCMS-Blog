import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src={
              "https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png"
            }
            width={50}
            className="rounded-full"
            height={50}
            alt="logo"
          />
        </Link>
        <h1>Next 13 Blog</h1>
      </div>
      <div>
        <Link
          href="https://nextjs.org/docs/getting-started"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
        >Explore the Next 13 DOCS</Link>
      </div>
    </header>
  );
}
