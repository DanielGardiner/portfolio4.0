import { motion } from "framer-motion";
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
    <motion.div
      variants={{
        hide: { opacity: 0, y: 30, scale: 0.9 },
        show: { opacity: 1, y: 0, scale: 1 }
      }}
      initial={'hide'}
      whileInView={'show'}
      transition={{
        duration: 0.8,
        ease: "easeIn",
        stiffness: 30,
      }}
      viewport={{ once: true }}

      className="mx-auto mt-16 max-w-2xl rounded-[30px] bg-gradient-to-r from-themeOrange-100 to-themeOrange-500 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none p-1">
      <div class="flex h-full w-full items-center justify-center bg-white rounded-t-[25px] tablet:rounded-l-[25px] tablet:rounded-r-none p-2">
        <div className="p-8 sm:p-10 lg:flex-auto">
          <h3 className="text-2xl font-bold tracking-tight text-themePurple">Lifetime membership</h3>
          <p className="mt-6 text-base leading-7 text-themeGrey-500">
            Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
            repellendus etur quidem assumenda.
          </p>
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-sm font-semibold leading-6 text-themeGreen-500">What’s included</h4>
            <div className="h-px flex-auto bg-themeGrey-500 bg-opacity-20" />
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
      </div>


      <div className="-mt-2 p2 lg:p-8 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 bg-white rounded-b-[25px] tablet:rounded-r-[25px] tablet:rounded-l-none">
        <div className="rounded-[25px] tablet:bg-themeGrey-100 py-10 text-center tablet:ring-1 tablet:ring-inset tablet:ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 h-full">
          <div className="mx-auto max-w-xs px-8">
            <div className="text-5xl font-bold tracking-tight text-themePurple">£349</div>
            <div className="text-sm font-semibold leading-6 tracking-wide text-themeGreen-500">per hour</div>
          </div>
        </div>
      </div>
    </motion.div >
  )
}