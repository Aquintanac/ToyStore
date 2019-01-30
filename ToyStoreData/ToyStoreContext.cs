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
        }

        public DbSet<Product> Products { get; set; }
    }
}
