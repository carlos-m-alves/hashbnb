import React from 'react'

const Item = () => {
  return (
    <a href='/' className='flex flex-col gap-4'>
        <img src="https://lojadec.com.br/wp-content/uploads/2018/10/quarto-pequeno-planejado-22-610x708-1.jpg" 
        alt="Imagem da acomodação"
        className='aspect-square rounded-2xl object-cover ' />
        <div>
            <h3 className='text-xl font-semibold'>Cabo Frio, Rio de Janeiro</h3>
            <p className='truncate text-gray-600'>blalal alblball abolasoas ksaoksakoasok askokosak osakokosakosakosa</p>            
        </div>

        <p><span className='font-semibold'>R$550</span> por noite</p>
    </a>
  )
}

export default Item