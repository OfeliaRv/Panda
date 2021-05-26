using PandaAPI.Models;
using System;
using System.Collections.Generic;

namespace PandaAPI.Data
{
    public interface IMessageData
    {
        List<ClientMessage> GetMessages();

        ClientMessage GetMessage(Guid id);

        ClientMessage AddMessage(ClientMessage message);

        void DeleteMessage(ClientMessage message);
    }
}
