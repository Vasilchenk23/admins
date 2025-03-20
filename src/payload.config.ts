import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import News from './collections/News'
import AboutUs from './collections/AboutUs'
import Evacuation from './collections/Evacuation'
import FinancialAid from './collections/FinancialAid'
import ForChildren from './collections/ForChildren'
import ForPensioners from './collections/ForPensioners'
import Gifts from './collections/Gifts'
import Health from './collections/Health'
import HumanitarianAid from './collections/HumanitarianAid'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, News, AboutUs, Evacuation, FinancialAid, ForChildren, ForPensioners, Gifts, Health, HumanitarianAid],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
   vercelBlobStorage({
    enabled: true,
    collections: {
      media: true,
   },
   token: process.env.BLOB_READ_WRITE_TOKEN
   })
  ],
})
