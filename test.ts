type Roles = "admin" | "user" | "manager";

type RolesWithoutAdmin = Exclude<Roles, "admin">;

interface DepartmentsForRole {
  name: string;
  level: number;
}

const departmentsForRoles: Record<Roles, DepartmentsForRole> = {
  admin: {
    name: "security",
    level: 10,
  },
  user: {
    name: "sales",
    level: 5,
  },
  manager: {
    name: "sales",
    level: 10,
  },
};

type TupleRoles = [Roles, Roles];

type BasicUser<A = boolean, P = Roles> = {
  name: string;
  surname: string;
  age: number;
  isAdmin: A;
  roles?: P;
};

type BasicUserWithoutRoles = Omit<BasicUser, "permissions">;

type AdvanceUser = {
  account: number;
};

type FullUser<A = boolean, P = string[]> = BasicUser<A, P> & AdvanceUser;

type BasicUserReadonly = Readonly<BasicUser>;
type BasicUserRequired = Required<BasicUser>;
type BasicUserPartial = Partial<BasicUser>;

type BasicUserReadonlyRequired = Readonly<Required<BasicUser>>;

const user: FullUser<boolean> = {
  name: "John",
  surname: "Smith",
  age: 25,
  isAdmin: true,
  account: 100,
  roles: ["admin", "user"],
};

user.name = "Test";

const usersArray: FullUser[] = [user, user, user];

function getFirst<T>(arr: T[]): T {
  return arr[0];
}

type BasicFunction = () => FullUser[];

type getFirstReturnType = ReturnType<BasicFunction>;

getFirst<FullUser>(usersArray);

type MathFunc = (a: number, b: number) => number;

const multiple: MathFunc = (a, b) => a * b;

const add: MathFunc = (a, b) => a + b;
