# Quick Start Guide

## Your Admin Panel is Ready! 🎉

This project includes everything you requested:

### ✅ Features Implemented

1. **Next.js Setup** - Using App Router with JavaScript (JSX)
2. **Redux Toolkit (RTK Query)** - Complete state management with API integration
3. **Authentication Pages**:
   - Login page at `/login`
   - Signup page at `/signup`
4. **401 Error Handling** - Automatic redirect to login on unauthorized access
5. **Admin Panel UI**:
   - Responsive sidebar navigation
   - Header with search and user menu
   - Logout functionality
6. **Tailwind CSS** - Beautiful, modern styling throughout

## Quick Start

### 1. Create Environment File

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

Replace `https://api.example.com` with your actual backend API URL.

### 2. Start Development Server

The server should already be running! If not, run:

```bash
npm run dev
```

### 3. Access the Application

Open your browser and go to:
- **Main**: http://localhost:3000 (will redirect based on auth status)
- **Login**: http://localhost:3000/login
- **Signup**: http://localhost:3000/signup
- **Dashboard**: http://localhost:3000/dashboard

## How It Works

### Authentication Flow

1. **First Visit** → Redirects to `/login` if not authenticated
2. **After Login/Signup** → Token saved in localStorage and Redux
3. **Dashboard Access** → Protected routes check authentication
4. **API Calls** → Token automatically included in headers
5. **401 Response** → Auto logout and redirect to login

### Pages Included

- **Dashboard** (`/dashboard`) - Overview with stats and recent activities
- **Users** (`/dashboard/users`) - User management table
- **Settings** (`/dashboard/settings`) - Application settings
- **Analytics** (`/dashboard/analytics`) - Analytics placeholders
- **Reports** (`/dashboard/reports`) - Reports management

### Customization

#### Update API Endpoints

Edit `store/api/authApi.js` to match your backend API:

```javascript
login: builder.mutation({
  query: (credentials) => ({
    url: "/auth/login",  // Change this
    method: "POST",
    body: credentials,
  }),
}),
```

#### Add New Pages

1. Create page in `app/dashboard/your-page/page.jsx`
2. Use `DashboardLayout` wrapper:

```jsx
import DashboardLayout from "@/components/DashboardLayout";

export default function YourPage() {
  return (
    <DashboardLayout>
      {/* Your content */}
    </DashboardLayout>
  );
}
```

3. Add to sidebar in `components/Sidebar.jsx`

#### Add New API Endpoints

In `store/api/` create a new file or add to existing:

```javascript
export const yourApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => '/your-endpoint',
    }),
  }),
});

export const { useGetDataQuery } = yourApi;
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Protected dashboard pages
│   ├── login/            # Login page
│   └── signup/           # Signup page
├── components/           # Reusable components
│   ├── DashboardLayout.jsx
│   ├── Header.jsx
│   ├── ProtectedRoute.jsx
│   └── Sidebar.jsx
└── store/               # Redux store
    ├── api/            # RTK Query APIs
    ├── slices/         # Redux slices
    └── store.js        # Store config
```

## Important Notes

### Backend Integration

The project is set up for easy backend integration. You need to:

1. Set `NEXT_PUBLIC_API_URL` in `.env.local`
2. Ensure your backend returns tokens in this format:

```json
{
  "token": "your-jwt-token",
  "user": {
    "name": "User Name",
    "email": "user@example.com"
  }
}
```

Or adjust the login/signup handlers in:
- `app/login/page.jsx`
- `app/signup/page.jsx`

### 401 Error Handling

The `store/api/apiSlice.js` includes middleware that automatically:
- Catches 401 errors from any API call
- Clears authentication state
- Redirects to login page

### Local Storage

Authentication tokens are stored in:
- **localStorage** - For persistence across sessions
- **Redux state** - For application state management

## Next Steps

1. ✅ Configure your backend API URL
2. ✅ Test login/signup with your backend
3. ✅ Customize the sidebar menu items
4. ✅ Add your own dashboard pages
5. ✅ Style components to match your brand

## Troubleshooting

### Port already in use
If port 3000 is busy, Next.js will suggest an alternative port.

### API Connection Issues
- Check `.env.local` has correct API URL
- Ensure backend allows CORS from localhost:3000
- Check Network tab in browser DevTools

### Build Issues
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## Need Help?

Check the main `README.md` for detailed documentation.

Happy coding! 🚀


