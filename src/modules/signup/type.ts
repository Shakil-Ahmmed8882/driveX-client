export interface LoginResponse {
    token: string;
  }


  // Define the type for the API response
export interface SignUpResponse {
  data: {
    address: string;
    createdAt: string; // ISO date string
    email: string;
    name: string;
    phone: string;
    role: string;
    updatedAt: string; // ISO date string
    _id: string;
  };
  message: string;
  statusCode: number;
  success: boolean;
}
