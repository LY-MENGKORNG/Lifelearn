<<<<<<< HEAD
=======
import { NextConfig } from 'next'
>>>>>>> b73017f (chore(main): #3 change tech stack)
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
<<<<<<< HEAD
const nextConfig = {}
=======
const nextConfig: NextConfig = {}
>>>>>>> b73017f (chore(main): #3 change tech stack)

module.exports = withNextIntl(nextConfig)