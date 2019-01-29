using ToyStoreData.Models;

namespace ToyStoreData.Repository
{
    public interface IUnitOfWork
    {
        GenericRepository<Product> ProductRepository { get; }

        void Dispose();
        void Save();
    }
}