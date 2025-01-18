using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrailTribe.Api.Data;
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
}