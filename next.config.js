/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'drive.google.com' ,
           
           
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com' ,
           
           
          },
        ],
      }
      ,
      env: {
        ADMIN_URL: 'https://adminab9211.vercel.app',
      },

     
}

module.exports = nextConfig
