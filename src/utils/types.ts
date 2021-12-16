export interface IUserDetails {
  firstName: string,
  // lastName: string,
  // email: string
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
  entities: Record<string, IUserDetails>,
  error: string | null | undefined,
  loading: string
}