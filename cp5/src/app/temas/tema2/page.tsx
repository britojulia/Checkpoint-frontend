import Image from 'next/image';

export default async function Tema2(){

    const response = await fetch('http://localhost:3000/api');
    const imagens = await response.json();

    return (
        <div>
            <h1>Vênus, O Planeta que Nasceu do Caos</h1>
            <p>Segundo Velikovsky, Vênus não era o planeta calmo e brilhante que vemos hoje à noite. Em vez disso, era um cometa recém-nascido, ejetado das profundezas de Júpiter, vagando pelo Sistema Solar em uma órbita caótica. O caos começou quando esse cometa passou perigosamente perto da Terra, desencadeando desastres naturais em todo o planeta. Velikovsky ligou o surgimento de Vênus a eventos históricos, como as Pragas do Egito e a separação do Mar Vermelho, ambos retratados no Êxodo. Ele sugeriu que o que muitas vezes é descrito como milagres religiosos eram, na verdade, consequências de interações celestiais.
            Segundo ele, Vênus causou terremotos, erupções vulcânicas e tempestades de fogo, deixando as civilizações antigas em choque e terror, documentando essas catástrofes em textos sagrados como a Bíblia.
            </p>
            <Image
        src={imagens[0].src} 
        alt="Ilustração de erro"
        width={500} 
        height={300}
        />
        </div>
    )
}