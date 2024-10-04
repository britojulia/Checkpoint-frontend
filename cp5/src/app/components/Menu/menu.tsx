import Link from "next/link";

export default function Menu() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/temas/tema1">Quem foi? </Link></li>
                <li><Link href="/temas/tema2">Tema1</Link></li>
                <li><Link href="/temas/tema3">Tema1</Link></li>
                <li><Link href="/temas/demostracao">D</Link></li>
            </ul>
        </nav>
    )
}