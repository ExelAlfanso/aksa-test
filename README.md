# AKSA Test App - Frontend Intern Assessment

A modern product management application built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Zustand** for state management.

This project is developed as part of the **PT Aksamedia Mulia Digital Frontend Developer Internship Assessment**.

---

## PROJECT REQUIREMENTS - TUGAS 1 (TASK 1)

### ✅ Authentication Requirements

- [x] **Login/Auth without API** - Implemented with static credentials
- [x] **Login-only feature** - No register functionality required
- [x] **Username display in navbar** - Shown in top-right corner with dropdown
- [x] **Logout feature** - Available in navbar dropdown
- [x] **Pure Tailwind CSS** - No UI libraries (Chakra, Material UI, etc.)
- [x] **Custom dropdown** - Built from scratch without external library
- [x] **Persistent authentication** - User stays logged in after page refresh (Zustand persist middleware)
- [x] **Private routes** - All pages except login require authentication

### ✅ CRUD & Data Management

- [x] **CRUD operations** - Create, Read, Update, Delete products
- [x] **No API usage** - Using localStorage for data persistence
- [x] **Pagination** - Products displayed with 5 items per page
- [x] **Search/Filter** - Search by product name or category
- [x] **Query string persistence** - Page number and search term synced to URL
- [x] **State restoration** - Page and search state restored from query params

### ⚠️ Theme Management

- [x] **Dark/Light mode** - Light and dark modes supported
- [ ] **System preference detection** - ⚠️ PENDING - System mode does not track OS yet
- [x] **Dynamic theme switching** - Available via navbar dropdown
- [x] **Theme persistence** - Saved to localStorage
- [ ] **OS change detection** - ⚠️ PENDING - Needs `matchMedia` listener

### ⚠️ User Profile Management

- [ ] **User profile edit page** - ⚠️ PENDING - Route and page component needed
- [ ] **Edit full name** - ⚠️ PENDING - Profile edit form needed
- [ ] **Auto navbar update** - ⚠️ PENDING - Must sync when profile changes
- [ ] **Change persistence** - ⚠️ PENDING - Already handled by auth store persist
- [x] **Backend structure ready** - `updateName()` method exists in auth store

### ✅ Technical Requirements

- [x] **Responsive design** - Mobile, tablet, and desktop optimized
- [x] **React/Next.js** - Value plus: Using React with Next.js 15
- [x] **TypeScript** - Full type safety throughout codebase
- [x] **No third-party pagination library** - Custom implementation
- [x] **Static data only** - No API calls, using localStorage

---

## Completion Checklist

| Category                   | Status             | Items     | Progress |
| -------------------------- | ------------------ | --------- | -------- |
| **Authentication**         | ✅ Complete        | 8/8       | 100%     |
| **CRUD Operations**        | ✅ Complete        | 6/6       | 100%     |
| **Theme Management**       | ⚠️ Partial         | 3/5       | 60%      |
| **User Profile**           | ⚠️ Pending         | 1/4       | 25%      |
| **Technical Requirements** | ✅ Complete        | 5/5       | 100%     |
| **TOTAL**                  | **🟡 In Progress** | **23/28** | **82%**  |

### TODO List for Remaining Features

1. **System Theme Sync**

- Set default theme to `system`
- Read OS preference via `matchMedia`
- Listen for OS theme changes and update UI

2. **User Profile Edit Page**
   - Create new route `/profile` or `/settings`
   - Form to edit user's full name
   - Update user state in auth store
   - Show success/confirmation message
   - Return to dashboard or auto-update navbar

3. **Navbar Auto-Update**
   - Subscribe to auth store changes
   - Update username display when profile is edited
   - No page reload required

---

## Features

- 🔐 **Authentication** - Login/Logout with persistent user state
- 🎨 **Theme Switching** - Light/Dark theme with persistence (system sync pending)
- 📦 **Product Management** - CRUD operations using localStorage
- 📊 **Pagination** - Custom product pagination (5 per page)
- 👤 **User Profile Backend** - Structure ready for profile management
- 🎯 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🧩 **Component Architecture** - Reusable, well-organized components

---

## Project Structure

