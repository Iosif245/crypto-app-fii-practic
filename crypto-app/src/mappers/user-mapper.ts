import { toNumber, toString } from "lodash";

export const mapUser = (data: Partial<IUser>): IUser => {
  const user: IUser = {
    id: toNumber(data?.id),
    name: toString(data?.name),
    funds: toNumber(data?.funds),
  };

  return user;
};

export const mapUsers = (data: IUsers): IUsers => {
  return {
    users: data.users.map((user) => mapUser(user)),
  };
};
