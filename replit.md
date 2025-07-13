# Portfolio Website - Replit Project Documentation

## Overview

This is a modern, responsive portfolio website for Saifullah Al Neoaz (nexo_here), a web developer from Dinajpur, Bangladesh. The project is built as a full-stack application with a React frontend and Express backend, featuring a PostgreSQL database integration using Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables and Shadcn/ui components
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with custom configuration for development and production
- **UI Components**: Comprehensive Shadcn/ui component library (Radix UI primitives)

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Module System**: ES Modules (type: "module" in package.json)
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for bundling server code

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Schema**: Centralized schema definition in shared/schema.ts
- **Migrations**: Drizzle-kit for database migrations

## Key Components

### 1. Portfolio Sections
- **Hero Section**: Animated landing area with personal branding
- **About Section**: Personal details, skills visualization, and background
- **Services Section**: Three main service offerings (Web Development, Bot Development, API Integration)
- **Portfolio Section**: Project showcase with technologies and links
- **Contact Section**: Contact form and social media integration
- **Footer**: Additional links and contact information

### 2. UI Features
- **Dark/Light Theme**: Context-based theme switching with system preference detection
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animations**: Framer Motion for smooth transitions and AOS library for scroll animations
- **Form Handling**: React Hook Form with Zod validation
- **Toast Notifications**: Custom toast system for user feedback

### 3. Technical Features
- **Type Safety**: Full TypeScript implementation across frontend and backend
- **Component Library**: Extensive Shadcn/ui components for consistent design
- **Custom Fonts**: Google Fonts integration (Poppins, Inter)
- **Icons**: Font Awesome and Lucide React icons
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

## Data Flow

### Current Implementation
1. **Static Portfolio**: Currently serving a static portfolio website
2. **In-Memory Storage**: MemStorage class provides temporary data persistence
3. **Database Ready**: Drizzle schema defined with user management capabilities
4. **API Structure**: Express routes structure prepared for future backend features

### Database Schema
- **Users Table**: Basic user management with username/password fields
- **Extensible Design**: Schema designed for easy extension with additional tables

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18 with modern hooks and context
- **Styling**: Tailwind CSS with PostCSS processing
- **Database**: PostgreSQL with Neon serverless driver
- **Validation**: Zod for runtime type validation
- **Date Handling**: date-fns for date manipulation

### Development Tools
- **Build**: Vite for frontend, esbuild for backend
- **TypeScript**: Full type checking with strict configuration
- **Development**: Hot reload with Vite HMR

### UI/UX Libraries
- **Component Primitives**: Radix UI for accessible components
- **Animation**: Framer Motion for complex animations, AOS for scroll effects
- **Carousel**: Embla Carousel for image galleries
- **Charts**: Recharts integration ready via Shadcn/ui

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: esbuild bundles Express server to `dist/index.js`
- **Database**: Drizzle migrations handle schema changes

### Environment Configuration
- **Development**: NODE_ENV=development with tsx execution
- **Production**: NODE_ENV=production with compiled JavaScript
- **Database**: DATABASE_URL environment variable required

### Replit Integration
- **Development Banner**: Replit dev banner for external access
- **Error Overlay**: Runtime error modal for development
- **Cartographer**: Replit-specific debugging tools

### Scripts
- `npm run dev`: Start development server with hot reload
- `npm run build`: Build both frontend and backend for production
- `npm run start`: Start production server
- `npm run db:push`: Push database schema changes
- `npm run check`: TypeScript type checking

## Architecture Decisions

### 1. Full-Stack TypeScript
**Problem**: Need for type safety across the entire application
**Solution**: TypeScript with shared types between frontend and backend
**Benefits**: Compile-time error detection, better development experience, maintainable code

### 2. Drizzle ORM with PostgreSQL
**Problem**: Need for type-safe database operations with good performance
**Solution**: Drizzle ORM with Neon PostgreSQL
**Benefits**: Type-safe queries, excellent TypeScript integration, serverless-ready

### 3. Shadcn/ui Component System
**Problem**: Need for consistent, accessible UI components
**Solution**: Shadcn/ui with Radix UI primitives and Tailwind CSS
**Benefits**: Accessible by default, customizable, consistent design system

### 4. Monorepo Structure
**Problem**: Managing shared code between frontend and backend
**Solution**: Shared folder for common types and schemas
**Benefits**: Code reuse, consistent data models, easier maintenance

## Production Deployment Options

The portfolio is configured for deployment on multiple platforms:

### 1. Vercel (Recommended for serverless)
- Configuration: `vercel.json` included
- Automatic builds and deployments
- Commands: `vercel --prod`
- Best for: Static sites with serverless functions

### 2. Render
- Configuration: `render.yaml` included
- Full-stack deployment support
- Commands: Connect Git repository
- Best for: Full-stack applications

### 3. Railway
- Zero-config deployment
- Environment: NODE_ENV=production
- Commands: Connect Git repository
- Best for: Simple full-stack deployment

### 4. Docker/Container Platforms
- Dockerfile with health checks included
- Build: `docker build -t nexo-portfolio .`
- Run: `docker run -p 5000:5000 nexo-portfolio`
- Best for: Self-hosted or cloud containers

### Production Environment Variables
- `NODE_ENV=production` (required)
- `DATABASE_URL` (optional, for future database features)
- `PORT` (defaults to 5000)