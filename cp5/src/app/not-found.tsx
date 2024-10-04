import React from 'react';
import Image from 'next/image';

export default function NotFound() {
    return (
      <div>
        <Image 
        src="/imagens/error.jpg" 
        alt="Ilustração de erro"
        width={500} 
        height={300}
      />
      </div>
    )
  }