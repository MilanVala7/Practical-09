using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Web.Mvc;
using Task_3.Controllers;

namespace Task_3.Tests.Controllers
{
    [TestClass]
    public class TestController
    {
        [TestMethod]
        public void Index()
        {
            // Arrange
            // Here we are initializing the HomeController
            HomeController controller = new HomeController();

            // Act
            // Here we are calling the Index method of the HomeController and storing the result in a variable with type ViewResult
            ViewResult result = controller.Index() as ViewResult;

            // Assert
            // Here we are checking that the result is not null
            Assert.IsNotNull(result);

            // Here we are checking the ViewBag.Message is equal to "Hello, World!"
            Assert.AreEqual("Hello World!", result.ViewBag.Message);

        }

    }
}