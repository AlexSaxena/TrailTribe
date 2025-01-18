using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace TrailTribe.Api.Models;

public class Favorite
{
    [Key]
    public int Id { get; set; }
    
    [ForeignKey("User")]
    public int UserId { get; set; }
    [JsonIgnore]
    public User User { get; set; }
    
    [ForeignKey("Trail")]
    public int TrailId { get; set; }
    [JsonIgnore]
    public Trail Trail { get; set; } 
}
