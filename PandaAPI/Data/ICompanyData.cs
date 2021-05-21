using PandaAPI.Models;
using System;
using System.Collections.Generic;

namespace PandaAPI.Data
{
    public interface ICompanyData 
    {
        List<Company> GetCompanies();

        Company GetCompany(Guid id);

        Company AddCompany(Company company);

        void DeleteCompany(Company company);

        Company EditCompany(Company company);
    }
}
