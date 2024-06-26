using API.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddApplicationServices(builder.Configuration);
builder.Services.AddIndentityServices(builder.Configuration);
var app = builder.Build();

// Configure the HTTP request pipeline.
// app.UseHttpsRedirection();

// app.UseAuthorization();

app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:4200"));

app.MapControllers();
app.UseAuthentication();
app.UseAuthorization();

app.Run();

