export const validateFieldsOfSingUpForm = (data:any) => {
    // List of required fields
    const requiredFields = ['name', 'email', 'password', 'phone', 'address'];
  
    // Check if all required fields are present and not empty
    for (const field of requiredFields) {
      if (!data[field] || data[field].trim() === '') {
        return false; // Validation failed
      }
    }
  
    return true; // Validation passed
  };
  
  export const validateFieldsOfLoginForm = (data: any) => {
    // List of required fields
    const requiredFields = ['email', 'password'];
  
    // Check if all required fields are present and not empty
    for (const field of requiredFields) {
      if (!data[field] || data[field].trim() === '') {
        return false; // Validation failed
      }
    }
  
    // Additional email format validation
    if (!/\S+@\S+\.\S+/.test(data.email)) {
      return false; // Email format is invalid
    }
  
    return true; // Validation passed
  };