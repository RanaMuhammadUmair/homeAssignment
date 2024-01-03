using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class ClickerController : ControllerBase
{
    private static int _count;
    private static readonly string _filePath = "counterValue.txt"; // Define the file path

    // Static constructor to initialize the counter from the file
    static ClickerController()
    {
        InitializeCounter().GetAwaiter().GetResult();
    }

    private static async Task InitializeCounter()
    {
        if (!System.IO.File.Exists(_filePath))
        {
            _count = 0;
            await System.IO.File.WriteAllTextAsync(_filePath, _count.ToString());
        }
        else
        {
            var content = await System.IO.File.ReadAllTextAsync(_filePath);
            if (int.TryParse(content, out int savedCount))
            {
                _count = savedCount;
            }
            else
            {
                _count = 0;
            }
        }
    }

    [HttpGet]
    public ActionResult<int> GetCount()
    {
        return _count;
    }

    [HttpPost]
    public async Task<IActionResult> IncrementCount()
    {
        _count++;
        await System.IO.File.WriteAllTextAsync(_filePath, _count.ToString());
        return Ok();
    }
}
