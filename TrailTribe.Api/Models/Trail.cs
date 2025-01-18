using System.ComponentModel.DataAnnotations;

namespace TrailTribe.Api.Models;

public class Trail
{
    [Key]
    public int Id { get; set; }

    public required string Title { get; set; }
    
    public required string Description { get; set; }
    
    public required string TrailId { get; set; }
    
    public double Length { get; set; }
    
    // Bounding Box Coordinates for marking area on map
    public double BBoxSouthWestLat { get; set; }
    public double BBoxSouthWestLng { get; set; }
    public double BBoxNorthEastLat { get; set; }
    public double BBoxNorthEastLng { get; set; }
    
    public List<string> Nodes { get; set; } = new List<string>();
}
