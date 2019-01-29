using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToyStoreData.Models;

namespace ToyStoreData.Repository
{
    public class UnitOfWork : IDisposable, IUnitOfWork
    {
        private ToyStoreContext context = new ToyStoreContext();
        private GenericRepository<Product> productsRepository;

        public GenericRepository<Product> ProductRepository
        {
            get
            {
                if(this.productsRepository == null)
                {
                    this.productsRepository = new GenericRepository<Product>(context);
                }
                return this.productsRepository;
            }
        }

        public void Save()
        {
            context.SaveChanges();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
