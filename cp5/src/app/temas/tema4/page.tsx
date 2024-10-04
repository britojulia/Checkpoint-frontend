import Layout from '../layout'; 

export default function Tema4() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-900 p-6">
        <h1 className="text-4xl font-bold mb-8">Teoria de Catástrofes Cósmicas</h1>
        <p className="text-lg max-w-3xl text-center">
          A Teoria de Catástrofes Cósmicas de Velikovsky sugere que eventos astronômicos de grandes proporções influenciaram a Terra em tempos históricos. Sua teoria propõe que encontros próximos entre a Terra e planetas como Vênus e Marte causaram cataclismos globais, afetando profundamente a história humana e a geologia do planeta.
        </p>
        <p className="mt-4 text-lg max-w-3xl text-center">
          Velikovsky acreditava que esses eventos eram responsáveis por fenômenos como a interrupção da rotação da Terra, terremotos massivos, tsunamis e mudanças climáticas radicais.
        </p>
        <p className="mt-4 text-lg max-w-3xl text-center">
          Ele se baseou em textos antigos, mitos e lendas para sustentar suas hipóteses. Para Velikovsky, esses relatos culturais e religiosos, encontrados em civilizações de todo o mundo, eram registros de eventos astronômicos reais que impactaram a Terra.
        </p>
        <p className="mt-4 text-lg max-w-3xl text-center">
          Um dos exemplos mais notáveis é a ideia de que o planeta Vênus foi ejetado de Júpiter e, em sua trajetória inicial, passou perto da Terra, causando uma série de catástrofes naturais. Esse evento, segundo ele, foi registrado em textos como a Bíblia, onde fenômenos como o "sol parado" durante a batalha de Josué seriam descrições de uma interrupção temporária da rotação da Terra.
        </p>
        <p className="mt-4 text-lg max-w-3xl text-center">
          As teorias de Velikovsky foram fortemente criticadas pela comunidade científica por violar as leis da física, especialmente a mecânica celeste. No entanto, sua abordagem inovadora ao integrar história, mitologia e ciência provocou um grande debate e mantém um nicho de defensores até hoje.
        </p>
        <div className="mt-8">
          <img
            src="https://example.com/teoria1.jpg" 
            alt="Ilustração da teoria de Velikovsky"
            className="rounded-lg"
          />
        </div>
      </div>
    </Layout>
  );
}