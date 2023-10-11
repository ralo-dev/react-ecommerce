# PWA Ecom UI Template

This is a React 18/Next.js based template for an ecommerce application, focused on delivering a rich search and discovery experience.
The design is based on the [Algolia ecommerce UI design kit](https://www.algolia.com/doc/guides/solutions/ecommerce/ui-kits/) and the implementation focuses on performance and customization.

[View Preview](https://develop--cosmic-lamington-bef4bd.netlify.app/)

## Introduction

The PWA Ecom UI Template is fully responsive.
Check out the [latest version](https://develop--cosmic-lamington-bef4bd.netlify.app/) deployed on Netlify.

## Used technologies

### Front-end

- [**Autocomplete.js**](https://www.algolia.com/doc/ui-libraries/autocomplete/introduction/what-is-autocomplete/)
- [**React InstantSearch**](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/react/)
- Uses **React hooks/functional components**
- **SEO** optimized
- [**PWA**](https://web.dev/progressive-web-apps/) compliant
- Server-Side Rendering with [**Next.js**](https://nextjs.org/)
- Theming with [**Tailwind CSS**](https://tailwindcss.com/)
- [**Lighthouse**](https://developers.google.com/web/tools/lighthouse) scores >90%
- Built with [**TypeScript**](https://www.typescriptlang.org/)

## InstantSearch widgets

The UI Template uses **core** and **packaged** **React InstantSearch widgets**.

### Custom widgets

These ready-to-use _custom_ widgets are distributed as separate NPM packages (only those with with the 📦 icon for now) or present in this repository.

- 📦 [ColorRefinementList](https://github.com/algolia/react-instantsearch-widget-color-refinement-list)
- 📦 [SizeRefinementList](https://github.com/algolia/react-instantsearch-widget-size-refinement-list)
- 📦 [LoadMoreWithProgressBar](https://github.com/algolia/react-instantsearch-widget-loadmore-with-progressbar)
- [ExpandablePanel](./components/%40instantsearch/widgets/expandable-panel/expandable-panel.tsx)
- [RefinementsDropdown](./components/%40instantsearch/widgets/refinements-dropdown/refinements-dropdown.tsx)
- [RatingSelector](./components/%40instantsearch/widgets/rating-selector/rating-selector.tsx)
- [NoResultsHandler](./components/%40instantsearch/widgets/no-results-handler/no-results-handler.tsx)
- [BreadcrumbWithQuery](./components/%40instantsearch/widgets/breadcrumb/breadcrumb.tsx)

### Core widgets

These _core_ widgets are part of InstantSearch and are [customized](https://www.algolia.com/doc/guides/building-search-ui/widgets/customize-an-existing-widget/react/) using connectors:

<details>
  <summary>Expand</summary>
  
  #### Basics
  - InstantSearch
  - Index
  - Configure
  - SearchBox (virtual)

  #### Results
  - Hits/InfiniteHits
  - Highlight/Snippet

  #### Refinements
  - RefinementList
  - DynamicWidgets
  - HierarchicalMenu
  - CurrentRefinements
  - RangeInput
  - RatingMenu
  - ClearRefinements

  #### Metadata
  - Breadcrumb
  - Stats
  - StateResults

  #### Sorting
  - SortBy
  - RelevantSort
</details>

## Browser support

The UI template supports the **last two versions of the major browsers:** Chrome, Edge, Firefox, Safari.

## License

The UI template is licensed under the [MIT license](LICENSE).
