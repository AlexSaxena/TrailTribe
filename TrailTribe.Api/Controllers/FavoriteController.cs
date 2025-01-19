using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrailTribe.Api.Data;
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
}