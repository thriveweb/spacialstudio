import _uniq from 'lodash/uniq'
import _kebabCase from 'lodash/kebabCase'

export const getCollectionTerms = (
  collection = [],
  taxonomyName,
  orderBy = 'asc'
) => {
  // collection: array of items in a collection
  // taxonomyName: taxonomy field title, comma-separated string form each collection item
  // orderBy: ['asc', 'desc'] capitals are allowed

  if (!collection.length) return []
  let terms = collection
    .filter(collectionItem => collectionItem[taxonomyName])
    .reduce((acc, collectionItem) => {
      const termString = collectionItem[taxonomyName]
      const collectionItemTerms = termString.split(',')
      return _uniq([...acc, ...collectionItemTerms])
    }, [])
    .sort()

  terms = orderBy.toLowerCase() === 'asc' ? terms : terms.reverse()
  return terms
}

export const documentHasTerm = (doc, taxonomyName, term) => {
  const termString = doc[taxonomyName]
  if (!termString) return false
  const terms = termString.split(',').map(term => _kebabCase(term))
  return terms.includes(_kebabCase(term))
}
