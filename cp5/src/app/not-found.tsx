import Image from 'next/image';
import { ImagemSelecionada } from '@/app/types';

export default async function NotFound() {
  const response = await fetch(`http://localhost:3000/api`);
  const imagens = await response.json();
  const imagem:ImagemSelecionada = imagens.find((img:ImagemSelecionada) => img.id == 5)
  
  return (
      <div>
        <Image
          src={imagem.img} 
          alt="Ilustração de erro"
          width={500} 
          height={300}
          />
      </div>
    )
  }