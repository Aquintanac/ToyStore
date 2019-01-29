using Autofac;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ToyStoreData.Repository;

namespace ToyStoreWebApi.Container
{
    public static class ContainerConfig
    {
        public static IContainer Configure()
        {
            var builder = new ContainerBuilder();
            builder.RegisterType<UnitOfWork>().As<IUnitOfWork>();
            return builder.Build();
        }
    }
}