export interface NavModel {
  name: string
  href: string
  current?: boolean
}

export const NavLinks: NavModel[] = [
  { name: 'Dashboard', href: '/dashboard', current: true },
  { name: 'My Tasks', href: '/tasks' },
  { name: 'Contact Me', href: '/contact' }
]
