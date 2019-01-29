using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToyStoreData.Models;

namespace ToyStoreData
{
    public class DBInitializer: CreateDatabaseIfNotExists<ToyStoreContext>
    {
        protected override void Seed(ToyStoreContext context)
        {
            IList<Product> defaultStandards = new List<Product>();

            defaultStandards.Add(new Product() { Name = "Nerf Rival", AgeRestriction = 12, Company = "Mattel", Description = "Nerf gun", Price = 12.50m});
            defaultStandards.Add(new Product() { Name = "Toy 2", AgeRestriction = 12, Company = "Hasbro",  Price = 12.50m });
            defaultStandards.Add(new Product() { Name = "Toy 3", Company = "Marvel", Description = "Toy 3 description", Price = 12.50m });


            context.Products.AddRange(defaultStandards);

            base.Seed(context);
        }
    }
}
