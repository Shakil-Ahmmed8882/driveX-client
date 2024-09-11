export const fieldsValidation = (data: any) => {
    const requiredFields:any = {
      name: "Name is required",
      email: "Email is required",
      message: "Message is required",
    };
  
    for (const field in data) {
      if (!data[field]) {
        throw { error: field, message: requiredFields[field] || `${field} is required` };
      }
  
      if (field === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data[field])) {
          throw { error: "email", message: "Please enter a valid email address" };
        }
      }
    }
  
    return null;
  };
  