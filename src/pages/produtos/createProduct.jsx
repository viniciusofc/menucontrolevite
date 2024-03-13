
import React, { useState } from 'react';
import Apresentation from '../../components/mockupCel/index';

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

    const updateFielHandler = (key, value) => {
        setObject((prev) => {
            return { ...prev, [key]: value }
        })
    }

    const handleChange = (name) => async (event) => {
        updateFielHandler(`${name}`, event.target.value)

    };

    return (
        <div className="h-screen flex-1 p-7">
            <section className='mx-auto w-full h-full'>
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
                                                onChange={handleChange('nome')}
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
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
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
                                        <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-white">
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
                                        <label htmlFor="region" className="block text-sm font-medium leading-6 text-white">
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
                                        <label htmlFor="region" className="block text-sm font-medium leading-6 text-white">
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
                        <Apresentation object={object}/>
                    </div>
                </view>
            </section >
        </div>
    )
}

export default CreateProduct
