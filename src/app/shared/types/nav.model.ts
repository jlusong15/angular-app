import { House, LayoutDashboard, LucideIconData, Mail, SquareCheckBig } from "lucide-angular";

export interface NavModel {
  name: string
  route: string
  icon: LucideIconData,
  // current?: boolean
}

export const NavLinks = [
  { name: 'Home', icon: House, route: '/' },
  { name: 'Dashboard', icon: LayoutDashboard, route: '/dashboard' },
  { name: 'Tasks', icon: SquareCheckBig, route: '/tasks' },
  { name: 'Contact', icon: Mail, route: '/contact' },
];
