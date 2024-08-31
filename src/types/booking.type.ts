export type Tbooking = {
    _id: string
    "pick-up-date": string
    user: TUser
    car: TCar
    status: string
    userEmail: string
    "pick-up-time": string
    "drop-off-date": string
    "drop-off-time": string
    totalCost: number
    isPaid: boolean
  }
  
  export type TUser = {
    _id: string
    name: string
    email: string
    role: string
    phone: string
    address: string
    createdAt: string
    updatedAt: string
    __v: number
  }
  
  export type TCar = {
    _id: string
    name: string
    type: string
    description: string
    color: string
    isElectric: boolean
    status: string
    features: string[]
    pricePerHour: number
    isDeleted: boolean
    image: string
    createdAt: string
    updatedAt: string
    __v: number
  }
  