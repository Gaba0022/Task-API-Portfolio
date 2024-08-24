const fetchPessoasButton = document.getElementById('fetchPessoas');
const pessoasList = document.getElementById('pessoasList');

fetchPessoasButton.addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:5000/api/Pessoas');
        if (response.ok) {
            const pessoas = await response.json();
            console.log('Dados recebidos:', pessoas); // Verifique os dados recebidos no console

            if (Array.isArray(pessoas)) {
                pessoasList.innerHTML = pessoas.map(pessoa => 
                    `<li>${pessoa.nome || 'Nome não disponível'} - ${pessoa.idade || 'Idade não disponível'}</li>`
                ).join('');
            } else {
                pessoasList.innerHTML = '<li>Formato de dados inesperado</li>';
            }
        } else {
            pessoasList.innerHTML = '<li>Erro ao buscar dados</li>';
        }
    } catch (error) {
        console.error('Erro:', error); // Adicione esta linha para ver erros no console
        pessoasList.innerHTML = '<li>Erro ao buscar dados</li>';
    }
});
