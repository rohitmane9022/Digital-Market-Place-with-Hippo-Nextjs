import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import getPayloadClient from "@/get-payload-clients"
import { formatPrice } from "@/lib/utils"
import Link from "next/link"

interface PageProps{
  params:{
    productId:string
  }
}


const BREADCRUMBS=[
  {id:1,name:"Home", href:"/"},
  {id:2,name:"Products", href:"/products"}
]

const page = async({params}:PageProps) => {

  const payload= await getPayloadClient()

  const {docs}= await payload.find({
    collection:"products",
    limit:1,

  })
  return (
    <MaxWidthWrapper className="bg-white">
      <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:max-w-lg lg:self-end">
            <ol className="flex items-center space-x-2">
              {BREADCRUMBS.map((breadcrumb,i)=>(
                <li key={breadcrumb.href}>
                  <div className="flex items-center text-sm">
                    <Link href={breadcrumb.href} className="font-medium text-sm text-muted-foreground hover:text-gray-900">{breadcrumb.name}</Link>
                    {i !== BREADCRUMBS.length -1 ?(
                      <svg
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                      className='ml-2 h-5 w-5 flex-shrink-0 text-gray-300'>
                      <path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z' />
                  </svg>
                    ):null}
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-4">
              <h1 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">{product.name}</h1>
            </div>
            <section className="mt-4">
              <div className="flex items-center">
                <p className="font-medium text-gray-900">{formatPrice(product.price)}</p>
                <div className="ml-4 border-l text-muted-foreground border-gray-300 pl-4">{label}</div>
              </div>
            </section>
          </div>
      </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default page