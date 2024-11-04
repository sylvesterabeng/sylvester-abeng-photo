// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client'

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] }

/**
 * Item in *albums → photos*
 */
export interface AlbumsDocumentDataPhotosItem {
  /**
   * photo field in *albums → photos*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: albums.photos[].photo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  photo: prismic.ImageField<never>
}

type AlbumsDocumentDataSlicesSlice = GallerySlice

/**
 * Content for albums documents
 */
interface AlbumsDocumentData {
  /**
   * title field in *albums*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: albums.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * thumbnail field in *albums*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: albums.thumbnail
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  thumbnail: prismic.ImageField<never>

  /**
   * photos field in *albums*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: albums.photos[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  photos: prismic.GroupField<Simplify<AlbumsDocumentDataPhotosItem>>

  /**
   * Slice Zone field in *albums*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: albums.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AlbumsDocumentDataSlicesSlice> /**
   * Meta Title field in *albums*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: albums.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField

  /**
   * Meta Description field in *albums*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: albums.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *albums*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: albums.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>
}

/**
 * albums document from Prismic
 *
 * - **API ID**: `albums`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AlbumsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<AlbumsDocumentData>, 'albums', Lang>

export type AllDocumentTypes = AlbumsDocument

/**
 * Item in *Album → Default → Primary → photos*
 */
export interface GallerySlicePickupPrimaryPhotosItem {
  /**
   * photo field in *Album → Default → Primary → photos*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.pickup.primary.photos[].photo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  photo: prismic.ImageField<never>
}

/**
 * Primary content in *Album → Default → Primary*
 */
export interface GallerySlicePickupPrimary {
  /**
   * title field in *Album → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.pickup.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * photos field in *Album → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.pickup.primary.photos[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  photos: prismic.GroupField<Simplify<GallerySlicePickupPrimaryPhotosItem>>

  /**
   * number field in *Album → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.pickup.primary.number
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  number: prismic.KeyTextField
}

/**
 * Default variation for Album Slice
 *
 * - **API ID**: `pickup`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySlicePickup = prismic.SharedSliceVariation<
  'pickup',
  Simplify<GallerySlicePickupPrimary>,
  never
>

/**
 * Slice variation for *Album*
 */
type GallerySliceVariation = GallerySlicePickup

/**
 * Album Shared Slice
 *
 * - **API ID**: `gallery`
 * - **Description**: Gallery
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySlice = prismic.SharedSlice<'gallery', GallerySliceVariation>

declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig
    ): prismic.WriteClient<AllDocumentTypes>
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>
  }

  namespace Content {
    export type {
      AlbumsDocument,
      AlbumsDocumentData,
      AlbumsDocumentDataPhotosItem,
      AlbumsDocumentDataSlicesSlice,
      AllDocumentTypes,
      GallerySlice,
      GallerySlicePickupPrimaryPhotosItem,
      GallerySlicePickupPrimary,
      GallerySliceVariation,
      GallerySlicePickup,
    }
  }
}
