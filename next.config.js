/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental:{
    appDir:true,
  },
  images: {
    domains: ["lh3.googleusercontent.com","cdn.sanity.io"],
  }
}
