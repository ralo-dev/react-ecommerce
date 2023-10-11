import { Configure } from 'react-instantsearch-dom'

import { Banner } from '@/components/banner/banner'
import { ProductCardHitShowcase } from '@/components/product-card/product-card-hit'
import { ProductsShowcase } from '@/components/products-showcase/products-showcase'
import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import {
  getStaticPropsPage,
  SearchPageLayout,
} from '@/layouts/search-page-layout'
import BannerImage from '@/public/static/images/home/banner_alt.jpg'

export default function Home(props: SearchPageLayoutProps) {
  return (
    <SearchPageLayout {...props}>
      <Configure
        hitsPerPage={6}
        // We cannot retrieve the user token at build time, so we disable perso
        // feature to avoid an additional call to retrieve Algolia results at load time
        enablePersonalization={false}
        userToken={undefined}
      />

      <Banner
        size="xl"
        title="Nueva<br />Colección"
        subtitle="Otoño/Invierno 2023"
        image={BannerImage}
        imageAlt="Nueva colección"
        fullWidth={true}
        overlay={true}
        classNameTitle="text-3xl font-normal tracking-wider leading-tight laptop:text-7xl"
      />
      <ProductsShowcase
        title="Nuevos brazaletes"
        indexId="bracelets"
        query="bracelet"
        hitComponent={ProductCardHitShowcase}
      />
      <ProductsShowcase
        title="Nuevos anillos"
        indexId="rings"
        query="ring"
        className="laptop:bg-gray-50"
        hitComponent={ProductCardHitShowcase}
      />
      <ProductsShowcase
        title="Nuevos collares"
        indexId="necklaces"
        query="necklace"
        hitComponent={ProductCardHitShowcase}
      />
      <ProductsShowcase
        title="Nuevas cadenas"
        indexId="keychains"
        query="keychain"
        className="laptop:bg-gray-50"
        hitComponent={ProductCardHitShowcase}
      />
      {/*
      <ProductsShowcase
        title="Spring/summer 2021"
        indexId="spring-summer-2021"
        ruleContexts={['home-spring-summer-2021']}
        className="laptop:bg-gray-50"
        hitComponent={ProductCardHitShowcase}
      />
      */}
      <ProductsShowcase
        title="Otros productos"
        indexId="recommended"
        query="accesories"
        hitComponent={ProductCardHitShowcase}
      />
    </SearchPageLayout>
  )
}

export const getStaticProps = () => getStaticPropsPage(Home)
