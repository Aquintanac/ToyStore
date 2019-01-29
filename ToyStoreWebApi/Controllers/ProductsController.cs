using Autofac;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ToyStoreData.Models;
using ToyStoreData.Repository;
using ToyStoreWebApi.Container;

namespace ToyStoreWebApi.Controllers
{
    public class ProductsController : ApiController
    {
        IContainer _container;
        IUnitOfWork _unitOfWork;
        public ProductsController()
        {
            _container = ContainerConfig.Configure();
            _unitOfWork = _container.Resolve<IUnitOfWork>();
        }

        // GET api/products
        [HttpGet]
        public IHttpActionResult Get()
        {
            try
            {
                return Ok(_unitOfWork.ProductRepository.Get());
            }
            catch (Exception)
            {
                return Content<IHttpActionResult>(HttpStatusCode.InternalServerError, null);
            }
        }

        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            try
            {
                return Ok(_unitOfWork.ProductRepository.GetByID(id));
            }
            catch (Exception)
            {
                return Content<IHttpActionResult>(HttpStatusCode.InternalServerError, null);
            }
        }

        [HttpPost]
        public IHttpActionResult Add(Product product)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    _unitOfWork.ProductRepository.Insert(product);
                    _unitOfWork.Save();
                    return Ok(new { Message = "Success" }); 
                }

                return BadRequest("Error");
            }
            catch (Exception)
            {
                return Content<IHttpActionResult>(HttpStatusCode.InternalServerError, null);
            }
        }

        [HttpGet]
        public IHttpActionResult Delete(int id)
        {
            try
            {
                _unitOfWork.ProductRepository.Delete(id);
                _unitOfWork.Save();
                return Ok(new { Message = "Success" });
            }
            catch (Exception)
            {
                return Content<IHttpActionResult>(HttpStatusCode.InternalServerError, null);
            }
        }

        [HttpPost]
        public IHttpActionResult Update(Product product)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    _unitOfWork.ProductRepository.Update(product);
                    _unitOfWork.Save();
                    return Ok(new { Message = "Success" });
                }

                return BadRequest("Error");
            }
            catch (Exception)
            {
                return Content<IHttpActionResult>(HttpStatusCode.InternalServerError, null);
            }
        }
    }
}
