let login = [
    {
        UserName : "jack",
        PassWord:"123"
    },
    {
        UserName : "frances",
        PassWord:"404"   
    },
    {
        UserName : "bobby",
        PassWord:"999"
    },

    
]


  export function getUser(UserName) {
    return login.find(
      (user) => user.UserName === UserName
    );
  }
  