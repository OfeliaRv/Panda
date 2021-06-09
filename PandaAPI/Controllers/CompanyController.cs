using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PandaAPI.Data;
using PandaAPI.Models;
using System;

namespace PandaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private readonly ICompanyData _companyData;
        public CompanyController(ICompanyData companyData)
        {
            _companyData = companyData;
        }

        [HttpGet]
        public IActionResult GetCompanies()
        {
            return Ok(_companyData.GetCompanies());
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetCompany(Guid id)
        {
            var company = _companyData.GetCompany(id);
            if (company != null)
            {
                return Ok(company);
            }

            return NotFound($"Company with id: {id} was not found");
        }


        [HttpPost]
        public IActionResult AddCompany(Company company)
        {
            _companyData.AddCompany(company);
            return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + company.Id, company);
        }


        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteCompany(Guid id)
        {
            var company = _companyData.GetCompany(id);
            if (company != null)
            {
                _companyData.DeleteCompany(company);
                return Ok();
            }

            return NotFound($"Company with id: {id} was not found");
        }

        [HttpPatch]
        [Route("{id}")]
        public IActionResult EditCompany(Guid id, Company company)
        {
            var existing_company = _companyData.GetCompany(id);
            if (existing_company != null)
            {
                company.Id = existing_company.Id;
                _companyData.EditCompany(company);
            }

            return Ok(company);
        }
    }
}
