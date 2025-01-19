using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrailTribe.Api.Data;
using TrailTribe.Api.Models;

namespace TrailTribe.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TrailController : ControllerBase
{
    readonly TrailTribeContext _context;
   
    public TrailController( TrailTribeContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Trail>>> GetTrails()
    {
        return await _context.Trails.ToListAsync();
    }
}