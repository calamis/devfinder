export type IUserDetails = {
  firstName: string,
  lastName: string,
  email: string
}

export type IGithubUsers = {
  users: IUserDetails[],
  status?: "loading" | "idle"
}