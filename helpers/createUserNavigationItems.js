export const createUserNavigationItems = (users) => {
  // we want to return an array of of objects with {name: "rob", links: "./user/id of the user"}

  return users.map((user) => ({ name: user.name, link: `./user/${user.id}` }));
};
