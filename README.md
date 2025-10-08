# Admin Panel with Next.js and Redux Toolkit

A modern admin panel built with Next.js, Redux Toolkit (RTK Query), and Tailwind CSS.

## Features

- ✅ **Authentication System**: Login and Signup pages with Redux state management
- ✅ **Protected Routes**: Automatic redirection for unauthorized users
- ✅ **401 Error Handling**: Automatic logout and redirect on unauthorized API responses
- ✅ **Admin Dashboard**: Beautiful UI with sidebar navigation and header
- ✅ **RTK Query Integration**: API calls with Redux Toolkit Query
- ✅ **Responsive Design**: Mobile-friendly layout with Tailwind CSS
- ✅ **Logout Functionality**: Secure logout with state cleanup

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **State Management**: Redux Toolkit with RTK Query
- **Styling**: Tailwind CSS
- **Language**: JavaScript (JSX)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file (copy from `.env.local.example`):
```bash
cp .env.local.example .env.local
```

4. Update the API URL in `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── dashboard/          # Protected dashboard pages
│   │   ├── analytics/      # Analytics page
│   │   ├── reports/        # Reports page
│   │   ├── settings/       # Settings page
│   │   ├── users/          # Users management page
│   │   └── page.jsx        # Main dashboard page
│   ├── login/              # Login page
│   ├── signup/             # Signup page
│   ├── globals.css         # Global styles
│   ├── layout.jsx          # Root layout
│   └── page.jsx            # Home page (redirects)
├── components/
│   ├── DashboardLayout.jsx # Dashboard layout wrapper
│   ├── Header.jsx          # Header with logout
│   ├── ProtectedRoute.jsx  # Route protection HOC
│   └── Sidebar.jsx         # Sidebar navigation
├── store/
│   ├── api/
│   │   ├── apiSlice.js     # RTK Query base API slice
│   │   └── authApi.js      # Authentication API endpoints
│   ├── slices/
│   │   └── authSlice.js    # Auth state management
│   ├── provider.jsx        # Redux Provider wrapper
│   └── store.js            # Redux store configuration
└── ...config files
```

## Key Features

### Authentication Flow

1. User visits the site → redirected to login if not authenticated
2. Login/Signup → Token stored in localStorage and Redux state
3. Protected routes check for token → redirect to login if missing
4. API calls include token in headers automatically
5. 401 responses → automatic logout and redirect to login

### API Integration

The project uses RTK Query for API calls. To integrate with your backend:

1. Update `NEXT_PUBLIC_API_URL` in `.env.local`
2. Modify API endpoints in `store/api/authApi.js` to match your backend
3. Update response structure in login/signup handlers if needed

### Protected Routes

All dashboard pages are automatically protected using the `ProtectedRoute` component and `DashboardLayout`.

### 401 Error Handling

The API slice includes middleware that:
- Intercepts all API responses
- Detects 401 Unauthorized errors
- Clears authentication state
- Redirects to login page

## Customization

### Adding New Pages

1. Create a new page in `app/dashboard/your-page/page.jsx`
2. Wrap with `DashboardLayout` component
3. Add navigation link in `components/Sidebar.jsx`

### Styling

- Edit `tailwind.config.js` for theme customization
- Modify `app/globals.css` for global styles
- Use Tailwind utility classes in components

### API Endpoints

Add new API endpoints in `store/api/` by injecting into the base API slice:

```javascript
export const yourApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    yourEndpoint: builder.query({
      query: () => '/your-endpoint',
    }),
  }),
});
```

## Building for Production

```bash
npm run build
npm start
```

## License

MIT

## Support

For issues or questions, please open an issue in the repository.


