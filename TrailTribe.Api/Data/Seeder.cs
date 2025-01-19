using TrailTribe.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace TrailTribe.Api.Data;

public static class Seeder
{
    public static async Task SeedDatabase(TrailTribeContext context)
    {
        // Ensure the database is created
        await context.Database.EnsureCreatedAsync();

        // Check if data already exists
        if (context.Users.Any() || context.Trails.Any())
        {
            Console.WriteLine("Database already seeded!");
            return;
        }

        // Create Users
        var users = new List<User>
        {
            new User { Name = "Dora The Explorer", Password = "password123" },
            new User { Name = "Bob Hiker", Password = "password123" }
        };
        context.Users.AddRange(users);
        await context.SaveChangesAsync();

        // Get inserted User IDs
        var doraId = users[0].Id;
        var bobId = users[1].Id;

        // Create Trails
        var trails = new List<Trail>
        {
            new Trail
            {
                Title = "Mountain Adventure",
                Description = "A thrilling hike across rocky mountains with scenic views.",
                TrailId = "12345",
                Length = 12.4,
                BBoxSouthWestLat = 47.565, 
                BBoxSouthWestLng = 10.250,
                BBoxNorthEastLat = 47.715,
                BBoxNorthEastLng = 10.460,
                Nodes = new List<string>
                {
                    "47.570,10.260",
                    "47.580,10.270",
                    "47.590,10.280",
                    "47.600,10.290"
                }
            },
            new Trail
            {
                Title = "Forest Escape",
                Description = "A peaceful walk through dense forests and wildlife habitats.",
                TrailId = "67890",
                Length = 8.2,
                BBoxSouthWestLat = 47.500,
                BBoxSouthWestLng = 10.200,
                BBoxNorthEastLat = 47.600,
                BBoxNorthEastLng = 10.300,
                Nodes = new List<string>
                {
                    "47.505,10.210",
                    "47.510,10.220",
                    "47.520,10.230",
                    "47.530,10.240"
                }
            }
        };
        context.Trails.AddRange(trails);
        await context.SaveChangesAsync();

        // Get inserted Trail IDs
        var mountainAdventureId = trails[0].Id;
        var forestEscapeId = trails[1].Id;

        // Create Favorites
        var favorites = new List<Favorite>
        {
            new Favorite { UserId = doraId, TrailId = mountainAdventureId },
            new Favorite { UserId = doraId, TrailId = forestEscapeId },
            new Favorite { UserId = bobId, TrailId = forestEscapeId }
        };
        context.Favorites.AddRange(favorites);

        // Save Changes
        await context.SaveChangesAsync();
        Console.WriteLine("Database seeded successfully!");
    }
}
