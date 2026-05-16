WanderLast 🌍

Live Site: WanderLast Live Demo

WanderLast is a modern full-stack travel destination platform built with the latest web technologies. Users can explore destinations, view destination details, and securely authenticate using Better Auth with protected client and server routes.

🚀 Tech Stack Frontend Next.js React Tailwind CSS Backend Node.js Express Database & Authentication MongoDB Better Auth jose-cjs Deployment Vercel ✨ Features 🔐 Secure authentication system using Better Auth 🛡️ Middleware protection for both client and server routes 🌍 Browse travel destinations 📄 Dynamic destination details pages ⚡ Fast App Router architecture with Next.js 🎨 Responsive modern UI using Tailwind CSS ☁️ Production deployment on Vercel 🗄️ MongoDB database integration 🔄 Dynamic routing with slug-based pages 📱 Mobile responsive layout 📂 Project Structure app/ ├── api/ ├── components/ ├── destinations/ ├── signin/ ├── signup/ └── lib/

public/ server/ middleware.js ⚙️ Environment Variables

Create a .env.local file in the root directory:

MONGODB_URI=your_mongodb_uri BETTER_AUTH_SECRET=your_secret_key BETTER_AUTH_URL=http://localhost:3000

For production:

BETTER_AUTH_URL=https://wanderlast-2.vercel.app 🛠️ Installation & Setup Clone the repository git clone https://github.com/rj-roy/wanderlast-1.git Navigate to project folder cd wanderlast-1 Install dependencies npm install Run development server npm run dev

Open:

http://localhost:3000 🔒 Authentication & Middleware

WanderLast uses Better Auth with middleware-based protection.

Protected routes are validated:

On the client side On the server side Through middleware checks

Authentication tokens are securely handled using jose-cjs.

🚀 Deployment

The application is deployed on:

Vercel Deployment

📦 Main Dependencies { "next": "16", "react": "19", "tailwindcss": "^4", "mongodb": "^6", "better-auth": "latest", "jose-cjs": "latest", "express": "^5" } 📸 Pages Home Page Destinations Page Dynamic Destination Details Sign In Sign Up Protected Routes 👨‍💻 Author

Developed by Roy 🚀