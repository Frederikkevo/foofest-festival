const nextConfig = {
    images: {
      domains: ['picsum.photos', 'https://hill-mirror-era.glitch.me/', 'localhost'],
      remotePatterns: [
        { protocol: 'https', hostname: '**' },
      ],
    },
  }
  
  export default nextConfig;
  