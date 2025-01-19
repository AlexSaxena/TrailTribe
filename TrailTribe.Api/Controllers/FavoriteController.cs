using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrailTribe.Api.Data;
using TrailTribe.Api.Dto;
using TrailTribe.Api.Models;

namespace TrailTribe.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FavoriteController : ControllerBase
{
    private readonly TrailTribeContext _context;

    public FavoriteController(TrailTribeContext context)
    {
        _context = context;
    }
    
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Favorite>>> GetFavorites()
    {
        return await _context.Favorites.Include(f => f.Trail).ToListAsync();
    }
    
    [HttpGet("user/{userId}")]
    public async Task<ActionResult<IEnumerable<Favorite>>> GetFavoritesByUser(int userId)
    {
        var favorites = await _context.Favorites
            .Where(f => f.UserId == userId)
            .Include(f => f.Trail)
            .ToListAsync();

        if (!favorites.Any())
        {
            return NotFound("No favorites found for this user.");
        }

        return favorites;
    }
    
    [HttpPost]
    public async Task<ActionResult<Favorite>> PostFavorite(FavoriteDto favoriteDto)
    {
        var existingFavorite = await _context.Favorites
            .FirstOrDefaultAsync(f => f.UserId == favoriteDto.UserId && f.TrailId == favoriteDto.TrailId);

        if (existingFavorite != null)
        {
            return Conflict("This trail is already in the user's favorites.");
        }
        
        var favorite = new Favorite
        {
            UserId = favoriteDto.UserId,
            TrailId = favoriteDto.TrailId
        };

        _context.Favorites.Add(favorite);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetFavoritesByUser), new { userId = favorite.UserId }, favorite);
    }
    
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteFavorite(int id)
    {
        var favorite = await _context.Favorites.FindAsync(id);

        if (favorite == null)
        {
            return NotFound();
        }

        _context.Favorites.Remove(favorite);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}