```
app/                                    # Next.js App Router
├── (theme)/                           # Theme layout group (applies theme provider)
│   ├── (auth)/                        # Auth pages (login, logout)
│   │   ├── login/
│   │   │   └── page.tsx               # Login page
│   │   └── logout/
│   │       └── page.tsx               # Logout confirmation page
│   ├── (navigate)/                    # Protected routes
│   │   ├── home/
│   │   │   └── page.tsx               # Home page (empty)
│   │   ├── products/
│   │   │   └── page.tsx               # Products CRUD page
│   │   └── layout.tsx                 # Navigation bar wrapper
│   └── layout.tsx                     # Theme layout with useTheme hook
├── layout.tsx                         # Root layout with ThemeProvider
├── page.tsx                           # Entry point (redirects to /login or /products)
├── globals.css                        # Global styles & CSS variables
└── favicon.ico

components/
├── NavBar.tsx                         # Top navigation with auth & theme dropdowns
├── Text.tsx                           # Typography components (HeaderOne, HeaderTwo, Text)
├── PaginationControls.tsx             # Pagination buttons
├── buttons/
│   ├── Button.tsx                     # Generic button component
│   └── ThemeButton.tsx                # Styled theme button
├── dropdowns/
│   ├── Dropdown.tsx                   # Reusable dropdown wrapper
│   ├── DropdownItem.tsx               # Dropdown menu item
│   ├── AuthDropdown.tsx               # Auth dropdown (login/logout)
│   └── ThemeDropdown.tsx              # Theme selector dropdown
├── forms/
│   ├── LoginForm.tsx                  # Login form
│   └── ProductForm.tsx                # Product create/edit form
└── tables/
    └── ProductTable.tsx               # Products table with actions

store/                                 # Zustand state management
├── auth.store.ts                      # Authentication state with persist
│   ├── login(name, password)
│   ├── logout()
│   ├── updateName(name)
│   └── updatePassword(password)
└── theme.store.ts                     # Theme state with localStorage

services/
└── product.service.ts                 # Product CRUD operations
    ├── getAll()
    ├── getById(id)
    ├── create(product)
    ├── update(id, data)
    └── delete(id)

providers/
└── ThemeProvider.tsx                  # Theme context & management

lib/
├── types/
│   └── product.ts                     # Product type definitions
├── validations.ts                     # Form validation schemas
└── useOutsideClick.ts                 # Custom hook for dropdown

datas/
└── authDropdown.ts                    # Static auth dropdown data

public/
├── fonts/
└── icons/
```

---

## Tech Stack

| Technology       | Purpose                                       |
| ---------------- | --------------------------------------------- |
| **Next.js 15**   | React framework with App Router               |
| **TypeScript**   | Type-safe development                         |
| **Tailwind CSS** | Utility-first CSS styling                     |
| **Zustand**      | Lightweight state management with persistence |
| **React Hooks**  | useState, useEffect, useContext, custom hooks |
| **localStorage** | Client-side data persistence                  |

---

## Getting Started

### Prerequisites

- **Node.js** 18 or higher
- **npm** or **yarn** package manager

### Installation & Setup

1. **Clone the repository**

```bash
git clone <repository-url>
cd aksa-test
```

2. **Install dependencies**

```bash
npm install
```

3. **Run development server**

```bash
npm run dev
```

4. **Open in browser**

- Navigate to `http://localhost:3000`
- You'll be redirected to `/login`

### Default Credentials

The login uses static credentials (hardcoded in validation):

```
Username: admin
Password: password
```

---

## Usage Guide

### Authentication Flow

1. **Login Page** (`/login`)
   - Enter username and password
   - Form validation using Zod schema
   - On success: redirected to `/products`
   - User state persists to localStorage

2. **Protected Routes**
   - All routes except login require authentication
   - Unauthenticated users are redirected to `/login`
   - Session persists across page reloads

3. **Logout**
   - Click "Hello, [username]" in top-right navbar
   - Select "Logout" from dropdown
   - Redirected to login page
   - User state cleared from localStorage

### Product Management

#### Viewing Products

- Products displayed in table format (5 per page)
- Columns: Name, Price, Category, Stock, Created Date, Actions
- Navigate pages using pagination controls at bottom

#### Adding Products

- Click "Add Product" button
- Fill form: Name, Price, Category, Stock
- Submit to add to localStorage
- Form closes, table updates immediately

#### Editing Products

- Click "Edit" on any product row
- Update form pre-fills with product data
- Submit to save changes to localStorage
- Table updates immediately

#### Deleting Products

- Click "Delete" on any product row
- Confirm deletion in browser dialog
- Product removed from localStorage
- Table updates immediately

### Theme Management

**Access Theme Selector:**

- Click "Theme" dropdown in top-right navbar
- Select one of three options:
  - **Light** - Light mode UI
  - **Dark** - Dark mode UI
  - **System** - Available but OS sync is pending

**How it works:**

- Selected theme saved to localStorage
- Applied via `data-theme` attribute on `<html>`
- CSS variables change based on theme
- Persists across page reloads

---

## Testing with Dummy Data

To test the product table with sample data:

1. **Open browser DevTools** (F12 / Cmd+Shift+I)
2. **Go to Console tab**
3. **Paste this code:**

