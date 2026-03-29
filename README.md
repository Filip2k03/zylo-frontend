This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Zylo Frontend - Next.js Setup Guide

To build this locally as a fully structured Next.js project, follow these steps in your terminal.

1. Create the Next.js Project

Run this command to create the initial project folder:

npx create-next-app@latest zylo-frontend


When prompted, select "Yes, use recommended defaults" to automatically set up TypeScript, Tailwind CSS, and the App Router:

? Would you like to use the recommended Next.js defaults? › - Use arrow-keys. Return to submit.
❯   Yes, use recommended defaults
    TypeScript, ESLint, Tailwind CSS, App Router, AGENTS.md
    No, reuse previous settings
    No, customize settings


After the installation finishes, navigate into your new project directory:

cd zylo-frontend


2. Install Dependencies

Zylo relies on Lucide React for beautiful, lightweight icons, and we'll use Axios later for your PHP backend API calls.

npm install lucide-react axios clsx tailwind-merge


3. Recommended Local Folder Structure

When you move the code from the single-file prototype (provided below) into your local VS Code environment, break it down like this:

zylo-frontend/
├── src/
│   ├── app/
│   │   ├── page.jsx            // The 'Welcome' view
│   │   ├── (auth)/
│   │   │   ├── login/page.jsx  // The 'Login' view
│   │   │   └── register/page.jsx // The 'Register' view
│   │   ├── (main)/
│   │   │   ├── feed/page.jsx   // The 'Feed' view
│   │   │   ├── chat/page.jsx   // The 'Chat' view
│   │   │   ├── create/page.jsx // The 'Create Post' view
│   │   │   └── profile/page.jsx// The 'Profile' view
│   │   ├── layout.jsx          // Global Nav and Layout
│   ├── components/
│   │   ├── ui/
│   │   │   ├── HypeButton.jsx  // The hold-to-hype haptic button
│   │   │   └── PostCard.jsx    // The post layout component
│   │   ├── navigation/
│   │   │   ├── BottomNav.jsx   // Bottom navigation bar
│   │   │   └── SmartHeader.jsx // Dynamic top header
│   ├── lib/
│   │   └── utils.js            // Zodiac and Age calculators


4. Connecting to Your PHP Backend

In your local project, you will replace the mock handleRegisterSubmit with real API calls using the PHP backend you already built:

// Example Next.js API Call to your PHP Backend
const handleRegister = async (userData) => {
    try {
        const response = await fetch('[https://your-domain.com/api/users/register](https://your-domain.com/api/users/register)', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        const data = await response.json();
        if (data.status === 'success') {
            // Save JWT to localStorage and route to Feed
        }
    } catch (error) {
        console.error("Registration failed", error);
    }
}

