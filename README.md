# NGO Website

A modern, responsive website for an NGO built with Next.js, Tailwind CSS, and TypeScript.

## Features

- Responsive design for all devices
- Form submission to Google Sheets
- Animated components using Framer Motion
- SEO-friendly with Next.js Head
- TypeScript for type safety
- Tailwind CSS for styling
- Jest & React Testing Library for testing

## Prerequisites

- Node.js 14.x or later
- npm or yarn
- Google Sheets API credentials

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd ngo-website
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:

   ```
   GOOGLE_SHEET_ID=your_sheet_id_here
   GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account_email_here
   GOOGLE_PRIVATE_KEY=your_private_key_here
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Google Sheets Setup

1. Create a new Google Sheet
2. Go to the Google Cloud Console
3. Create a new project
4. Enable the Google Sheets API
5. Create a service account
6. Download the credentials JSON file
7. Share your Google Sheet with the service account email
8. Copy the Sheet ID from the URL
9. Update the `.env.local` file with your credentials

## Project Structure

```
├── components/         # Reusable components
├── pages/             # Next.js pages
│   ├── api/          # API routes
│   └── *.tsx         # Page components
├── public/           # Static assets
├── styles/           # Global styles
├── .env.local        # Environment variables
├── next.config.js    # Next.js configuration
├── package.json      # Dependencies
├── tailwind.config.js # Tailwind configuration
└── tsconfig.json     # TypeScript configuration
```

## Testing

Run the test suite:

```bash
npm test
# or
yarn test
```

## Deployment

The site is configured for deployment on Vercel. To deploy:

1. Push your code to a Git repository
2. Import the project in Vercel
3. Add your environment variables
4. Deploy

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for the animation library
- Google Sheets API for form data storage
