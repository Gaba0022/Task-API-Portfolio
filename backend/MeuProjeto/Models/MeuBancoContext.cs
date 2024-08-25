using Microsoft.EntityFrameworkCore;

namespace MeuProjeto.Models
{
    public class MeuBancoContext : DbContext
    {
        public MeuBancoContext(DbContextOptions<MeuBancoContext> options)
            : base(options)
        {
        }

        public DbSet<Pessoa> Pessoas { get; set; }
    }

    public class Pessoa
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public int Idade { get; set; }
    }
}
