import { useState } from "react";
import Table from "../../components/table";
import Modal from "../../components/modal/Modal";

const formData = {
    nome: 'Vazio',
    segmento: 'Vazio',
    submenu: 'Vazio',
    urlimagem: '',
    detalhes: 'Vazio',
    preco: 0

}

const dados = [
    {
        "id": 13,
        "name": "Água Mineral sem gás 500ml",
        "price": 4,
        "submenu": "Água Mineral 500ml.",
        "url_image": "https://img.freepik.com/vetores-gratis/icone-de-vetor-realista-garrafa-plastica-de-agua-isolado-no-fundo-branco-bebida-maquete-de-bebida_134830-1356.jpg?t=st=1709355178~exp=1709358778~hmac=5ec902452182cff72369f624d3272ccee256938144507508e5a8355e4e903821&w=360",
        "details": "Vazio",
        "id_usuario": 1,
        "dt_operation": "2024-03-01T03:00:00.000Z",
        "excluido": false,
        "id_segment": 7
    },
    {
        "id": 21,
        "name": "Sorvetes Bola",
        "price": 7.5,
        "submenu": "Morango, chocolate e creme.",
        "url_image": "https://img.myloview.com.br/quadros/bolas-de-sorvete-em-copo-de-papel-700-150911697.jpg",
        "details": "Vazio",
        "id_usuario": 1,
        "dt_operation": "2024-03-01T03:00:00.000Z",
        "excluido": false,
        "id_segment": 8
    },
    {
        "id": 11,
        "name": "Mix de Folhas Verdes",
        "price": 29,
        "submenu": "Combinação de folhas verdes da estação, acompanha molho mostarda.",
        "url_image": "https://img.freepik.com/fotos-gratis/salada-de-vista-superior-com-diferentes-ingredientes-em-prato-escuro_23-2148537175.jpg?w=740&t=st=1709356394~exp=1709356994~hmac=2ed4d98f506e9c161c2d5a1ae1213356314c541b25741f0c9e23a1f0cf22a6a7",
        "details": "Vazio",
        "id_usuario": 1,
        "dt_operation": "2024-03-01T03:00:00.000Z",
        "excluido": false,
        "id_segment": 5
    },
    {
        "id": 15,
        "name": "Água Mineral com Gás 500ml",
        "price": 4,
        "submenu": "Água Mineral com Gás 500ml.",
        "url_image": "https://img.freepik.com/vetores-gratis/icone-de-vetor-realista-garrafa-plastica-de-agua-isolado-no-fundo-branco-bebida-maquete-de-bebida_134830-1356.jpg?t=st=1709355178~exp=1709358778~hmac=5ec902452182cff72369f624d3272ccee256938144507508e5a8355e4e903821&w=360",
        "details": "Vazio",
        "id_usuario": 1,
        "dt_operation": "2024-03-01T03:00:00.000Z",
        "excluido": false,
        "id_segment": 7
    },
    {
        "id": 8,
        "name": "Batatas fritas",
        "price": 35,
        "submenu": "Porção de Batatas Fritas.",
        "url_image": "https://img.freepik.com/fotos-gratis/batatas-fritas-crocantes-com-ketchup-e-maionese_1150-26588.jpg?w=740&t=st=1709356418~exp=1709357018~hmac=4ba695cd7e5a9247924d56d46ce0be43692fe28454d322899ae9421cc91007a5",
        "details": "Vazio",
        "id_usuario": 1,
        "dt_operation": "2024-03-01T03:00:00.000Z",
        "excluido": false,
        "id_segment": 4
    },
    {
        "id": 4,
        "name": "Polenta Frita",
        "price": 36,
        "submenu": "Servida com molho malagueta aioli",
        "url_image": "https://img.freepik.com/fotos-gratis/vista-frontal-deliciosas-batatas-fritas-dentro-do-prato-na-mesa-escura-oleo-comestivel-foto-cor-jantar_140725-131659.jpg?w=360&t=st=1709356429~exp=1709357029~hmac=d3b7e0c7ac4b43d51659e783d1c2c778af45d2ec1e8965e2fd83ff555be5eb59",
        "details": "Vazio",
        "id_usuario": 1,
        "dt_operation": "2024-03-01T03:00:00.000Z",
        "excluido": false,
        "id_segment": 1
    },
    {
        "id": 19,
        "name": "Petit Gateau",
        "price": 37,
        "submenu": "Bolo de chocolate quente com sorvete de creme.",
        "url_image": "https://img.freepik.com/fotos-gratis/fondue-de-chocolate-com-bola-de-sorvete_114579-2053.jpg?w=740&t=st=1709356454~exp=1709357054~hmac=10d95cb0fce713c5b60dbf38d38de9ec299deaa7e453b3ce3c211e72817b8155",
        "details": "Vazio",
        "id_usuario": 1,
        "dt_operation": "2024-03-01T03:00:00.000Z",
        "excluido": false,
        "id_segment": 8
    },
    {
        "id": 10,
        "name": "Salada de Maionese",
        "price": 39,
        "submenu": "Salada de batata e cenoura com molho de maionese.",
        "url_image": "https://img.freepik.com/fotos-gratis/salada-russa-tradicional-olivier_2829-6262.jpg?w=740&t=st=1709356471~exp=1709357071~hmac=b698a3cc5b196dc81657793b62df29e0a02b9e594a94c2b3503962d37ea6e3b6",
        "details": "Vazio",
        "id_usuario": 1,
        "dt_operation": "2024-03-01T03:00:00.000Z",
        "excluido": false,
        "id_segment": 5
    },
    {
        "id": 17,
        "name": "Suco Lata",
        "price": 5.8,
        "submenu": "Suco Lata",
        "url_image": "https://zavod.com.br/wp-content/uploads/2021/08/Del-Valle-Suco.jpg",
        "details": "Vazio",
        "id_usuario": 1,
        "dt_operation": "2024-03-01T03:00:00.000Z",
        "excluido": false,
        "id_segment": 7
    },
    {
        "id": 16,
        "name": "Refrigerante Lata",
        "price": 6,
        "submenu": "Refrigerante Lata",
        "url_image": "\nhttps://static.paodeacucar.com/img/uploads/1/768/12059768.jpeg",
        "details": "Vazio",
        "id_usuario": 1,
        "dt_operation": "2024-03-01T03:00:00.000Z",
        "excluido": false,
        "id_segment": 7
    },
    {
        "id": 22,
        "name": "Pudim",
        "price": 12.5,
        "submenu": "Delicioso pudim de leite com calda de ameixa.",
        "url_image": "https://img.freepik.com/fotos-gratis/pudim-de-caramelo_74190-1271.jpg?w=360&t=st=1709356309~exp=1709356909~hmac=f0d55188facbabc539fe7d6cef2d0e1f7198075ab2aede9e17656d23e69dacb7",
        "details": "Vazio",
        "id_usuario": 1,
        "dt_operation": "2024-03-01T03:00:00.000Z",
        "excluido": false,
        "id_segment": 8
    },
    {
        "id": 9,
        "name": "Farofa de Ovos",
        "price": 15,
        "submenu": "Farinha de mandioca torrada, acrescida de ovos, bacon e temperos verdes.",
        "url_image": "https://img.freepik.com/fotos-premium/farofa-crocante-generativo-ai_913266-37829.jpg?w=740",
        "details": "Vazio",
        "id_usuario": 1,
        "dt_operation": "2024-03-01T03:00:00.000Z",
        "excluido": false,
        "id_segment": 4
    },
    {
        "id": 7,
        "name": "Arroz branco",
        "price": 25,
        "submenu": "Arroz branco soltinho.",
        "url_image": "https://img.freepik.com/fotos-gratis/frescura-e-saude-numa-refeicao-gourmet-vegetariana-gerada-por-inteligencia-artificial_25030-67345.jpg?w=740&t=st=1709356380~exp=1709356980~hmac=8bd54b8e111666162950e149701364cc4ebff5be668a6a5c752e463a014f6b8e",
        "details": "Vazio",
        "id_usuario": 1,
        "dt_operation": "2024-03-01T03:00:00.000Z",
        "excluido": false,
        "id_segment": 4
    },
    {
        "id": 5,
        "name": "Mix De Pastéis",
        "price": 30,
        "submenu": "6 unidades nos sabores de carne e queijo.",
        "url_image": "https://img.freepik.com/fotos-premium/petisco-brasileiro-pastel-pastelaria-brasileira-tradicional_538646-11433.jpg?w=740",
        "details": "Vazio",
        "id_usuario": 1,
        "dt_operation": "2024-03-01T03:00:00.000Z",
        "excluido": false,
        "id_segment": 1
    },
    {
        "id": 3,
        "name": "Fraldinha Fatiada",
        "price": 59,
        "submenu": "Corte magro, macio e suculento da melhor parte da Fraldinha.",
        "url_image": "https://img.freepik.com/fotos-gratis/pedacos-de-carne-fritos-com-especiarias-em-uma-placa-de-madeira_140725-3263.jpg?w=740&t=st=1709356498~exp=1709357098~hmac=b1d8caf051f7fd907dd3dfab70ce092e2366c8df79dd893b46ff31a0f642c758",
        "details": "Vazio",
        "id_usuario": 1,
        "dt_operation": "2024-03-01T03:00:00.000Z",
        "excluido": false,
        "id_segment": 2
    },
    {
        "id": 2,
        "name": "Bife Ancho",
        "price": 69,
        "submenu": "A peça inteira da picanha geralmente têm uma variação de 1 a 2 kg a depender.",
        "url_image": "https://img.freepik.com/fotos-gratis/bife-suculento-carne-rara-medio-com-especiarias-e-legumes-grelhados_24972-2328.jpg?w=740&t=st=1709356524~exp=1709357124~hmac=5419586a345d86d9223dfef10ce722371fb3d96343aa8307f2e61b7bf98ba0fb",
        "details": "Vazio",
        "id_usuario": 1,
        "dt_operation": "2024-03-01T03:00:00.000Z",
        "excluido": false,
        "id_segment": 2
    },
    {
        "id": 1,
        "name": "Picanha",
        "price": 179,
        "submenu": "A peça inteira da picanha geralmente têm uma variação de 1 a 2 kg a depender.",
        "url_image": "https://img.freepik.com/fotos-premium/picanha-tradicional-bife-brasileiro-no-churrasco-fatias-de-picanha-grelhada-no-espeto-fundo-do-restaurante_361869-227.jpg?w=740",
        "details": "Vazio",
        "id_usuario": 1,
        "dt_operation": "2024-03-01T03:00:00.000Z",
        "excluido": false,
        "id_segment": 2
    },
    {
        "id": 23,
        "name": "Camarão Crocante",
        "price": 45,
        "submenu": "Delicioso camarão crocante.",
        "url_image": "https://cdn.dooca.store/997/posts/31436666-l.jpg?v=1600955019",
        "details": "Vazio",
        "id_usuario": 1,
        "dt_operation": "2024-03-02T03:00:00.000Z",
        "excluido": false,
        "id_segment": 1
    },
    {
        "id": 6,
        "name": "Tábua De Frios",
        "price": 65,
        "submenu": "Pão italiano, grana padano, brie, candy bancon, salame, presunto de parma.",
        "url_image": "https://img.freepik.com/fotos-gratis/antepasto-de-catering-prato-com-bacon-carne-seca-salame-queijo-e-uvas-em-uma-mesa-de-madeira_2829-19732.jpg?w=740&t=st=1709356512~exp=1709357112~hmac=e776bce3c25dfbdf83d8bdf86c09a6d1cc8cb13aaec59ee352b63d2c1850984d",
        "details": "Vazio",
        "id_usuario": 1,
        "dt_operation": "2024-03-01T03:00:00.000Z",
        "excluido": false,
        "id_segment": 1
    },
    {
        "id": 12,
        "name": "Salada Caesar",
        "price": 55,
        "submenu": "Alface romana baby temperada com molho à base de maionese, filé de anchovas .",
        "url_image": "https://img.freepik.com/fotos-gratis/pessoa-comer-saboroso-salada-caesar-com-croutons-em-restaurante_23-2148076005.jpg?w=740&t=st=1709356484~exp=1709357084~hmac=98537b548a502a1ecaed2e8198919bce240b96700a994dd45def7dd4a8e8d49c",
        "details": "Vazio",
        "id_usuario": 1,
        "dt_operation": "2024-03-01T03:00:00.000Z",
        "excluido": false,
        "id_segment": 5
    },
    {
        "id": 25,
        "name": "Suco de Laranja 6.0",
        "price": 10.5,
        "submenu": "Feito com carinho.",
        "url_image": "",
        "details": "",
        "id_usuario": 4,
        "dt_operation": "2024-03-04T03:00:00.000Z",
        "excluido": false,
        "id_segment": 7
    }
]

const headers = [
    {
        id: 1,
        title: "Nome Segmento"
    },
    {
        id: 2,
        title: "SubMenu"
    },
    {
        id: 3,
        title: "UrlImagem"
    },
    {
        id: 4,
        title: "Segmento"
    },
    {
        id: 5,
        title: "Preço"
    },
    {
        id: 6,
        title: "Opções"
    }
]

const Segments = () => {
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
            <Table dados={dados} headers={headers} analytics={false}>
                <div className='flex flex-row justify-between w-full h-12 text-gray-500 bg-zinc-200'>
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
                            <span className='text-sm'>Criar Segmento</span>
                        </button>
                    </section>
                </div>
            </Table>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h2 className="text-lg font-semibold mb-4">Cadastro Segmento</h2>
                <div class="relative  w-96 max-w-md max-h-full">
                        <form>
                            <div class="grid gap-4 mb-4 grid-cols-2">
                                <div class="col-span-2">
                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Nome</label>
                                    <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Digite o nome do segmento.." required="" />
                                </div>
                            </div>
                            <button type="submit" class="text-white inline-flex items-center bg-black hover:ring-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                Criar Segmento
                            </button>
                        </form>
                </div>
            </Modal>
        </div>
    )
}


export default Segments