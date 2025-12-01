
import { AppState, AppSettings, Role, ThemePreset, ServiceItem, Supplier, ProcurementDocument, Permissions, RolesConfig } from './types';

export const ROLES: Record<string, Role> = {
  Admin: 'Admin',
  Sales: 'Sales',
  Operations: 'Operations',
};

export const defaultDarkTheme: AppSettings = {
  themeMode: 'dark',
  adminPin: '1234',
  colors: {
    primaryAccent: '#8b5cf6',
    background: '#0f172a',
    cardContainer: 'rgba(15, 23, 42, 0.65)', // More transparent for glass effect
    primaryText: '#f8fafc',
    secondaryText: '#94a3b8',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  typography: {
    applicationFont: 'Inter',
    headingFont: 'Poppins',
  },
  layout: {
    borderRadius: 16,
    sidebarWidth: 288,
    cardDensity: 'comfortable',
    glassIntensity: 20,
  },
  motion: {
    enableAnimations: true,
    transitionSpeed: 0.3,
    animationDuration: 0.5,
    transitionEasing: 'ease-in-out',
    defaultEntryAnimation: 'fadeIn',
    smoothScrolling: true,
    cardHoverEffect: 'lift',
    buttonHoverEffect: 'scale',
    particleCount: 60,
    particleSpeed: 0.5,
    particleOpacity: 0.4,
    particleStyle: 'particle-flow',
  },
  branding: {
    logoUrl: '',
    appBackgroundUrl: 'https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=2574&auto=format&fit=crop',
  },
  landingPage: {
    background: {
      type: 'image',
      imagePool: [
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2670&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2670&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1429514513361-8c332c3ca085?q=80&w=2670&auto=format&fit=crop',
      ],
    },
    motivationalQuotes: [
      "The secret of getting ahead is getting started.",
      "Excellence is not an act, but a habit.",
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work."
    ],
  },
  aiFallback: {
      enableGeminiQuotaFallback: true,
      fallbackMode: 'predefined'
  },
   userPreferences: {
      defaultView: 'Dashboard',
      dashboardWidgets: ['kpi', 'charts', 'alerts'],
       eventListViewOptions: {
        showDate: true,
        showLocation: true,
        showGuests: true,
        showPayment: true,
        showSalesperson: true,
      },
    },
};

export const defaultLightTheme: AppSettings = {
  ...defaultDarkTheme,
  themeMode: 'light',
  colors: {
    primaryAccent: '#7c3aed',
    background: '#f1f5f9',
    cardContainer: 'rgba(255, 255, 255, 0.7)',
    primaryText: '#0f172a',
    secondaryText: '#475569',
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
};

export const SYSTEM_THEMES: ThemePreset[] = [
    {
        id: 'sys-default-dark',
        name: 'Default Dark',
        settings: defaultDarkTheme,
        createdAt: new Date().toISOString()
    },
    {
        id: 'sys-default-light',
        name: 'Default Light',
        settings: defaultLightTheme,
        createdAt: new Date().toISOString()
    }
];

const PERMISSIONS: RolesConfig = {
  Admin: { canCreateEvents: true, canManageServices: true, canViewFinancials: true, canManageUsers: true, canManageRFQs: true },
  Sales: { canCreateEvents: true, canManageServices: false, canViewFinancials: false, canManageUsers: false, canManageRFQs: true },
  Operations: { canCreateEvents: false, canManageServices: true, canViewFinancials: true, canManageUsers: false, canManageRFQs: false },
};

const defaultServices: ServiceItem[] = [];

export const DEFAULT_APP_STATE: AppState = {
  users: [
    { userId: 'u_admin', name: 'System Admin', role: 'Admin', commissionRate: 0 },
    { userId: 'u_sales', name: 'Sales Representative', role: 'Sales', commissionRate: 15 }
  ],
  events: [],
  services: defaultServices,
  clients: [],
  rfqs: [],
  quotationTemplates: [],
  proposalTemplates: [],
  roles: PERMISSIONS,
  currentUserId: 'u_sales',
  settings: defaultDarkTheme,
  isLoggedIn: false,
  customThemes: [],
  notifications: [],
  savedCatalogues: [],
  suppliers: [],
  procurementDocuments: [],
};
