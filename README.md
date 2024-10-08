# Task API

Este projeto é um exemplo de aplicação que utiliza uma API REST com um backend em ASP.NET Core e uma interface de usuário em Electron. O backend fornece uma API para gerenciar e recuperar dados de uma lista de pessoas, enquanto o frontend em Electron consome essa API e exibe os dados de forma interativa.

## Estrutura do Projeto

- **Backend**: Implementado em ASP.NET Core. Expõe uma API REST para CRUD de dados.
- **Frontend**: Desenvolvido em Electron. Consome a API e exibe os dados em uma interface gráfica.

## Requisitos

- .NET Core SDK
- Node.js
- npm ou yarn

## Configuração do Backend

### Passo 1: Configurar o Banco de Dados

1. **Instale e inicie o MySQL** se ainda não estiver em execução.

2. **Crie um banco de dados** exemplo `TaskApiDb`.


   
### Passo 2: Restaurar Pacotes e Executar Migrações

1. **Restaurar pacotes**:

   ```bash
   dotnet restore

2. **Adicionar o Pacote Necessários**:

   ```bash
   dotnet add package Microsoft.EntityFrameworkCore.Design
   dotnet add package Pomelo.EntityFrameworkCore.MySql

   
3. **Executar migrações**:

   ```bash
   dotnet ef database update
   
4. **Caso tenha problemas com o comando verificar se o dotnet-ef está Instalado. Você pode instalar ou atualizar a ferramenta com o seguinte comando**:
   ```bash
   dotnet tool install --global dotnet-ef

### Passo 3: Atualize a string de conexão no arquivo `appsettings.Development.json`

      ```json
      "ConnectionStrings": {
          "DefaultConnection": "Server=localhost;Database=TaskApiDb;User=SeuUser;Password=SuaSenha;"
      }
      
### Passo 4: Executar a API

1. **Inicie a API**:

   ```bash
   dotnet run
   
2.**Acesse a API em http://localhost:5000/api/Pessoas.**

## Configuração do FrontEnd

### Configurações:

1. **Navegue para o diretório do frontend**:

   ```bash
   cd frontend
2. **Inicie a aplicação Electron**:

   ```bash
   npm install
   
3. **Inicie a aplicação Electron**:

   ```bash
   npm start
   
### A interface do Electron estará disponível e deve ser acessível na janela do aplicativo.

## Arquivos Importantes

### Backend:

- **Controllers/PessoasController.cs**: Controlador da API para gerenciar dados de pessoas.
- **Models/Pessoa.cs**: Modelo de dados da pessoa.
- **Program.cs**: Configuração do ASP.NET Core.

### Frontend:

- **src/main.js**: Script principal do Electron que cria a janela da aplicação.
- **src/renderer.js**: Script que lida com a interação com a API e manipulação do DOM.
- **src/index.html**: Estrutura da interface do usuário.
- **src/styles.css**: Estilos para a interface do usuário.

## Licença

Este projeto não possui uma licença especificada. Sinta-se à vontade para modificar e usar conforme necessário.
