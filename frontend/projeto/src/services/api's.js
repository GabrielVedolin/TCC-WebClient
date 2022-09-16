const BASE_URL = 'http://localhost:3001/'

const endPoints = {
    GoLogin  : `${BASE_URL}login`,
    esqueciMinhaSenha:`${BASE_URL}esqueciMinhaSenha`,
    buscarCursos:`${BASE_URL}cursos`,
    buscarTopico:`${BASE_URL}listarTopicosPorCurso`,
    buscarConteudo:`${BASE_URL}listarConteudoPorTopico`

}

export default endPoints