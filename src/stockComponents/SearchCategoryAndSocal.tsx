import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, CarIcon, MapPinIcon, MenuIcon, SearchIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <CarIcon className="h-6 w-6" />
          <span className="sr-only">Mega Car</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Cars
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Locations
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Find Your Perfect Ride with Mega Car
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Discover our wide range of vehicles and book your dream car today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-2">
                  <div className="flex space-x-2">
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pick-up Location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new-york">New York</SelectItem>
                        <SelectItem value="los-angeles">Los Angeles</SelectItem>
                        <SelectItem value="chicago">Chicago</SelectItem>
                        <SelectItem value="miami">Miami</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Drop-off Location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new-york">New York</SelectItem>
                        <SelectItem value="los-angeles">Los Angeles</SelectItem>
                        <SelectItem value="chicago">Chicago</SelectItem>
                        <SelectItem value="miami">Miami</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex space-x-2">
                    <Input type="date" placeholder="Pick-up Date" />
                    <Input type="date" placeholder="Drop-off Date" />
                  </div>
                  <Button type="submit" className="w-full">
                    <SearchIcon className="mr-2 h-4 w-4" />
                    Search Cars
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Our Car Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <CarIcon className="h-12 w-12 mb-4" />
                  <h3 className="text-lg font-bold">Economy</h3>
                  <p className="text-sm text-gray-500 text-center mt-2">
                    Affordable and fuel-efficient cars for budget-conscious travelers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <CarIcon className="h-12 w-12 mb-4" />
                  <h3 className="text-lg font-bold">SUV</h3>
                  <p className="text-sm text-gray-500 text-center mt-2">
                    Spacious vehicles perfect for family trips and outdoor adventures.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <CarIcon className="h-12 w-12 mb-4" />
                  <h3 className="text-lg font-bold">Luxury</h3>
                  <p className="text-sm text-gray-500 text-center mt-2">
                    Premium cars for those who want to travel in style and comfort.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Special Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Weekend Getaway Deal</h3>
                  <p className="text-sm text-gray-500 mb-4">Get 20% off on weekend rentals. Perfect for short trips!</p>
                  <Button>Book Now</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Long-Term Rental Discount</h3>
                  <p className="text-sm text-gray-500 mb-4">Enjoy 15% off on rentals of 7 days or more.</p>
                  <Button>Book Now</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2023 Mega Car Rentals. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}