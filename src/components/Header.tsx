import Link from "next/link"
import "../style/header.css"

export default function Header(){
    return (
        <div className="header-box">
  <div className="header-content">
    <h1>Sibtain's Portfolio</h1>
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/project">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </div>
</div>
    )
}