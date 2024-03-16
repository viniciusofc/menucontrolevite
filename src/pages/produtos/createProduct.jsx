
import React, { useState } from 'react';
import Apresentation from '../../components/mockupCel/index';
import Table from '../../components/table';

const formData = {
    nome: 'Vazio',
    segmento: 'Vazio',
    submenu: 'Vazio',
    urlimagem: '',
    detalhes: 'Vazio',
    preco: 0

}

const CreateProduct = () => {
    const [object, setObject] = useState(formData);
    const [isOpen, setIsOpen] = useState(false);

    const updateFielHandler = (key, value) => {
        setObject((prev) => {
            return { ...prev, [key]: value }
        })
    }

    const handleChange = (name) => async (event) => {
        updateFielHandler(`${name}`, event.target.value)

    };

    return (
        <div className="h-screen flex-1 bg-gray-200">
            {
                !isOpen ?
                    <Table >
                        <div className='flex flex-row justify-between w-full h-16 text-gray-500 bg-zinc-200'>
                            <section className='w-96 h-full'>
                                <div class='max-w-md mx-auto'>
                                    <div class="relative flex items-center w-full rounded-full focus-within:shadow-lg bg-white overflow-hidden">
                                        <div class="grid place-items-center h-full w-12 text-gray-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </div>

                                        <input
                                            class="h-full w-full outline-none text-sm text-gray-700 pr-2 border-none"
                                            type="text"
                                            id="search"
                                            placeholder="Buscar.." />
                                    </div>
                                </div>
                            </section>
                            <section className='bg-green h-full items-center '>
                                <button onClick={() => setIsOpen(!isOpen)} class="w-full bg-black hover:bg-gray-900 gap-2 text-gray-200 py-2 px-6 rounded-full inline-flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>

                                    <span className='text-sm'>Criar Produto</span>
                                </button>
                            </section>
                        </div>
                    </Table>
                    :
                    <section className='mx-auto w-full h-full'>
                        <view className='flex mx-auto w-full h-5/6 justify-evenly'>

                            <form className='w-3/5'>
                                <div className="space-y-8 ">
                                    <div className="border-b border-gray-900/10 pb-12 ">
                                        <h2 className="text-3xl font-semibold leading-7 text-black font-sans mt-8">Cadastrar Produto</h2>
                                        <p className="mt-1 text-lg  text-black">Preencha todo o formulário e clique em finalizar.</p>

                                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-5">
                                            <div className="sm:col-span-3">
                                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-black">
                                                    Nome
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="first-name"
                                                        id="first-name"
                                                        onChange={handleChange('nome')}
                                                        autoComplete="given-name"
                                                        className="block w-full rounded-md border-0 py-1.5 text-black font-semibold shadow-sm  ring-1 font-sans ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-lg sm:leading-6"
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label htmlFor="country" className="block text-sm font-medium leading-6 text-black">
                                                    Segmento
                                                </label>
                                                <div className="mt-2">
                                                    <select
                                                        id="country"
                                                        name="country"
                                                        onChange={handleChange('segmento')}
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
                                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
                                                    SubMenu
                                                </label>
                                                <div className="mt-2">
                                                    <textarea
                                                        id="submenu"
                                                        name="submenu"
                                                        onChange={handleChange('submenu')}
                                                        type="text"
                                                        maxLength={244}
                                                        className="block w-full h-24 rounded-md border-0 py-1.5 text-black font-semibold shadow-sm  ring-1 font-sans ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-lg sm:leading-6"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-span-5">
                                                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-black">
                                                    URL Imagem
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="street-address"
                                                        id="street-address"
                                                        onChange={handleChange('urlimage')}
                                                        autoComplete="street-address"
                                                        className="block w-full rounded-md border-0 py-1.5 text-black font-semibold shadow-sm  ring-1 font-sans ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-lg sm:leading-6"
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-4">
                                                <label htmlFor="region" className="block text-sm font-medium leading-6 text-black">
                                                    Detalhes
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="region"
                                                        id="region"
                                                        onChange={handleChange('detalhes')}
                                                        autoComplete="address-level1"
                                                        className="block w-full rounded-md border-0 py-1.5 text-black font-semibold shadow-sm  ring-1 font-sans ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-lg sm:leading-6"
                                                    />
                                                </div>
                                            </div>


                                            <div className="sm:col-span-1">
                                                <label htmlFor="region" className="block text-sm font-medium leading-6 text-black">
                                                    Preço
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="number"
                                                        name="region"
                                                        id="region"
                                                        onChange={handleChange('preco')}
                                                        autoComplete="address-level1"
                                                        className="block w-full rounded-md border-0 py-1.5 text-black font-semibold shadow-sm  ring-1 font-sans ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-lg sm:leading-6"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6 flex items-center justify-end gap-x-6 sm:col-span-1">
                                            <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-sm font-semibold leading-6 text-black">
                                                Cancelar
                                            </button>
                                            <button
                                                type="submit"
                                                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                            >
                                                Finalizar
                                            </button>
                                        </div>
                                    </div>
                                </div>


                            </form>
                            <div className="flex flex-col object-cover justify-center items-center ">
                                <p className='text-black text-lg mb-2 mt-10'>Modo Apresentação</p>
                                <Apresentation object={object} />
                            </div>
                        </view>
                    </section >
            }
        </div>
    )
}

export default CreateProduct
