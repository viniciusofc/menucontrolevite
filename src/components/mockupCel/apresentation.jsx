import { PhotoIcon } from '@heroicons/react/24/solid';

import imagemAtero from '../../../src/assets/image-atero.jpg';
import CurrencyFormat from '../../Functions/formatCurrency';

import React, { useState } from 'react'


const segments = [
    {
        "id": 1,
        "name": "Aperitivos",
        "selected": true
    },
    {
        "id": 2,
        "name": "Cortes",
        "selected": false
    },
    {
        "id": 4,
        "name": "Porções",
        "selected": false
    },
    {
        "id": 5,
        "name": "Saladas",
        "selected": false
    },
    {
        "id": 6,
        "name": "Infantil",
        "selected": false
    },
    {
        "id": 7,
        "name": "Bebidas",
        "selected": false
    },
    {
        "id": 8,
        "name": "Sobremesas",
        "selected": false
    },
    {
        "id": 10,
        "name": "Outros",
        "selected": false
    }]

const Apresentation = ({object}) => {
 
    return (
        <div className="xl:w-60 lg:w-40 h-full  relative rounded-3xl overflow-hidden shadow-lg border-4 border-gray-300">
            {/* Tela do celular */}
            <div className="bg-white h-full w-full ">
                <main className='mx-auto w-full bg-white' id='site-app'>
                    <section className='relative' id='image'>
                        <img className="object-cover h-32 w-full" src={imagemAtero} alt="Descrição da imagem" />

                    </section>
                    <section className='mx-auto w-full h-full bg-black mt-0'>
                        <div className='flex items-center w-full overflow-x-auto '>
                            <div class="flex items-stretch">
                                <div class="relative ml-2 flex w-full  items-stretch">
                                    {
                                        false &&
                                        <input
                                            type="search"
                                            class="relative m-0 block min-w-0 flex-auto rounded-full border border-solid border-withe 
                  bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] 
                  text-white outline-none transition duration-200 "
                                            placeholder="Pesquisar"
                                            aria-label="Search"

                                            aria-describedby="button-addon2" />
                                    }

                                    <span
                                        class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-white cursor-pointer"
                                        id="basic-addon2" >
                                        <svg q
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            class="h-5 w-5">
                                            <path
                                                fill-rule="evenodd"
                                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <ul role="list" class="flex">
                                {
                                    segments?.map(item => {
                                        return (
                                            <li class="flex justify-between  p-2 "  >
                                                <div class="flex min-w-0  cursor-pointer">
                                                    <div class="min-w-0 flex-auto">
                                                        <p class={`text-xs font-semibold  text-white ${item.selected && 'border-b-2'}`}>{item.name}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </section>
                    <section className=''>
                        {/* <ModalDetails isOpen={isOpen} onClose={closeModal} item={productSelect} /> */}
                        <div className='p-2 text-xs text-black font-semibold '>
                            <p>Buscou por: "{object.segmento}"</p>
                        </div>
                        <ul role="list" class="divide-y divide-gray-100" >

                            <li class="flex justify-between gap-x-2 p-2 hover:lg:bg-gray-100 cursor-pointer" >
                                <div class="flex min-w-0 gap-x-2" >
                                    <div class="h-16 w-16 flex-none  bg-gray-50">
                                        {
                                            object.urlimagem.length <= 0 ? <PhotoIcon className="h-full w-full object-cover rounded-md text-gray-300" aria-hidden="true" />
                                                :
                                                <img class="h-full w-full object-cover rounded-md" src={`${object.urlimagem}`} alt="" />
                                        }

                                    </div>
                                    <div class="min-w-0 flex-auto">
                                        <p class="text-xs font-semibold  text-gray-900">{object.nome} </p>
                                        <p class="text-xs  leading-5 text-gray-500 line-clamp-2 w-24 break-all">{object.submenu}</p>
                                        <p class="text-xs leading-5 text-gray-900 underline hover:font-semibold">Clique aqui... </p>
                                    </div>
                                </div>
                                <div class="flex items-center">
                                    <p class="text-xs leading-6 text-black font-semibold">{CurrencyFormat(object.preco)}</p>
                                </div>

                            </li>
                        </ul>
                    </section>
                </main>
            </div>
            {/* Botão home */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-800 w-24 h-1 rounded-full mb-4"></div>
        </div>
    )
}

export default Apresentation;