```js
const dummyProducts = [
  {
    id: "1",
    name: "Laptop",
    price: 1200000,
    category: "Electronics",
    stock: 5,
    createdAt: "2026-02-01T10:00:00.000Z",
  },
  {
    id: "2",
    name: "Mouse",
    price: 150000,
    category: "Electronics",
    stock: 50,
    createdAt: "2026-02-02T10:00:00.000Z",
  },
  {
    id: "3",
    name: "Keyboard",
    price: 500000,
    category: "Electronics",
    stock: 20,
    createdAt: "2026-02-03T10:00:00.000Z",
  },
  {
    id: "4",
    name: "Monitor",
    price: 2000000,
    category: "Electronics",
    stock: 8,
    createdAt: "2026-02-04T10:00:00.000Z",
  },
  {
    id: "5",
    name: "Desk",
    price: 800000,
    category: "Furniture",
    stock: 12,
    createdAt: "2026-02-05T10:00:00.000Z",
  },
  {
    id: "6",
    name: "Chair",
    price: 600000,
    category: "Furniture",
    stock: 15,
    createdAt: "2026-02-06T10:00:00.000Z",
  },
  {
    id: "7",
    name: "USB Cable",
    price: 50000,
    category: "Accessories",
    stock: 100,
    createdAt: "2026-02-07T10:00:00.000Z",
  },
  {
    id: "8",
    name: "Headphones",
    price: 400000,
    category: "Electronics",
    stock: 25,
    createdAt: "2026-02-08T10:00:00.000Z",
  },
  {
    id: "9",
    name: "Webcam",
    price: 700000,
    category: "Electronics",
    stock: 10,
    createdAt: "2026-02-09T10:00:00.000Z",
  },
  {
    id: "10",
    name: "Desk Lamp",
    price: 250000,
    category: "Furniture",
    stock: 30,
    createdAt: "2026-02-10T10:00:00.000Z",
  },
  {
    id: "11",
    name: "Microphone",
    price: 800000,
    category: "Electronics",
    stock: 7,
    createdAt: "2026-02-11T10:00:00.000Z",
  },
  {
    id: "12",
    name: "Monitor Stand",
    price: 300000,
    category: "Accessories",
    stock: 18,
    createdAt: "2026-02-12T10:00:00.000Z",
  },
];

localStorage.setItem("products", JSON.stringify(dummyProducts));
console.log("✅ Dummy products saved! Total:", dummyProducts.length);
```

4. **Refresh page** - Products will appear in table
5. **Pagination will show 3 pages** (5 per page = 12 products ÷ 5)

---

## Available Scripts

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Key Implementation Details

### Authentication State

- **Store:** `store/auth.store.ts` using Zustand with persist middleware
- **Persistence:** Saved as `auth-storage` in localStorage
- **Features:** Login, logout, profile update (updateName)

### Theme State

- **Store:** `store/theme.store.ts` using Zustand
- **Persistence:** Saved as `theme` in localStorage
- **Values:** 'light', 'dark', 'system'
- **Application:** `data-theme` attribute on `<html>`

### Product CRUD

- **Service:** `services/product.service.ts`
- **Storage:** localStorage under key `products`
- **Methods:** getAll, getById, create, update, delete
- **No API calls** - Everything is client-side

### Pagination

- **Page size:** 5 items per page
- **Control:** Custom buttons (First, Prev, Next, Last)
- **Implementation:** Array slice, no external library

### Styling

- **Framework:** Tailwind CSS 3
- **Theme colors:** CSS variables in `:root` and `[data-theme]`
- **Responsive:** Mobile-first breakpoints (sm, md, lg)
- **No UI libraries** - Everything custom with Tailwind

---

## File Reference Guide

| File                                       | Purpose                                |
| ------------------------------------------ | -------------------------------------- |
| `app/layout.tsx`                           | Root layout, wraps with ThemeProvider  |
| `app/(theme)/layout.tsx`                   | Theme wrapper with useTheme hook       |
| `app/(theme)/(navigate)/layout.tsx`        | Navigation wrapper with NavBar         |
| `app/(theme)/(auth)/login/page.tsx`        | Login page                             |
| `app/(theme)/(navigate)/products/page.tsx` | Products CRUD page                     |
| `store/auth.store.ts`                      | Auth state management with persistence |
| `store/theme.store.ts`                     | Theme state management                 |
| `providers/ThemeProvider.tsx`              | Theme context provider                 |
| `components/NavBar.tsx`                    | Top navigation with dropdowns          |
| `components/tables/ProductTable.tsx`       | Products table component               |
| `components/forms/ProductForm.tsx`         | Product form component                 |
| `components/dropdowns/Dropdown.tsx`        | Reusable dropdown wrapper              |
| `services/product.service.ts`              | Product CRUD service                   |
| `app/globals.css`                          | Global styles & CSS variables          |

---

## Browser Compatibility

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance Notes

- Static generation where possible (Next.js)
- Minimal client-side rendering
- localStorage for fast local data access
- No external API calls
- Custom CSS with Tailwind (no CSS-in-JS overhead)

---

## Author Notes

This project demonstrates:

- ✅ HTML/CSS/Tailwind proficiency
- ✅ React/Next.js framework knowledge
- ✅ State management with Zustand
- ✅ TypeScript for type safety
- ✅ Component composition patterns
- ✅ Custom hooks and custom UI components
- ✅ localStorage and browser APIs
- ✅ Responsive design principles

**NOT deployed yet** - Ready for deployment to Vercel, Netlify, or other platforms.
