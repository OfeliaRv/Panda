using PandaAPI.Database;
using PandaAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PandaAPI.Data
{
    public class SqlProductData : IProductData
    {
        private readonly PandaDbContext _pandaContext;

        public SqlProductData(PandaDbContext pandaContext)
        {
            _pandaContext = pandaContext;
        }

        public Product AddProduct(Product product)
        {
            product.Id = Guid.NewGuid();
            _pandaContext.Products.Add(product);
            _pandaContext.SaveChanges();
            return product;
        }

        public void DeleteProduct(Product product)
        {
            _pandaContext.Products.Remove(product);
            _pandaContext.SaveChanges();
        }

        public Product EditProduct(Product product)
        {
            var existing_product = _pandaContext.Products.Find(product.Id);
            if (existing_product != null)
            {
                existing_product.Name = product.Name;
                _pandaContext.Products.Update(existing_product);
                _pandaContext.SaveChanges();
            }

            return product;
        }

        public Product GetProduct(Guid id)
        {
            var product = _pandaContext.Products.Find(id);
            return product;
        }

        public List<Product> GetProducts()
        {
            return _pandaContext.Products.ToList();
        }
    }
}
