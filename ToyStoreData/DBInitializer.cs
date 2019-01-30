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

            defaultStandards.Add(new Product() { Name = "Xbox One", AgeRestriction = 12, Company = "Microsoft", Description = "Game console", Price = 350.50m});
            defaultStandards.Add(new Product() { Name = "PS4", AgeRestriction = 12, Company = "Sony",  Price = 400.50m });
            defaultStandards.Add(new Product() { Name = "Switch", Company = "Nintendo", Description = "Hybrid game console", Price = 300.00m });


            context.Products.AddRange(defaultStandards);

            base.Seed(context);
        }
    }
}
