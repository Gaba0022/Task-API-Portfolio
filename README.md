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

### Passo 1: Clonar o Repositório

### Passo 2: Configurar o Banco de Dados

1. **Instale e inicie o MySQL** se ainda não estiver em execução.

2. **Crie um banco de dados** exemplo `TaskApiDb`.

3. **Atualize a string de conexão** no arquivo `appsettings.Development.json`:

   ```json
   "ConnectionStrings": {
       "DefaultConnection": "Server=localhost;Database=TaskApiDb;User=SeuUser;Password=SuaSenha;"
   }
   
### Passo 3: Restaurar Pacotes e Executar Migrações

1. **Restaurar pacotes**:

   ```bash
   dotnet restore
   
2. **Executar migrações**:

   ```bash
   dotnet ef database update
   
### Passo 4: Executar a API

1. **Inicie a API**:

   ```bash
   dotnet run
2.**Acesse a API em http://localhost:5000/api/Pessoas.**
