import { RoundCheckBadge } from "../../../assets/icons/Icons";
import SunRays from "../../../shared/animations/SunRays";

const PaymentLayout = (): JSX.Element => {
  return (
    <>
      <div className="max-w-2xl mx-auto bg-[#1f1f1f96] mt-8  sm:p-8 md:p-10  overflow-x-hidden text-gray-100">
      
        <div className=" space-y-2 pt-8">
          <h1 className="text-4xl font-bold text-white">
            Complete Your Rental
          </h1>
          <p className="description pt-3 w-[90%] sm:w-2/3 ">
            Enter your payment details to finalize.
          </p>
        </div>
        <div
          className="rounded-lg   text-gray-200 shadow-sm mt-8"
          data-v0-t="card"
        >
          <div className=" grid gap-6">
            <div className="grid gap-2">
              <label
                className="text-[18px] flex items-center gap-2  py-5 font-medium leading-none  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="payment-method"
              >
                Payment Method <RoundCheckBadge/>
              </label>
              <div
                role="radiogroup"
                aria-required="false"
                dir="ltr"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                tabIndex={0}
                style={{ outline: "none" }}
              >
                <div className="">
                  <button
                    type="button"
                    role="radio"
                    aria-checked="true"
                    data-state="checked"
                    value="credit-card"
                    className="aspect-square  h-4 w-4 rounded-full text-blue-500 ring-offset-background focus:outline-none focus-visible:ring-2  focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 peer sr-only"
                    id="credit-card"
                    tabIndex={-1}
                    data-radix-collection-item=""
                  >
                    <span
                      data-state="checked"
                      className="flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle h-2.5 w-2.5 fill-current text-blue-500"
                      >
                        <circle cx={12} cy={12} r={10} />
                      </svg>
                    </span>
                  </button>
                  <label
                    className="text-md font-bold leading-none text-gray-300 flex flex-col items-center justify-between rounded-md  bg-[#4342424d] p-4 hover:bg-gray-600 hover:text-gray-100 "
                    htmlFor="credit-card"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-6 size-11 text-primaryColor"
                    >
                      <rect width={20} height={14} x={2} y={5} rx={2} />
                      <line x1={2} x2={22} y1={10} y2={10} />
                    </svg>
                    Credit Card
                  </label>
                </div>
                <div>
                  <button
                    type="button"
                    role="radio"
                    aria-checked="false"
                    data-state="unchecked"
                    value="paypal"
                    className="aspect-square h-4 w-4 rounded-full text-blue-500 ring-offset-background focus:outline-none focus-visible:ring-2  focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 peer sr-only"
                    id="paypal"
                    tabIndex={-1}
                    data-radix-collection-item=""
                  />
                  <label
                    className="text-md font-bold leading-none text-gray-300 flex flex-col items-center justify-between rounded-md !bg-[#4342424d] p-4 "
                    htmlFor="paypal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-5 size-11   text-primaryColor"
                    >
                      <rect width={18} height={18} x={3} y={3} rx={2} />
                      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
                      <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" />
                    </svg>
                    PayPal
                  </label>
                </div>
                <div>
                  <button
                    type="button"
                    role="radio"
                    aria-checked="false"
                    data-state="unchecked"
                    value="apple-pay"
                    className="aspect-square h-4 w-4 rounded-full border border-blue-500 text-blue-500 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 peer sr-only"
                    id="apple-pay"
                    tabIndex={-1}
                    data-radix-collection-item=""
                  />
                  <label
                    className="text-md font-bold leading-none text-gray-300 flex flex-col items-center justify-between rounded-md !bg-[#4342424d] p-4 "
                    htmlFor="apple-pay"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-6 size-11  text-primaryColor"
                    >
                      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                      <path d="M10 2c1 .5 2 2 2 5" />
                    </svg>
                    Apple Pay
                  </label>
                </div>
              </div>
            </div>
            <div className="grid gap-2 space-y-2 my-3">
              <label
                className="text-sm font-medium leading-none text-gray-300 flex flex-col items-center justify-between rounded-md !bg-[#4342424d] p-4 "
                htmlFor="card-number"
              >
                Card Number
              </label>
              <input
                className="text-sm font-medium leading-none text-gray-300 flex flex-col items-center justify-between rounded-md !bg-[#4342424d] p-4 "
                id="card-number"
                placeholder="0000 0000 0000 0000"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="grid gap-4">
                <label
                  className="text-sm font-medium leading-none text-gray-300 flex flex-col items-center justify-between rounded-md !bg-[#4342424d] p-4 "
                  htmlFor="expiration-month"
                >
                  Expiration
                </label>
                <button
                  type="button"
                  role="combobox"
                  aria-controls="radix-:r11:"
                  aria-expanded="false"
                  aria-haspopup="listbox"
                  className="flex h-10 w-full items-center justify-between rounded-md  bg-[#4342424d] px-3 py-2 text-sm ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="expiration-month"
                  tabIndex={0}
                >
                  <span>MM / YY</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-gray-400"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </div>
              <div className="grid gap-2">
                <label
                  className="text-sm font-medium leading-none text-gray-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="cvv"
                >
                  CVV
                </label>
                <input
                  className="flex h-10 w-full rounded-md border-gray-600 bg-gray-700 px-3 py-2 bg-[#4342424d] text-sm focus-visible:outline-none disabled:opacity-50"
                  id="cvv"
                  placeholder="123"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 block w-full rounded-md bg-primaryColor md:w-1/2 ml-auto py-3  text-sm font-semibold  hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
};
export default PaymentLayout;
