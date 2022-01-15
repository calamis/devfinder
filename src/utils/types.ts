export interface IUserDetails {
  name: string,
  email: string,
  company: string,
  address: string,
  phone: string,
  website: string
}

export interface fetchUserResponse {
  user: IUserDetails,
  success: boolean
}

export interface ValidationErrors {
  errorMessage: string,
  field_errors: Record<string, string>
}

export interface UsersState  {
  entities: Record<string, IUserDetails> | undefined | {},
  error: string | null | undefined | any,
  loading: boolean
}