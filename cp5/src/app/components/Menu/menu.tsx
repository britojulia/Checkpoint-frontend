import Link from "next/link";

export default function Menu() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/temas/tema1">Teoria de Catástrofes Cósmicas</Link></li>
                <li><Link href="/temas/tema2">Tema1</Link></li>
                <li><Link href="/temas/tema3">As Guerras dos Deuses e Marte</Link></li>
                <li><Link href="/temas/demostracao">D</Link></li>
            </ul>
        </nav>
    )
}