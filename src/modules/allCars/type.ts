export type TCar = {
    _id: string; // Assuming the _id is always present
    name: string;
    type: string;
    description: string;
    color: string;
    isElectric: boolean;
    status: 'available' | 'unavailable' | string;
    features: string[];
    pricePerHour: number;
    isDeleted: boolean;
    image: string;
    createdAt: string; 
    updatedAt: string; 
  };


  export type Tdata = {
    data: TCar
  }