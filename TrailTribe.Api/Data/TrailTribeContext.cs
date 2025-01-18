using Microsoft.EntityFrameworkCore;
using TrailTribe.Api.Models;

namespace TrailTribe.Api.Data;

public class TrailTribeContext : DbContext
{
    public TrailTribeContext(DbContextOptions<TrailTribeContext> options) : base(options)
    {
        
    }
    
    public DbSet<User> Users { get; set; }
    public DbSet<Trail> Trails { get; set; }
    public DbSet<Favorite> Favorites { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Favorite>()
            .HasKey(f => new { f.UserId, f.TrailId });

  
        modelBuilder.Entity<Favorite>()
            .HasOne(f => f.User)
            .WithMany(u => u.Favorites)
            .HasForeignKey(f => f.UserId);

        modelBuilder.Entity<Favorite>()
            .HasOne(f => f.Trail)
            .WithMany() 
            .HasForeignKey(f => f.TrailId);
    }
}