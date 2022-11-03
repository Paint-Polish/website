import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Button from '../../components/Button'
import Image from '../../components/Image'
import QuantityPicker from '../../components/QuantityPicker'
import { fetchInventory } from '../../utils/inventoryProvider'
import { slugify } from '../../utils/helpers'
import CartLink from '../../components/CartLink'
import { SiteContext, ContextProviderComponent } from '../../context/mainContext'

const ItemView = (props) => {
  const router = useRouter()
  const [numberOfitems, updateNumberOfItems] = useState(1)
  const { product } = props
  const { price, image, name, description, notes, subvariants, soldOut, lazadaUrl, shopeeUrl } = product
  const { context: { addToCart }} = props

  function addItemToCart (product) {
    product["quantity"] = numberOfitems
    addToCart(product)
  }

  function increment() {
    updateNumberOfItems(numberOfitems + 1)
  }

  function decrement() {
    if (numberOfitems === 1) return
    updateNumberOfItems(numberOfitems - 1)
  }

  function navigate(link) {
    router.push(link)
  }

  return (
    <>
      <Head>
        <title>Paint Polish - {name}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`Paint Polish - ${name}`} key="title" />
      </Head>
      <div className="
        sm:py-12
        md:flex-row
        py-4 w-full flex flex-1 flex-col my-0 mx-auto
      ">
        <div className="w-full md:w-1/2 flex flex-1 bg-gray-50 hover:bg-gray-100">
          <div className="flex flex-1 justify-center items-center">
            <Image src={image} alt="Inventory item" width="2048" height="2048"/>
          </div>
        </div>
        <div className="pt-2 px-0 md:px-10 pb-8 w-full md:w-1/2">
          <h1 className="
           sm:mt-0 mt-2 text-5xl font-light leading-large
          ">{name}</h1>
          {soldOut &&
            <h2 className="text-2xl tracking-wide sm:py-2 py-1">SOLD OUT</h2>
          }
          <h2 className="text-2xl tracking-wide sm:py-8 py-6">₱{price}</h2>
          <p className="text-gray-600 leading-7">{description}</p>
          {subvariants && subvariants.length > 0 &&
            <ul className="list-inside list-disc pt-3 pl-2">
              {subvariants.map((subvariant, index) => (
                <li key={index} className="text-gray-600">{subvariant}</li>
              ))}
            </ul>
          }
          <p className="text-gray-600 leading-7 italic pt-3">{notes}</p>
          
          {/* <div className="my-6">
            <QuantityPicker
              increment={increment}
              decrement={decrement}
              numberOfitems={numberOfitems}
            />
          </div> */}

          {!soldOut &&
            <div className="py-8 flex justify-evenly">
              <Button
                title="Buy at Lazada"
                onClick={() => navigate(lazadaUrl)}
              />

              <Button
                title="Buy at Shopee"
                onClick={() => navigate(shopeeUrl)}
              />
            </div>
          }
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths () {
  const inventory = await fetchInventory()
  const paths = inventory.map(item => {
    return { params: { name: slugify(item.name) }}
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const name = params.name.replace(/-/g," ")
  const inventory = await fetchInventory()
  const product = inventory.find(item => slugify(item.name) === slugify(name))

  return {
    props: {
      product,
    }
  }
}

function ItemViewWithContext(props) {
  return (
    <ContextProviderComponent>
      <SiteContext.Consumer>
        {
          context => <ItemView {...props} context={context} />
        }
      </SiteContext.Consumer>
    </ContextProviderComponent>
  )
}

export default ItemViewWithContext