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
            },
            new Trail
            {
                Title = "Lakeside Serenity",
                Description = "A calm walk along the lakeside with picturesque views.",
                TrailId = "98765",
                Length = 10.0,
                BBoxSouthWestLat = 47.600,
                BBoxSouthWestLng = 10.100,
                BBoxNorthEastLat = 47.700,
                BBoxNorthEastLng = 10.200,
                Nodes = new List<string>
                {
                    "47.605,10.110",
                    "47.610,10.120",
                    "47.615,10.130",
                    "47.620,10.140"
                }
            },
            new Trail
            {
                Title = "Desert Trek",
                Description = "An adventurous trail through the golden sands and dunes.",
                TrailId = "24680",
                Length = 15.3,
                BBoxSouthWestLat = 35.100,
                BBoxSouthWestLng = -115.200,
                BBoxNorthEastLat = 35.300,
                BBoxNorthEastLng = -115.000,
                Nodes = new List<string>
                {
                    "35.110,-115.210",
                    "35.120,-115.220",
                    "35.130,-115.230",
                    "35.140,-115.240"
                }
            },
            new Trail
            {
                Title = "Urban Stroll",
                Description = "A relaxing walk through the vibrant city parks.",
                TrailId = "13579",
                Length = 6.5,
                BBoxSouthWestLat = 40.700,
                BBoxSouthWestLng = -74.000,
                BBoxNorthEastLat = 40.800,
                BBoxNorthEastLng = -73.900,
                Nodes = new List<string>
                {
                    "40.705,-74.010",
                    "40.715,-74.020",
                    "40.725,-74.030",
                    "40.735,-74.040"
                }
            },
            new Trail
            {
                Title = "Coastal Path",
                Description = "A scenic trail along the cliffs with stunning ocean views.",
                TrailId = "11223",
                Length = 18.7,
                BBoxSouthWestLat = 36.900,
                BBoxSouthWestLng = -122.500,
                BBoxNorthEastLat = 37.000,
                BBoxNorthEastLng = -122.400,
                Nodes = new List<string>
                {
                    "36.910,-122.510",
                    "36.920,-122.520",
                    "36.930,-122.530",
                    "36.940,-122.540"
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
