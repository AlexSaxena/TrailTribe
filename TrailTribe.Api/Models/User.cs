using System.ComponentModel.DataAnnotations;

namespace TrailTribe.Api.Models;

public class User
{
    [Key]
    public int Id { get; set; }

    public required string Name { get; set; }
    
    public required string Password { get; set; }
    
    public List<Favorite> Favorites { get; set; } = new List<Favorite>();
}
