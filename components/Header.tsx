'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const nav = [
  {
    label: 'Vistos', href: '#', children: [
      { label: 'Visto Americano',  href: '/visto-americano' },
      { label: 'Visto Canadense',  href: '/visto-canadense' },
      { label: 'Visto Chinês',     href: '/visto-chines' },
      { label: 'Outros Países',    href: '/outros-paises' },
    ],
  },
  { label: 'Blog',    href: '/blog' },
  { label: 'Contato', href: '/contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const wa = process.env.NEXT_PUBLIC_WHATSAPP ?? '5511999999999';

  return (
    <header className="sticky top-0 z-50 bg-dark/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Vow Vistos" width={140} height={53} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button className="px-4 py-2 text-sm font-heading font-semibold text-white uppercase tracking-wide hover:text-accent transition-colors flex items-center gap-1">
                  {item.label}
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M5.5 8l4.5 4.5L14.5 8H5.5z"/></svg>
                </button>
                <ul className="absolute left-0 top-full min-w-48 bg-dark border-t-2 border-accent py-2 hidden group-hover:block shadow-xl rounded-b-xl">
                  {item.children.map((c) => (
                    <li key={c.href}>
                      <Link href={c.href} className="block px-5 py-2 text-sm text-gray-300 hover:text-accent hover:bg-white/5 transition-colors">
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link key={item.href} href={item.href}
                className="px-4 py-2 text-sm font-heading font-semibold text-white uppercase tracking-wide hover:text-accent transition-colors">
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* WhatsApp CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a href={`https://wa.me/${wa}`} target="_blank" rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-dark text-sm font-heading font-bold px-5 py-2 rounded-full transition-colors">
            <WaIcon /> WhatsApp
          </a>
          <button onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Menu">
            <span className={`block w-5 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}/>
            <span className={`block w-5 h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`}/>
            <span className={`block w-5 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}/>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-dark border-t border-white/10 px-4 py-4 flex flex-col gap-1">
          <button onClick={() => setDropOpen(!dropOpen)}
            className="flex justify-between items-center px-3 py-2 text-sm font-heading font-semibold text-white uppercase tracking-wide hover:text-accent transition-colors">
            Vistos
            <svg className={`w-3 h-3 fill-current transition-transform ${dropOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20"><path d="M5.5 8l4.5 4.5L14.5 8H5.5z"/></svg>
          </button>
          {dropOpen && nav[0].children?.map((c) => (
            <Link key={c.href} href={c.href} onClick={() => setOpen(false)}
              className="pl-6 py-2 text-sm text-gray-300 hover:text-accent transition-colors">
              {c.label}
            </Link>
          ))}
          {nav.slice(1).map((item) => (
            <Link key={item.href!} href={item.href!} onClick={() => setOpen(false)}
              className="px-3 py-2 text-sm font-heading font-semibold text-white uppercase tracking-wide hover:text-accent transition-colors">
              {item.label}
            </Link>
          ))}
          <a href={`https://wa.me/${wa}`} target="_blank" rel="noopener noreferrer"
            className="mt-3 flex justify-center items-center gap-2 bg-accent text-dark text-sm font-heading font-bold px-5 py-3 rounded-full">
            <WaIcon /> WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

function WaIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
