type OurUser = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<OurUser>): OurUser {
  const defaultUser = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  return { ...initialValues, ...defaultUser };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
