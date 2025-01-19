using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrailTribe.Api.Data;
using TrailTribe.Api.Dto;
using TrailTribe.Api.Models;

namespace TrailTribe.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    readonly TrailTribeContext _context;

    public UserController(TrailTribeContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> GetUsers()
    {
       return await _context.Users.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<object>> GetUser(int id)
    {
        var user = await _context.Users
            .Include(u => u.Favorites)
            .ThenInclude(f => f.Trail)
            .FirstOrDefaultAsync(u => u.Id == id);

        if (user == null)
        {
            return NotFound();
        }
        
        var result = new
        {
            user.Id,
            user.Name,
            Favorites = user.Favorites.Select(f => new
            {
                f.TrailId,
                f.Trail.Title,
                f.Trail.Description,
                f.Trail.Length,
                BBox = new
                {
                    SouthWest = new { f.Trail.BBoxSouthWestLat, f.Trail.BBoxSouthWestLng },
                    NorthEast = new { f.Trail.BBoxNorthEastLat, f.Trail.BBoxNorthEastLng }
                },
                f.Trail.Nodes
            })
        };

        return result;
    }

    [HttpPost]
    public async Task<ActionResult<User>> PostUser(UserDto userDto)
    {
        var user = new User
        {
            Name = userDto.Name,
            Password = userDto.Password
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
    }
}