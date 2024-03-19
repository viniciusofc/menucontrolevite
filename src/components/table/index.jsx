import React, { Children, useState } from 'react'
import CurrencyFormat from '../../Functions/formatCurrency'
import Counter from '../counter'


const Table = ({ children, dados, headers, analytics }) => {

    return (
        <div className=" h-screen w-full max-h-screen p-5 bg-zinc-200">
            {children}
            <div class="relative h-[32rem] max-w-4/5 flex-shrink-0 max-w-4/5 max-h-80 overflow-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-100 uppercase  sticky top-0 bg-black ">
                        <tr>
                            {
                                headers.map((item) => {
                                    return (

                                        <th scope="col" class="px-6 py-3">
                                            {item.title}
                                        </th>

                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>

                        {
                            dados.map((item) => {
                                return (
                                    <>
                                        <tr class="bg-white border-b  dark:border-gray-200 hover:bg-gray-200 cursor-pointer">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                {item.name}
                                            </th>
                                            <td class="px-6 py-4 max-w-36 truncate text-gray-900">
                                                {item.submenu}
                                            </td>
                                            <td class="px-6 py-4 max-w-72 max-h-16 break-all  text-gray-900 line-clamp-2 whitespace-nowrap">
                                                {item.url_image}
                                            </td>
                                            <td class="px-6 py-4 text-gray-900">
                                                {item.id_segment}
                                            </td>
                                            <td class="px-6 py-4 text-gray-900">
                                                {CurrencyFormat(item.price)}
                                            </td>
                                            <td class="px-6 py-4 text-gray-900">
                                                <a href="#" class="font-medium text-blue-900  hover:underline">Editar</a>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
            {
                analytics &&
                <div>
                    <div class="max-w-full mx-4 py-6 sm:mx-auto sm:px-6 lg:px-8">
                        <div class="sm:flex sm:space-x-4">
                            <div class="inline-block align-bottom  bg-black rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
                                <div class=" bg-black  p-5">
                                    <div class="sm:flex sm:items-start">
                                        <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                            <h3 class="text-sm leading-6 font-medium text-gray-300">Total Produtos</h3>
                                            <Counter maxValue={dados.length} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="inline-block align-bottom  bg-black  rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
                                <div class=" bg-black  p-5">
                                    <div class="sm:flex sm:items-start">
                                        <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                            <h3 class="text-sm leading-6 font-medium text-gray-300">Total Segmentos</h3>
                                            <Counter maxValue={15} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="inline-block align-bottom  bg-black  rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
                                <div class=" bg-black  p-5">
                                    <div class="sm:flex sm:items-start">
                                        <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                            <h3 class="text-sm leading-6 font-medium text-gray-300">Produtos Ativos</h3>
                                            <Counter maxValue={96} type={"%"} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default Table;
