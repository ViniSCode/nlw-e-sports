import * as Dialog from '@radix-ui/react-dialog';
import { MagnifyingGlassPlus } from 'phosphor-react';

export function CreateAdBanner () {
  return (
    <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8'> 
      <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
        <div>
          <strong className='text-2xl block text-white font-black'>Não encontrou seu duo</strong>
          <span className='text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
        </div>

        <Dialog.Trigger className='px-4 py-4 bg-violet-500 text-white rounded transition-colors hover:bg-violet-600 flex items-center gap-3'>
          <MagnifyingGlassPlus size={24}/>
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  )
}