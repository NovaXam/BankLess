using DAL.DAO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repo
{
    public interface IUserReporsitory
    {
        User GetUser(string stellarKey);
        User GetUserByBsId(string BSid);
        void CreateUser(User user);

        IList<User> GetRecipients(string stellarKey);

    }
}
