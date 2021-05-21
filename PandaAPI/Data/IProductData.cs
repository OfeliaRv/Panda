using PandaAPI.Models;
using System;
using System.Collections.Generic;

namespace PandaAPI.Data
{
    public interface IProductData
    {
        List<Product> GetProducts();

        Product GetProduct(Guid id);

        Product AddProduct(Product product);

        void DeleteProduct(Product product);

        Product EditProduct(Product product);
    }
}
