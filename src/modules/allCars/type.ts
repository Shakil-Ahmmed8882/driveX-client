

export type TCar = {
    _id: string;
    name:string;
    description:string;
    color:string;
    isElectric:boolean;
    status:'available' | 'unavailable';
    features:string[];
    pricePerHour:number;
    image:string;
    isDeleted:boolean;
}
