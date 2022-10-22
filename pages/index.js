import Head from 'next/head'
import { Center, Footer, Tag, Showcase, DisplaySmall, DisplayMedium } from '../components'
import { titleIfy, slugify } from '../utils/helpers'
import { fetchInventory } from '../utils/inventoryProvider'
import CartLink from '../components/CartLink'

const Home = ({ inventoryData = [], categories: categoryData = [], trendingData = [] }) => {
  const inventory = inventoryData.slice(0, 4)
  const categories = categoryData.slice(0, 2)
  const trending = trendingData.slice(0, 4)

  return (
    <>
      <div className="w-full">
        <Head>
          <title>Paint Polish</title>
          <meta name="description" content="First Philippine Artisan 5-Free and Cruelty-Free Nail Polish Est. 2021" />
          <meta property="og:title" content="Paint Polish" key="title" />
        </Head>
        <div className="bg-gray-300
        p-6 pb-10 smpb-6
        flex lg:flex-row flex-col">
          <div className="pt-4 pl-2 sm:pt-12 sm:pl-12 flex flex-col">
            <Tag
              year="FEATURED PRODUCT"
              category={inventory[2].categories[0].toUpperCase()}
            />
            <Center
              price={inventory[2].price}
              title={inventory[2].name}
              link={`/product/${slugify(inventory[2].name)}`}
            />
            {/* <Footer
              designer="Starter Studios"
            /> */}
          </div>
          <div className="flex flex-1 justify-center items-center relative">
              <Showcase
                imageSrc={inventory[2].image}
              />
              <div className="absolute
              w-48 h-48 sm:w-72 sm:h-72 xl:w-88 xl:h-88
              bg-white z-0 rounded-full" />
          </div>
        </div>
      </div>
      <div className="
        lg:my-8 lg:grid-cols-2
        grid-cols-1
        grid gap-4 my-4 
      ">
        <DisplayMedium
          imageSrc={categories[0].image}
          subtitle={`${categories[0].itemCount} items`}
          title={titleIfy(categories[0].name)}
          link={`/collection/${slugify(categories[0].name)}`}
        />
        <DisplayMedium
          imageSrc={categories[1].image}
          subtitle={`${categories[1].itemCount} items`}
          title={titleIfy(categories[1].name)}
          link={`/collection/${slugify(categories[1].name)}`}
        />
      </div>
      <div className="pt-10 pb-6 flex flex-col items-center">
        <h2 className="text-4xl mb-3">Trending Now</h2>
        <p className="text-gray-600 text-sm">Find the perfect nail polish or nail care.</p>
      </div>
      <div className="my-8 flex flex-col lg:flex-row justify-between">
        <DisplaySmall
          imageSrc={trending[0].image}
          title={trending[0].name}
          subtitle={trending[0].categories[0]}
          link={`/product/${slugify(trending[0].name)}`}
        />

        <DisplaySmall
          imageSrc={trending[1].image}
          title={trending[1].name}
          subtitle={trending[1].categories[0]}
          link={`/product/${slugify(trending[1].name)}`}
        />

        <DisplaySmall
          imageSrc={trending[2].image}
          title={trending[2].name}
          subtitle={trending[2].categories[0]}
          link={`/product/${slugify(trending[2].name)}`}
        />

        <DisplaySmall
          imageSrc={trending[3].image}
          title={trending[3].name}
          subtitle={trending[3].categories[0]}
          link={`/product/${slugify(trending[3].name)}`}
        />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const inventory = await fetchInventory()
  
  const inventoryCategorized = inventory.reduce((acc, next) => {
    const categories = next.categories
    categories.forEach(c => {
      const index = acc.findIndex(item => item.name === c)
      if (index !== -1) {
        const item = acc[index]
        item.itemCount = item.itemCount + 1
        acc[index] = item
      } else {
        const item = {
          name: c,
          image: next.image,
          itemCount: 1
        }
        acc.push(item)
      }
    })
    return acc
  }, [])

  const inventoryTrending = inventory.filter((obj) => {
    return obj.isTrending;
  });
  
  return {
    props: {
      inventoryData: inventory,
      categories: inventoryCategorized,
      trendingData: inventoryTrending
    }
  }
}

export default Home