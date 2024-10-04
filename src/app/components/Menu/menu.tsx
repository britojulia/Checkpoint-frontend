import Link from "next/link";

export default function Menu() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/temas/tema1">Tema1</Link></li>
            </ul>
        </nav>
    )
}