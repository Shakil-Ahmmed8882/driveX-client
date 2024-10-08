
export interface CarFormProps {
    isUpdateForm?: boolean;
    onSubmit: (data: CarFormValues) => void;
  }
  
  export interface CarFormValues {
    name?: string;
    type?: string;
    description?: string;
    color?: string;
    isElectric?: boolean;
    status?: 'available' | 'unavailable' ;
    features?: string[];
    pricePerHour?: number;
    isDeleted?: boolean;
    image?: string;
  }


  export interface ICar extends CarFormValues {
    _id: string
    image: string
    type: string
    location: string
  }
  
  