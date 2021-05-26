using PandaAPI.Database;
using PandaAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PandaAPI.Data
{
    public class SqlCompanyData : ICompanyData
    {
        private readonly PandaDbContext _pandaContext;

        public SqlCompanyData(PandaDbContext pandaContext)
        {
            _pandaContext = pandaContext;
        }

        public Company AddCompany(Company company)
        {
            company.Id = Guid.NewGuid();
            _pandaContext.Companies.Add(company);
            _pandaContext.SaveChanges();
            return company;
        }

        public void DeleteCompany(Company company)
        {
            _pandaContext.Companies.Remove(company);
            _pandaContext.SaveChanges();
        }

        public Company EditCompany(Company company)
        {
            var existing_company = _pandaContext.Companies.Find(company.Id);
            if (existing_company != null)
            {
                existing_company.Name = company.Name;
                existing_company.About = company.About;
                existing_company.Logo = company.Logo;
                existing_company.X_position = company.X_position;
                existing_company.Y_position = company.Y_position;
                _pandaContext.Companies.Update(existing_company);
                _pandaContext.SaveChanges();
            }

            return company;
        }

        public List<Company> GetCompanies()
        {
            return _pandaContext.Companies.ToList();
        }

        public Company GetCompany(Guid id)
        {
            var company = _pandaContext.Companies.Find(id);
            return company;
        }
    }
}
