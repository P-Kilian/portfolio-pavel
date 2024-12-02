import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex place-content-around">
      <div>PK.</div>
      <ul className="flex gap-4">
        <li>
          <Link href="#email">Email</Link>
        </li>
        <li>
          <Link href="#LinkedIn">LinkedIn</Link>
        </li>
        <li>
          <Link href="#Github">Github</Link>
        </li>
      </ul>
    </footer>
  );
}
