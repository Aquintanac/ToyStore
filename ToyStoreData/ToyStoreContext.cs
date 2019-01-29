using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToyStoreData.Models;

namespace ToyStoreData
{
    public class ToyStoreContext: DbContext
    {
        public  ToyStoreContext(): base()
        {
            Database.SetInitializer<ToyStoreContext>(new DBInitializer());
            //Database.SetInitializer<ToyStoreContext>(new CreateDatabaseIfNotExists<ToyStoreContext>());
            //Database.SetInitializer<ToyStoreContext>(new DropCreateDatabaseIfModelChanges<ToyStoreContext>());
            //Database.SetInitializer<ToyStoreContext>(new DropCreateDatabaseAlways<ToyStoreContext>());
        }

        public DbSet<Product> Products { get; set; }
    }
}
