import Layout from '../layout';

export default function demonstracao() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-900 p-6">
        <h1 className="text-4xl font-bold mb-8">A Reinterpretação da História Humana e da Geologia</h1>
        <p className="text-lg max-w-3xl text-center">
          Immanuel Velikovsky não apenas propôs que eventos cósmicos catastróficos moldaram a história da humanidade, mas também sugeriu que esses mesmos eventos alteraram drasticamente a geologia da Terra. Ele acreditava que grandes mudanças geológicas, como terremotos massivos, erupções vulcânicas e deslocamentos continentais, ocorreram de maneira súbita devido às interações planetárias.
        </p>
        <p className="mt-4 text-lg max-w-3xl text-center">
          Para Velikovsky, as teorias geológicas tradicionais, como a tectônica de placas e a lenta erosão de montanhas ao longo de milhões de anos, não explicavam adequadamente certas formações geológicas e depósitos fósseis encontrados ao redor do mundo. Ele argumentou que muitas dessas formações foram o resultado de eventos cataclísmicos globais, como a aproximação de Vênus ou Marte, que causaram forças gravitacionais extremas, impactando a crosta terrestre.
        </p>
        <p className="mt-4 text-lg max-w-3xl text-center">
          Em vez de longos períodos de evolução gradual, Velikovsky defendia uma "geologia catastrofista", onde mudanças repentinas e destrutivas teriam remodelado a superfície do planeta em curtos períodos de tempo. Ele também sugeriu que as extinções em massa, como a dos dinossauros, poderiam estar relacionadas a esses eventos cósmicos e não apenas a impactos de asteroides ou erupções vulcânicas.
        </p>
        <p className="mt-4 text-lg max-w-3xl text-center">
          Essa visão desafiava profundamente o entendimento científico da época, e mesmo hoje em dia, continua a suscitar debates entre geólogos e historiadores que discutem a possibilidade de eventos cataclísmicos terem desempenhado um papel maior na evolução da Terra do que se pensava anteriormente.
        </p>
        <div className="mt-8">
          <img
            src="https://example.com/geologia-catastrofista.jpg" 
            alt="Ilustração sobre as teorias geológicas de Velikovsky"
            className="rounded-lg"
          />
        </div>
      </div>
    </Layout>
  );
}
