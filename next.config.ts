// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			// Unsplash Source (redirector)
			{ protocol: "https", hostname: "source.unsplash.com" },
			// Final asset domain (redirect target)
			{ protocol: "https", hostname: "images.unsplash.com" },
			// Optional extra placeholder provider you might use
			{ protocol: "https", hostname: "picsum.photos" },
		],
	},
};
module.exports = nextConfig;
