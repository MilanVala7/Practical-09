using System.Web.Mvc;

namespace Task_1.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            ViewBag.Message = "Hello World!";
            return View();
        }
    }
}