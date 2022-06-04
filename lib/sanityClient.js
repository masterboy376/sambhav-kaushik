import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'kvdcs93e',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'sk98EIxHyVurM1mXag7s2PfWCkVqlI1ikWFTlqahWVl8TNlLkLFgezVocNLyLnFOoYCQgsFiHo7qeDM251CyiWbLfCHAFLTy6R93Snk8Dg6wjyEfi53emr50XMZmsWrGHHMkqwOIIiIIDnth9yRtp9Jeu9IlBmqdGw6QhEf6kaDVu5x0PRXv',
  useCdn: true,
})