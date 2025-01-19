using System.ComponentModel.DataAnnotations;

namespace TrailTribe.Api.Dto;

public class TrailDto
{
    [Required]
    public required string Title { get; set; }

    [Required]
    public required string Description { get; set; }

    public double Length { get; set; }
    
    [Required]
    public required string TrailId { get; set; } 
    public double BBoxSouthWestLat { get; set; }
    public double BBoxSouthWestLng { get; set; }
    public double BBoxNorthEastLat { get; set; }
    public double BBoxNorthEastLng { get; set; }

    public List<string> Nodes { get; set; } = new List<string>();
}