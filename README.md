# Mancave - Web3 Onboarding DApp for Mandala Chain

[![Mandala Chain](https://img.shields.io/badge/Built%20for-Mandala%20Chain-0AF3FF)](https://mandalachain.io)
[![Polkadot](https://img.shields.io/badge/Ecosystem-Polkadot-E6007A)](https://polkadot.network)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF)](https://vite.dev)

A gamified Web3 onboarding and ecosystem operations platform built for the **Mandala Chain** (Polkadot parachain). Mancave guides users through their Web3 journey with quests, rewards, and community features while providing administrators with powerful tools to manage the ecosystem.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
  - [User Features](#user-features)
  - [Admin Features](#admin-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Build](#build)
- [Architecture](#architecture)
  - [Routing](#routing)
  - [State Management](#state-management)
  - [Component Library](#component-library)
- [Design System](#design-system)
- [Admin Roles & Permissions](#admin-roles--permissions)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Mancave serves as the gateway for users entering the Mandala Chain ecosystem. It provides:

- **Guided Onboarding** - Step-by-step wallet connection and path selection
- **Quest-Based Learning** - Earn XP and ManCoins by completing educational tasks
- **Community Engagement** - Real-time chat with mentors and leaderboards
- **Admin Operations** - Full-featured dashboard for ecosystem management

---

## Features

### User Features

| Feature | Description |
|---------|-------------|
| **Wallet Authentication** | Connect via SubWallet, Talisman, Polkadot.js, or Nova Wallet |
| **Guided Onboarding** | 4-step wizard explaining Mandala Chain & Polkadot |
| **Path Selection** | Choose Developer or Creator track |
| **Quest System** | Complete reading, quizzes, submissions, and social verification tasks |
| **Rewards** | Earn ManXP, ManCoins, badges, and optional NFTs |
| **Dashboard** | Track stats, progress, and view leaderboards |
| **Quest Board** | Browse and filter available quests by category/difficulty |
| **Profile** | Manage wallets, social connections (X, Discord, Telegram) |
| **Knowledge Hub** | Access Mandala & Polkadot documentation |
| **Real-Time Chat** | Communicate with assigned mentors and admins |
| **Wallet Management** | View tokens, transaction history, and manage assets |
| **Settings** | Customize notifications, privacy, and account preferences |

### Admin Features

| Feature | Description |
|---------|-------------|
| **Admin Dashboard** | KPIs, onboarding funnel metrics, activity feed |
| **Quest Management** | Create, schedule, and control quest visibility |
| **Submission Review** | Grade user submissions with feedback workflow |
| **User Management** | Assign mentors, manage roles, view user details |
| **Content Management** | Manage docs, articles, and external links |
| **Economy Controls** | Configure ManXP/ManCoins caps and redemptions |
| **Analytics** | Track retention, quest drop-off, top contributors |
| **Announcements** | Send notifications to users |
| **Moderation** | Handle reports and abuse cases |

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 18.3.1 |
| **Build Tool** | Vite 6.3.5 (SWC) |
| **Language** | TypeScript (Strict) |
| **Styling** | Tailwind CSS |
| **UI Components** | Radix UI (40+ components) |
| **Animations** | Motion (Framer Motion) |
| **Forms** | React Hook Form |
| **Charts** | Recharts |
| **Icons** | Lucide React |
| **Notifications** | Sonner |

---

## Project Structure

```
Mancave/
├── index.html                    # Entry HTML
├── package.json                  # Dependencies & scripts
├── vite.config.ts                # Vite configuration
├── tailwind.config.js            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── README.md                     # This file
│
└── src/
    ├── main.tsx                  # React entry point
    ├── App.tsx                   # Main router & layout
    ├── index.css                 # Compiled Tailwind styles
    │
    ├── components/
    │   ├── Navigation.tsx        # Top navigation bar
    │   ├── AdminContext.tsx      # Admin state & RBAC
    │   ├── WalletConnector.tsx   # Wallet connection UI
    │   ├── LeaderboardWidget.tsx # Leaderboard display
    │   ├── QuestCard.tsx         # Reusable quest card
    │   ├── StatsCard.tsx         # KPI display card
    │   │
    │   ├── pages/                # User-facing pages
    │   │   ├── LandingPage.tsx
    │   │   ├── OnboardingPage.tsx
    │   │   ├── DashboardPage.tsx
    │   │   ├── QuestBoardPage.tsx
    │   │   ├── ProfilePage.tsx
    │   │   ├── KnowledgeHubPage.tsx
    │   │   ├── ChatPage.tsx
    │   │   ├── SettingsPage.tsx
    │   │   └── WalletPage.tsx
    │   │
    │   ├── admin/                # Admin dashboard
    │   │   ├── AdminSidebar.tsx
    │   │   ├── AdminKPICard.tsx
    │   │   └── pages/
    │   │       ├── AdminOverviewPage.tsx
    │   │       ├── AdminQuestsPage.tsx
    │   │       ├── AdminSubmissionsPage.tsx
    │   │       └── AdminUsersPage.tsx
    │   │
    │   ├── figma/                # Design system components
    │   │   └── ImageWithFallback.tsx
    │   │
    │   └── ui/                   # Radix UI components
    │       ├── button.tsx
    │       ├── card.tsx
    │       ├── dialog.tsx
    │       └── ... (40+ components)
    │
    ├── guidelines/
    │   └── Guidelines.md         # Design guidelines
    │
    └── styles/
        └── globals.css           # Global CSS variables
```

---

## Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x (or yarn/pnpm)
- A Web3 wallet (SubWallet, Talisman, Polkadot.js, or Nova Wallet)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/mancave.git
cd mancave/Mancave

# Install dependencies
npm install
```

### Development

```bash
# Start development server (http://localhost:3000)
npm run dev
```

### Build

```bash
# Create production build
npm run build

# Build output will be in ./build directory
```

---

## Architecture

### Routing

Mancave uses a **state-based router** implemented in `App.tsx`. Navigation is handled via React state rather than URL-based routing.

**Available Routes:**

| Route | Component | Description |
|-------|-----------|-------------|
| `landing` | LandingPage | Marketing/hero page |
| `onboarding` | OnboardingPage | 4-step onboarding wizard |
| `dashboard` | DashboardPage | Main user hub |
| `quests` | QuestBoardPage | Quest marketplace |
| `profile` | ProfilePage | User profile & achievements |
| `knowledge` | KnowledgeHubPage | Learning resources |
| `chat` | ChatPage | Community chat |
| `wallet` | WalletPage | Wallet & token management |
| `settings` | SettingsPage | User preferences |
| `admin-overview` | AdminOverviewPage | Admin dashboard |
| `admin-quests` | AdminQuestsPage | Quest management |
| `admin-submissions` | AdminSubmissionsPage | Submission review |
| `admin-users` | AdminUsersPage | User management |

### State Management

- **AdminContext** - Role-based access control (RBAC) for admin features
- **React Hooks** - Local state for page-level state management
- **Props Drilling** - Navigation handlers passed through component tree

### Component Library

Built on **Radix UI** primitives for accessibility and consistency:

- Dialogs, Dropdowns, Popovers
- Forms, Inputs, Selects
- Tabs, Accordions, Collapsibles
- Tables, Pagination
- And 30+ more components

---

## Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Accent | `#0AF3FF` | CTAs, links, highlights |
| Secondary Accent | `#0880FF` | Gradients, secondary elements |
| Background | `#000000` | Main background |
| Surface | `#0a0a0a` | Cards, elevated surfaces |
| Text Primary | `#FFFFFF` | Main text |
| Text Secondary | `#9CA3AF` | Muted text |
| Admin Accent | `#A855F7` | Admin mode indicators |

### Typography

- **Font Family:** System sans-serif stack
- **Headings:** Bold, white
- **Body:** Regular, white/gray

### Spacing

Uses Tailwind's default spacing scale (4px base unit).

---

## Admin Roles & Permissions

| Role | Permissions |
|------|-------------|
| **Super Admin** | All permissions |
| **Track Admin** | Manage quests, review submissions, view/mentor users |
| **Reviewer** | Review submissions, view users |
| **Content Manager** | Manage and publish content |
| **Moderator** | View reports, take moderation actions |
| **User** | No admin permissions |

Access admin mode via the toggle button on the Dashboard (requires appropriate role).

---

## Environment Variables

Create a `.env` file in the project root:

```env
# API Configuration
VITE_API_URL=https://api.mancave.io

# Wallet Configuration
VITE_MANDALA_RPC=wss://rpc.mandalachain.io

# Feature Flags
VITE_ENABLE_CHAT=true
VITE_ENABLE_NFT_REWARDS=false
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript compiler |

---

## Browser Support

- Chrome >= 90
- Firefox >= 90
- Safari >= 14
- Edge >= 90

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow TypeScript strict mode
- Use Tailwind CSS for styling
- Keep components small and focused
- Add proper TypeScript types (no `any`)

---

## License

This project is private and proprietary to Mandala Chain.

---

## Links

- [Mandala Chain](https://mandalachain.io)
- [Polkadot Network](https://polkadot.network)
- [Figma Design](https://www.figma.com/design/Noje6rq5ApdxeTbzqG6jZd/Web3-Onboarding-DApp-Design)

---

Built with care for the Mandala Chain ecosystem.
