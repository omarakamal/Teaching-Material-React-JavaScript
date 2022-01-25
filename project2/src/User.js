let login = [
  {
      userName: "Meshal",
      password: "123456",
  }
]
export function getLogin() {
  return login;
}
export function getUser(userName, password) {
  return login.find(
      user => (user.userName === userName && user.password === password)
  );
 
}