export const fieldsValidation = (data: any) => {
    console.log(data);
  
    // Name validation
    if (!data.name) {
      throw { error: "name", message: "Name is required" };
    }
  
    // Email validation
    if (!data.email) {
      throw { error: "email", message: "Email is required" };
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw { error: "email", message: "Please enter a valid email address" };
    }
  
    // Message validation
    if (!data.message) {
      throw { error: "message", message: "Message is required" };
    }
  
    return null;
  };