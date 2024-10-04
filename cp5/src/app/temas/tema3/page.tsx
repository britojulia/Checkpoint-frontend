import Layout from '../layout';
import Image from 'next/image';
import { ImagemSelecionada } from '@/app/types';

export default async function tema3() {
  const response = await fetch(`http://localhost:3000/api`);
  const imagens = await response.json();
  const imagem:ImagemSelecionada = imagens.find((img:ImagemSelecionada) => img.id == 3)
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-900 p-6">
        <h1 className="text-4xl font-bold mb-8">Marte, o Deus da Guerra Celestial</h1>
        <p className="text-lg max-w-3xl text-center">
         Assim como Vênus, Marte também teria se envolvido em batalhas cósmicas com a Terra. Velikovsky acreditava que Marte, em várias ocasiões, entrou em órbitas perigosamente próximas da Terra, causando enormes desastres e inspirando mitos de guerra e destruição.
        </p>
        <p className="mt-4 text-lg max-w-3xl text-center">
          Não por coincidência, Marte era adorado como o deus da guerra nas antigas civilizações, como os romanos e os gregos.
        </p>
        <p className="mt-4 text-lg max-w-3xl text-center">
          Velikovsky propôs que muitas das batalhas entre deuses, descritas na mitologia, eram representações simbólicas de interações planetárias.
        </p>
        <p className="mt-4 text-lg max-w-3xl text-center">
          Quando Marte se aproximava, havia tempestades, incêndios e grandes inundações. Os antigos interpretavam esses eventos como batalhas travadas nos céus, com os deuses lutando por poder e controle.
        </p>
        <div className="mt-8">
          <Image
          src={imagem.img} 
          alt="Ilustração de erro"
          width={500} 
          height={300}
          />
        </div>
      </div>
    </Layout>
  );
}
