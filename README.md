# Crime Map

## Overview

The **Crime Map** project is a web application that allows users to anonymously report and tag crimes on a map. It leverages the **Google Maps API** for interactive mapping and categorizes crimes based on severity and type. Users can submit crime reports with minimal text input through dropdown menus, making the process quick and efficient.

## Features

- **Crime Tagging**: Users can mark crime locations on an interactive map using custom markers.
- **Crime Categories**: Crimes are categorized into types such as **Robbery**, **Assault**, **Theft**, **Arson**, and more.
- **Severity Indicators**: Crimes are classified by severity (Low, Medium, High) with color-coded markers for easy identification.
- **User Interaction**: Users can select crime type and severity via dropdowns and radial buttons.
- **Popup Information**: Crime details (e.g., description, timestamp, location) are displayed in a pop-up when a marker is clicked.
- **Anonymous Submissions**: All crime reports are submitted anonymously without requiring user registration.

## Tech Stack

- **Frontend**: React.js, Google Maps API, NPM
- **Backend**: MongoDB (for storing crime data)
- **Deployment**: Vercel (for hosting the application)

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (for local development or cloud MongoDB setup)

### Steps to Run Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/crime-map.git
   cd crime-map
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up MongoDB**:
   - Set up your MongoDB database locally or use a cloud MongoDB service.
   - Create a `.env` file in the root directory and configure your MongoDB URI:
     ```
     MONGODB_URI=your_mongodb_connection_string
     ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Directory Structure

```
.
├── assets
│   └── markers
│       ├── clock.png          # Marker image for time-related crimes
│       └── criminal.png       # Marker image for general crime
├── components
│   ├── CrimeForm.jsx          # Form for submitting crime reports
│   ├── CrimeMap.jsx           # Interactive map component
│   ├── CrimeMarker.jsx        # Custom marker component for crimes
│   └── CrimePopup.jsx         # Popup for displaying crime details
├── favicon.ico                # Favicon for the website
├── globals.css                # Global styling
├── layout.tsx                 # Layout component for wrapping the application
├── pages
│   └── Home.jsx               # Home page of the application
└── page.tsx                   # Entry point for the application
```

## Usage

- **Submit Crime Reports**: Users can click on the map to place markers and select the crime type and severity using dropdowns.
- **View Reported Crimes**: Hover over markers on the map to see brief crime descriptions. Click to view detailed reports.
- **Filter Crimes**: Use the dropdown menu to filter reported crimes by category or severity.

## Contributing

We welcome contributions to improve this project! If you would like to contribute:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Create a pull request

Please make sure to follow best practices and provide thorough explanations of any changes you make.

## License

This project is licensed under the MIT License.

---

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
