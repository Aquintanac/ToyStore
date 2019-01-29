using Autofac;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ToyStoreData.Repository;
using ToyStoreWebApi.Container;

namespace ToyStoreWebApi.Controllers
{
    public class ValuesController : ApiController
    {
        IContainer _container;
        IUnitOfWork _unitOfWork;
        public ValuesController()
        {
            _container = ContainerConfig.Configure();
            _unitOfWork = _container.Resolve<IUnitOfWork>();
        }

        // GET api/values
        public IHttpActionResult Get()
        {
            return Ok(_unitOfWork.ProductRepository.Get());
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
