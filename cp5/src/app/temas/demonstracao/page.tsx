import Layout from '../layout';

export default function demonstracao() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-900 p-6">
        <h1 className="text-4xl font-bold mb-8">Ideias de Mundos em Colisão</h1>
        <p className="text-lg max-w-3xl text-center">
          Immanuel Velikovsky foi uma das figuras mais controversas do século XX no campo da ciência. Embora treinado como médico e psicanalista, ele se tornou famoso por suas teorias revolucionárias sobre catástrofes cósmicas que moldaram a história da Terra e da humanidade. Seu livro mais famoso, <em>Worlds in Collision</em> (1950), propôs que eventos astronômicos catastróficos, como colisões e interações entre planetas, causaram profundas mudanças na geologia, no clima e até nas culturas humanas.
        </p>
        <p className="mt-4 text-lg max-w-3xl text-center">
          Velikovsky acreditava que, em tempos antigos, planetas como Vênus e Marte não seguiam as órbitas estáveis que conhecemos hoje. Ele propôs que Vênus, antes de se tornar o planeta que vemos no céu noturno, era um cometa que foi expelido de Júpiter. Em sua trajetória instável pelo Sistema Solar, Vênus teria passado perigosamente perto da Terra, causando uma série de desastres globais.
        </p>
        <p className="mt-4 text-lg max-w-3xl text-center">
          Esses eventos, de acordo com Velikovsky, foram documentados por civilizações antigas em seus mitos, textos religiosos e lendas. Ele acreditava que muitas histórias, como as pragas do Egito e a travessia do Mar Vermelho descritas na Bíblia, eram, na verdade, registros de catástrofes causadas por interações gravitacionais entre a Terra e Vênus.
        </p>
        <p className="mt-4 text-lg max-w-3xl text-center">
          Além de Vênus, Velikovsky também mencionou Marte em suas teorias, acreditando que ele também passou por órbitas erráticas, causando guerras e desastres que inspiraram mitos de batalhas entre deuses, como Ares e Marte, deuses da guerra. Em sua visão, os eventos astronômicos não apenas afetaram a física do planeta, mas também moldaram as crenças e culturas das civilizações antigas.
        </p>
        <p className="mt-4 text-lg max-w-3xl text-center">
          Apesar de suas teorias serem rejeitadas por grande parte da comunidade científica, Velikovsky continua a inspirar debates até hoje. Ele questionou a separação entre ciência e mitologia, propondo que ambos os campos poderiam oferecer insights sobre a história do nosso planeta.
        </p>
        <div className="mt-8">
          <img
            src="https://example.com/velikovsky-ideas.jpg" 
            alt="Ilustração de Velikovsky e suas ideias sobre catástrofes cósmicas"
            className="rounded-lg"
          />
        </div>
      </div>
    </Layout>
  );
}
