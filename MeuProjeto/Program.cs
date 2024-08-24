using Microsoft.EntityFrameworkCore;
using MeuProjeto.Models;

var builder = WebApplication.CreateBuilder(args);

// Configuração da conexão com o banco de dados
builder.Services.AddDbContext<MeuBancoContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"),
    new MySqlServerVersion(new Version(8, 0, 21)))); // Versão do MySQL

builder.Services.AddControllers();

var app = builder.Build();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
