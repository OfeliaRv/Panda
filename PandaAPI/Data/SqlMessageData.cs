using PandaAPI.Database;
using PandaAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PandaAPI.Data
{
    public class SqlMessageData : IMessageData
    {
        private readonly PandaDbContext _pandaContext;

        public SqlMessageData(PandaDbContext pandaContext)
        {
            _pandaContext = pandaContext;
        }

        public ClientMessage AddMessage(ClientMessage message)
        {
            message.Id = Guid.NewGuid();
            message.Date = DateTime.Now;
            _pandaContext.Messages.Add(message);
            _pandaContext.SaveChanges();
            return message;
        }

        public void DeleteMessage(ClientMessage message)
        {
            _pandaContext.Messages.Remove(message);
            _pandaContext.SaveChanges();
        }

        public ClientMessage GetMessage(Guid id)
        {
            var message = _pandaContext.Messages.Find(id);
            return message;
        }

        public List<ClientMessage> GetMessages()
        {
            return _pandaContext.Messages.ToList();
        }
    }
}
