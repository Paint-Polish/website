import Head from 'next/head'
import { titleIfy , slugify } from '../utils/helpers'
import { DisplayMedium } from '../components'
import CartLink from '../components/CartLink'
import { fetchInventory } from '../utils/inventoryProvider'
import Link from 'next/link'

function Faq ({ categories = [] }) {
  return (
    <>
      <div className="w-full">
        <Head>
          <title>Paint Polish - Frequently Asked Questions (FAQ)</title>
          <meta name="description" content={`Paint Polish - Frequently Asked Questions (FAQ)`} />
          <meta property="og:title" content="Paint Polish - Frequently Asked Questions (FAQ)" key="title" />
        </Head>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Frequently asked questions</h2>
              <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                  <div>
                      <div className="mb-10">
                          <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                              Mode of Delivery
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                              Grab, Lalamove, Mr. Speedy, LBC, or Self Pick Up
                          </p>
                      </div>
                      <div className="mb-10">                        
                          <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                              Pick Up Location
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                              Uno High School (Alvarado Extension)
                          </p>
                      </div>
                      <div className="mb-10">
                          <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                              Mode of Payment
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                              BDO mobile transfer, PayMaya, GCash, or Cash on Delivery
                          </p>
                      </div>
                  </div>
                  <div>
                      <div className="mb-10">
                          <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                              Ingredients List
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                              butyl acetate, ethyl acetate, nitrocellulose, acrylates copolymer, adipic acid / neopentyl glycol / trimellitic anhydride copolymer / acetyl tributyl citrate,
                              isopropyl alcohol, denatonium benzoate, acetyl tributyl citrate, stearalkonium hectorite, silica, triphenyl phosphate, calcium carbonate, mica, dye, colorant, glitters, flakes.
                          </p>
                      </div>
                      <div className="mb-10">
                          <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                              Suggested Thinner to Use
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                              Thinners that contain these 2 ingredients ONLY: butyl acetate &amp; ethyl acetate (e.g. BOBBIE nail polish solvent)
                          </p>
                          <p className="text-gray-500 dark:text-gray-400">
                              Why? because other ingredients such as heptane, toluene, and etc. (e.g. CARONIA solvent) will disrupt / dissolve / destroy the special effect pigments like glitters, flakes, and shimmers.
                          </p>
                      </div>
                      <div className="mb-10">
                          <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                              Why are your polishes expensive?
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                              Because special effect pigments are expensive and sourced abroad so + international shipping fees.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Faq