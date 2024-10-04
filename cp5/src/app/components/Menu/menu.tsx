import Link from "next/link";

export default function Menu() {
  return (
    <nav className="flex justify-center">
      <ul className="flex space-x-8">
        <li><Link href="/" className="text-white hover:text-gray-400">Home</Link></li>
        <li><Link href="/temas/tema1" className="text-white hover:text-gray-400">Teoria de Catástrofes Cósmicas</Link></li>
        <li><Link href="/temas/tema2" className="text-white hover:text-gray-400">Vênus, O Planeta que Nasceu do Caos</Link></li>
        <li><Link href="/temas/tema3" className="text-white hover:text-gray-400">As Guerras dos Deuses e Marte</Link></li>
        <li><Link href="/temas/demonstracao" className="text-white hover:text-gray-400">Ideias de Mundos em Colisão </Link></li>
      </ul>
    </nav>
  );
}
