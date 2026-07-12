export interface UpdateUserDTO {
  name?: string;
  phone?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  SystemRole?: 'user' | 'ambassedor' | 'service_provider' | 'system_admin';
}
