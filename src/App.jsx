import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import CurrencyFormat from './Functions/formatCurrency';
import imagemAtero from '../src/assets/image-atero.jpg'


function App() {
  const [dados, setDados] = useState([]);
  const [segments, setSegments] = useState([
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
    }])

  const [nome, setNome] = useState('Vazio...');
  const [segmento, setSegmento] = useState('Vazio...');
  const [submenu, setSubmenu] = useState('Vazio...');
  const [urlimagem, setUrlImagem] = useState('');
  const [detalhes, setDetalhes] = useState('Vazio...');
  const [preco, setPreco] = useState(0);


  return (
    <section className='mx-auto w-full h-full  bg-black'>
      <view className='flex mx-auto w-full h-5/6 justify-evenly'>
        
        <form className='w-3/5'>
          <div className="space-y-12 ">
            <div className="border-b border-gray-900/10 pb-12 ">
              <h2 className="text-3xl font-semibold leading-7 text-white font-sans mt-8">Cadastrar Produto</h2>
              <p className="mt-1 text-lg  text-white">Preencha todo o formulário e clique em finalizar.</p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-5">
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white">
                    Nome
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      onChange={(e) => setNome(e.target.value)}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-black font-semibold shadow-sm  ring-1 font-sans ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-lg sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="country" className="block text-sm font-medium leading-6 text-white">
                    Segmento
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      onChange={(e) => setSegmento(e.target.value)}
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-black font-semibold shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:max-w-xs sm:text-lg sm:leading-6"
                    >
                      <option>Entrada</option>
                      <option>Cortes</option>
                      <option>Bebidas</option>
                      <option>Sobremesas</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-5">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                    SubMenu
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="submenu"
                      name="submenu"
                      onChange={(e) => setSubmenu(e.target.value)}
                      type="text"
                      maxLength={244}
                      className="block w-full h-24 rounded-md border-0 py-1.5 text-black font-semibold shadow-sm  ring-1 font-sans ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-lg sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-5">
                  <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-white">
                    URL Imagem
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      onChange={(e) => setUrlImagem(e.target.value)}
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-black font-semibold shadow-sm  ring-1 font-sans ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-lg sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="region" className="block text-sm font-medium leading-6 text-white">
                    Detalhes
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      onChange={(e) => setDetalhes(e.target.value)}
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 text-black font-semibold shadow-sm  ring-1 font-sans ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-lg sm:leading-6"
                    />
                  </div>
                </div>


                <div className="sm:col-span-1">
                  <label htmlFor="region" className="block text-sm font-medium leading-6 text-white">
                    Preço
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      name="region"
                      id="region"
                      onChange={(e) => setPreco(Number(e.target.value))}
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 text-black font-semibold shadow-sm  ring-1 font-sans ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-lg sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end gap-x-6 sm:col-span-1">
                <button type="button" className="text-sm font-semibold leading-6 text-white">
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Finalizar
                </button>
              </div>
            </div>
          </div>


        </form>
        <div className="flex flex-col object-cover justify-center items-center ">
          <p className='text-white text-lg mb-2'>Modo Apresentação</p>
          <div className="w-64 h-4/5  relative rounded-3xl overflow-hidden shadow-lg border-4 border-gray-300">
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
                    <p>Buscou por: "{segmento}"</p>
                  </div>
                  <ul role="list" class="divide-y divide-gray-100" >

                    <li class="flex justify-between gap-x-2 p-2 hover:lg:bg-gray-100 cursor-pointer" >
                      <div class="flex min-w-0 gap-x-2" >
                        <div class="h-16 w-16 flex-none  bg-gray-50">
                          {
                            urlimagem.length <= 0 ? <PhotoIcon className="h-full w-full object-cover rounded-md text-gray-300" aria-hidden="true" />
                              :
                              <img class="h-full w-full object-cover rounded-md" src={`${urlimagem}`} alt="" />
                          }

                        </div>
                        <div class="min-w-0 flex-auto">
                          <p class="text-xs font-semibold  text-gray-900">{nome} </p>
                          <p class=" text-xs lg:text-xs leading-5 text-gray-500 line-clamp-3 ">{submenu}</p>
                          <p class=" text-xs leading-5 text-gray-900 underline hover:font-semibold">Clique aqui... </p>
                        </div>
                      </div>
                      <div class="flex items-center">
                        <p class="text-xs leading-6 text-black font-semibold">{CurrencyFormat(preco)}</p>
                      </div>

                    </li>
                  </ul>
                </section>
              </main>
            </div>
            {/* Botão home */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-800 w-24 h-2 rounded-full mb-4"></div>
          </div>
        </div>
      </view>
    </section >

  );
}

export default App;
