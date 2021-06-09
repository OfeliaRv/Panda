using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PandaAPI.Data;
using PandaAPI.Models;
using System;

namespace PandaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductData _productData;
        public ProductController(IProductData productData)
        {
            _productData = productData;
        }

        [HttpGet]
        public IActionResult GetProducts()
        {
            return Ok(_productData.GetProducts());
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetProduct(Guid id)
        {
            var product = _productData.GetProduct(id);
            if (product != null)
            {
                return Ok(product);
            }

            return NotFound($"Product with id: {id} was not found");
        }


        [HttpPost]
        public IActionResult AddProduct(Product product)
        {
            _productData.AddProduct(product);
            return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + product.Id, product);
        }


        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteProduct(Guid id)
        {
            var product = _productData.GetProduct(id);
            if (product != null)
            {
                _productData.DeleteProduct(product);
                return Ok();
            }

            return NotFound($"Product with id: {id} was not found");
        }

        [HttpPatch]
        [Route("{id}")]
        public IActionResult EditProduct(Guid id, Product product)
        {
            var existing_product = _productData.GetProduct(id);
            if (existing_product != null)
            {
                product.Id = existing_product.Id;
                _productData.EditProduct(product);
            }

            return Ok(product);
        }
    }
}
