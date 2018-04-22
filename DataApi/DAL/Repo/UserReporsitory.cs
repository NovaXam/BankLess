using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.DAO;

namespace DAL.Repo
{
    public class UserReporsitory : IUserReporsitory
    {
        IAppDbContex _dbContex;

        public UserReporsitory(IAppDbContex dbContex)
        {
            _dbContex = dbContex;
        }

        public void CreateUser(User user)
        {
            _dbContex.Users.Add(user);
            _dbContex.SaveChanges();
        }

        public User GetUser(string stellarKey)
        {
            return _dbContex.Users.Where(u => u.StellarKey == stellarKey).FirstOrDefault();
        }
        public IList<User> GetRecipients(string stellarKey)
        {

            return _dbContex.Users.Where(u => u.StellarKey == stellarKey).ToList();
        }

        public User GetUserByBsId(string BSid)
        {
            return _dbContex.Users.Where(u => u.BSId == BSid).FirstOrDefault();
        }
    }
}
