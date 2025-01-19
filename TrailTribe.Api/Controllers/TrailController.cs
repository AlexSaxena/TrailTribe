using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrailTribe.Api.Data;
using TrailTribe.Api.Dto;
using TrailTribe.Api.Models;

namespace TrailTribe.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TrailController : ControllerBase
{
    readonly TrailTribeContext _context;

    public TrailController(TrailTribeContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Trail>>> GetTrails()
    {
        return await _context.Trails.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Trail>> GetTrail(int id)
    {
        var trail = await _context.Trails.FindAsync(id);

        if (trail == null)
        {
            return NotFound();
        }

        return trail;
    }

    [HttpPost]
    public async Task<ActionResult<Trail>> PostTrail(TrailDto trailDto)
    {
        var trail = new Trail
        {
            Title = trailDto.Title,
            Description = trailDto.Description,
            TrailId = trailDto.TrailId,
            Length = trailDto.Length,
            BBoxSouthWestLat = trailDto.BBoxSouthWestLat,
            BBoxSouthWestLng = trailDto.BBoxSouthWestLng,
            BBoxNorthEastLat = trailDto.BBoxNorthEastLat,
            BBoxNorthEastLng = trailDto.BBoxNorthEastLng,
            Nodes = trailDto.Nodes
        };
        _context.Trails.Add(trail);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetTrail), new { id = trail.Id }, trail);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTrail(int id)
    {
        var trail = await _context.Trails.FindAsync(id);

        if (trail == null)
        {
            return NotFound();
        }

        _context.Trails.Remove(trail);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}