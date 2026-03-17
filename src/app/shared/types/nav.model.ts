import { House, LucideIconData, Mail, SquareCheckBig } from "lucide-angular";

export interface NavModel {
  name: string
  route: string
  icon: LucideIconData,
  current?: boolean
}

export const NavLinks = [
  { name: 'Dashboard', icon: House, route: '/dashboard', current: true },
  { name: 'My Tasks', icon: SquareCheckBig, route: '/tasks' },
  { name: 'Contact Me', icon: Mail, route: '/contact' },
];
