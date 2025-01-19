using System.ComponentModel.DataAnnotations;

namespace TrailTribe.Api.Dto;

public class FavoriteDto
{
    [Required]
    public int UserId { get; set; }

    [Required]
    public int TrailId { get; set; }
}