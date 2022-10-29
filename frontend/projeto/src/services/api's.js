const BASE_URL = 'http://localhost:3001/'
const BASE_URL_FEED = 'http://127.0.0.1:5000/'

const endPoints = {
    GoLogin  : `${BASE_URL}login`,
    esqueciMinhaSenha:`${BASE_URL}esqueciMinhaSenha`,
    buscarCursos:`${BASE_URL}cursos`,
    buscarTopico:`${BASE_URL}listarTopicosPorCurso`,
    buscarConteudo:`${BASE_URL}listarConteudoPorTopico`,
    cadastrarFormulario:`${BASE_URL}formulario`,
    favoritarConteudo: `${BASE_URL}adicionarFavoritos`,
    buscarFeed:`${BASE_URL_FEED}obter_recomendacao`,
    buscarSegundoFeed:`${BASE_URL_FEED}obter_feed`,
    buscarFeedAdaptativo:`${BASE_URL_FEED}obter_feed_adaptado`,
    criarNovoCurso:`${BASE_URL}cadastrarCurso`,
    criarTopico:`${BASE_URL}cadastrarTopico`,
    criarConteudo:`${BASE_URL}cadastrarConteudo`

}

export default endPoints