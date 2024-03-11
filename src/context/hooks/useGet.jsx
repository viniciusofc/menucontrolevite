// import { api } from "../../services/api";

// export default function useGet() {

//     const getFornecedores = async () => {
//         try {
//             const { data } = await api.get('/lista/fornecedores');
//             return data;

//         } catch (error) {
//             return false
//         }
//     }

//     const getProdutos = async () => {
//         try {
//             const { data } = await api.get('/lista/produtos');
//             return data;

//         } catch (error) {
//             return false
//         }
//     }

//     const getFunerarias = async () => {
//         try {
//             const { data } = await api.get('/lista/funerarias');
//             return data;

//         } catch (error) {
//             return false
//         }
//     }

//     const getLogs = async () => {
//         try {
//             const { data } = await api.get('/lista/logs');
//             return data;

//         } catch (error) {
//             return false
//         }
//     }

//     const getCemiterios = async () => {
//         try {
//             const { data } = await api.get('/lista/cemiterios');
//             return data;

//         } catch (error) {
//             return false
//         }
//     }

//     const getEstoqueAll = async () => {
//         try {
//             const { data } = await api.get('/lista/estoque');
//             return data;

//         } catch (error) {
//             return false
//         }
//     }

//     const getEstoqueByType = async () => {
//         try {
//             const { data } = await api.get('/lista/tipo/estoque');
//             return data;

//         } catch (error) {
//             return false
//         }
//     }

//     const getSegurado = async (param) => {
//         try {
//             const { data } = await api.get(`/segurado/${param}`);
//             return data;

//         } catch (error) {
//             return false
//         }
//     }

//     const getKits = async (param) => {
//         try {
//             const { data } = await api.get(`/listar/kits`);
//             return data;

//         } catch (error) {
//             return false
//         }
//     }

//     const getKitsById = async (param) => {
//         try {
//             const { data } = await api.get(`/listar/kit/${param}`);
//             return data;

//         } catch (error) {
//             return false
//         }
//     }

//     const getEstoqueKits = async () => {
//         try {
//             const { data } = await api.get('/listar/kits');
//             return data;

//         } catch (error) {
//             return false
//         }
//     }

//     return {
//         getFornecedores,
//         getProdutos,
//         getFunerarias,
//         getLogs,
//         getCemiterios,
//         getEstoqueAll,
//         getSegurado,
//         getKits,
//         getEstoqueByType,
//         getKitsById,
//         getEstoqueKits

//     }
// }