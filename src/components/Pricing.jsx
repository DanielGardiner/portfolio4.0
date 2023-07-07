import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

export default function Pricing() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-themePurple sm:text-4xl">Simple no-tricks pricing</h2>
          <p className="mt-6 text-lg leading-8 text-themeGrey-500">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas
            in. Explicabo id ut laborum.
          </p>
        </div>
        <PricingItem />
        <PricingItem />
        <PricingItem />
      </div>
    </div>
  )
}


function PricingItem() {
  return (
    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none items-center">
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-themePurple">Lifetime membership</h3>
        <p className="mt-6 text-base leading-7 text-themeGrey-500">
          Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
          repellendus etur quidem assumenda.
        </p>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="flex-none text-sm font-semibold leading-6 text-themeGreen-500">What’s included</h4>
          <div className="h-px flex-auto bg-gray-100" />
        </div>
        <ul
          role="list"
          className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-themeGrey-500 sm:grid-cols-2 sm:gap-6"
        >
          {includedFeatures.map((feature) => (
            <li key={feature} className="flex gap-x-3">
              <CheckIcon className="h-6 w-5 flex-none text-themeGreen-500" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      </div>


      <div className="-mt-2 p2 lg:p-8 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            <div className="text-5xl font-bold tracking-tight text-themePurple">£349</div>
            <div className="text-sm font-semibold leading-6 tracking-wide text-themeGrey-500">per hour</div>
          </div>
        </div>
      </div>
    </div >
  )
}