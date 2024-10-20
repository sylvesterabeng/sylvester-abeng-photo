import { redirectToPreviewURL } from '@prismicio/next'

import { createClient } from '../../../prismicio'

import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const client = createClient()

  return await redirectToPreviewURL({ client, request })
}
