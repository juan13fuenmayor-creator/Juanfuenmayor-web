import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  MessageCircle,
  ShieldCheck,
  PiggyBank,
  GraduationCap,
  Calendar,
  MapPin,
  Dumbbell,
  Briefcase,
  Clock,
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

const WHATSAPP_URL =
  'https://wa.me/17867247937?text=Quiero%20mi%20asesor%C3%ADa%20gratuita'
const CALENDLY_URL = 'https://calendly.com/juan13fuenmayor/1hour'
const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@juanfuenmayor'
const YOUTUBE_UPLOADS_EMBED =
  'https://www.youtube.com/embed/videoseries?list=UU3vtnMuOegobHB7FsRt1TPg'
const INSTAGRAM_URL = 'https://instagram.com/juanfuenmayor13'
const TIKTOK_URL = 'https://www.tiktok.com/@juanfuenmayor13'
const FACEBOOK_URL = 'https://facebook.com/256715287520182'
const LINKEDIN_URL = 'https://www.linkedin.com/in/juan-fuenmayor-455b3713b'
const LEVEL5X_URL = 'https://level5x.com/'
const IMG_PORTRAIT =
  'https://assets.macaly-user-data.dev/cr0nu8qrnga7m5w5suxn20hi/y48z4bxlpjkuolomo9rr9h8e/37ah32vmb7t6tSxer82PE/juan-podcast-flaYWf18.png'
const IMG_BRAND =
  'https://assets.macaly-user-data.dev/cr0nu8qrnga7m5w5suxn20hi/y48z4bxlpjkuolomo9rr9h8e/vt_nJcFRaZFKUSJGc3Q00/juan-brand-aZT98wT0.png'
const IMG_DISCIPLINA =
  'https://assets.macaly-user-data.dev/cr0nu8qrnga7m5w5suxn20hi/y48z4bxlpjkuolomo9rr9h8e/71-7u4RhZYLKsJH0BRZsn/juan-disciplina-G8SAo4fA.png'

const NAV_LINKS = [
  { href: '#quien-soy', label: 'Quién soy' },
  { href: '#servicios', label: 'Qué hago' },
  { href: '#contenido', label: 'Contenido' },
  { href: '#level5x', label: 'LEVEL5X' },
  { href: '#contacto', label: 'Contacto' },
]

const SOCIAL_LINKS = [
  { href: INSTAGRAM_URL, label: 'Instagram', Icon: Instagram },
  { href: TIKTOK_URL, label: 'TikTok', Icon: TikTokIcon },
  { href: YOUTUBE_CHANNEL_URL, label: 'YouTube', Icon: Youtube },
  { href: LINKEDIN_URL, label: 'LinkedIn', Icon: Linkedin },
  { href: FACEBOOK_URL, label: 'Facebook', Icon: Facebook },
]

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 5.82c-.9-.62-1.53-1.6-1.72-2.72h-2.78v13.1c0 1.36-1.1 2.46-2.46 2.46a2.46 2.46 0 0 1 0-4.92c.24 0 .48.03.7.1V10.9a5.24 5.24 0 0 0-.7-.05 5.26 5.26 0 1 0 5.26 5.26V9.03a7.6 7.6 0 0 0 4.4 1.4V7.66a4.85 4.85 0 0 1-2.7-1.84z" />
    </svg>
  )
}

function SocialRow({ size = 'default' }: { size?: 'default' | 'lg' }) {
  const dim = size === 'lg' ? 'h-11 w-11' : 'h-9 w-9'
  const iconDim = size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'
  return (
    <div className="flex items-center gap-3">
      {SOCIAL_LINKS.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className={`${dim} inline-flex items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent hover:text-accent-foreground`}
        >
          <Icon className={iconDim} />
        </a>
      ))}
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <QuienSoy />
      <Servicios />
      <Contenido />
      <Quote />
      <Level5x />
      <Contacto />
      <SiteFooter />
    </div>
  )
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-serif text-lg font-semibold tracking-tight">
          Juan Fuenmayor
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </Button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-[0.95fr_1.05fr] md:py-20">
        <div className="overflow-hidden rounded-lg border border-primary-foreground/15 shadow-2xl">
          <img
            src={IMG_BRAND}
            alt="Juan Fuenmayor en su estudio Finanza con Propósito, junto a su camiseta de la Selección de Venezuela"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
            Juan Fuenmayor · Finanza con Propósito
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-[1.08] font-semibold sm:text-5xl md:text-6xl">
            De la cancha
            <br />
            al liderazgo.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            Exjugador de la Selección Nacional de Venezuela, contador público, y hoy
            Vicepresidente Regional en Primerica. Uso la misma disciplina que aprendí
            en 26 años de carrera profesional — 11 de ellos vistiendo la Vinotinto —
            para ayudar a familias a proteger su futuro financiero, sin letra pequeña.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gold text-primary hover:bg-gold/90"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" />
                Escríbeme por WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href={CALENDLY_URL} target="_blank" rel="noreferrer">
                <Calendar className="h-4 w-4" />
                Agenda una asesoría gratis
              </a>
            </Button>
          </div>
          <div className="mt-10">
            <SocialRow />
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 py-8 sm:grid-cols-4">
          <StatCard value="26" label="años de carrera profesional" />
          <StatCard value="11" label="años en la Selección de Venezuela" />
          <StatCard value="$49" label="LEVEL5X · 19 de septiembre" accent />
          <StatCard value="15 min" label="asesoría inicial, sin costo" />
        </div>
      </div>
    </section>
  )
}

function StatCard({
  value,
  label,
  accent = false,
}: {
  value: string
  label: string
  accent?: boolean
}) {
  return (
    <div
      className={`rounded-lg border p-5 ${
        accent
          ? 'border-gold/40 bg-gold/10'
          : 'border-primary-foreground/15 bg-primary-foreground/5'
      }`}
    >
      <p className={`font-serif text-3xl font-semibold ${accent ? 'text-gold' : 'text-primary-foreground'}`}>
        {value}
      </p>
      <p className="mt-1 text-sm text-primary-foreground/70">{label}</p>
    </div>
  )
}

function QuienSoy() {
  return (
    <section id="quien-soy" className="mx-auto max-w-6xl px-6 py-20">
      <SectionKicker>Quién soy</SectionKicker>
      <div className="mt-6 grid items-start gap-10 md:grid-cols-2">
        <div className="space-y-4 text-muted-foreground">
          <p className="font-serif text-2xl leading-snug text-foreground sm:text-3xl">
            La carrera deportiva no dura para siempre — pero las responsabilidades
            sí. Eso puede ser tu mayor ventaja, o tu mayor riesgo, según la
            estructura que construyas.
          </p>
          <p>
            Soy exjugador de la Selección Nacional de Venezuela — 11 años vistiendo
            la Vinotinto, dentro de una carrera profesional de 26 años en Europa
            y Estados Unidos. Soy contador público, y hoy Vicepresidente Regional
            en Primerica bajo{' '}
            <span className="text-foreground">Finanza con Propósito</span>.
          </p>
          <p>
            Aquí comparto lo que aprendí en la cancha y cómo lo aplico hoy para
            ayudar a familias a proteger su futuro financiero: protección de
            ingresos, manejo de deudas y educación financiera real, sin letra
            pequeña. También comparto tarima en{' '}
            <a href={LEVEL5X_URL} target="_blank" rel="noreferrer" className="text-foreground underline underline-offset-4 hover:text-gold">
              LEVEL5X
            </a>{' '}
            hablando de Sports Business &amp; Leadership.
          </p>
          <p>
            Si quieres una asesoría financiera gratuita, sin costo y sin
            compromiso, escríbeme por WhatsApp.
          </p>
        </div>
        <figure className="overflow-hidden rounded-lg border border-border">
          <img
            src={IMG_PORTRAIT}
            alt="Juan Fuenmayor en su estudio de podcast, con un cartel que dice: disciplina, propósito, fe y acción crean legado"
            className="h-auto w-full object-cover"
            loading="lazy"
          />
          <figcaption className="border-t border-border bg-card px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Disciplina, propósito, fe y acción crean legado.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
      {children}
    </p>
  )
}

const SERVICIOS = [
  {
    Icon: ShieldCheck,
    title: 'Protección de ingresos',
    body: 'Qué pasa con tu familia si tú faltas mañana — un plan real, no un producto.',
  },
  {
    Icon: PiggyBank,
    title: 'Deudas cubiertas',
    body: 'Cuánto de lo que pagas hoy es solo interés, y cómo cambiar esa ecuación.',
  },
  {
    Icon: GraduationCap,
    title: 'Educación financiera',
    body: 'Que puedas explicar tu plan completo en un minuto — sin letra pequeña.',
  },
]

function Servicios() {
  return (
    <section id="servicios" className="border-y border-border bg-card/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionKicker>Qué hago por las familias</SectionKicker>
        <h2 className="mt-4 max-w-2xl font-serif text-3xl font-semibold sm:text-4xl">
          ¿Qué significa proteger a una familia?
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          No es solo un seguro. Es un plan real, con tres piezas que casi nadie
          conecta.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {SERVICIOS.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="rounded-lg border border-border bg-background p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
          Este contenido tiene fines educativos e informativos generales y no
          constituye asesoría de inversión personalizada ni una oferta o
          recomendación de ningún producto específico.
        </p>
      </div>
    </section>
  )
}

function Contenido() {
  return (
    <section id="contenido" className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <SectionKicker>Contenido</SectionKicker>
          <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-4xl">
            Últimos videos
          </h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Se actualiza solo cada vez que sale un video nuevo en el canal.
            Sígueme también en el resto de las redes.
          </p>
        </div>
        <SocialRow size="lg" />
      </div>
      <div className="mt-10 overflow-hidden rounded-lg border border-border bg-black">
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full"
            src={YOUTUBE_UPLOADS_EMBED}
            title="Últimos videos de Juan Fuenmayor en YouTube"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

function Quote() {
  return (
    <section aria-label="Lo que hoy disfrutamos se construyó en silencio" className="border-y border-border bg-card/60">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-[0.45fr_0.55fr]">
        <img
          src={IMG_DISCIPLINA}
          alt="Póster con la frase: lo que hoy disfrutamos se construyó en silencio, sobre una foto de Juan entrenando en la playa"
          className="mx-auto w-full max-w-xs rounded-lg border border-border shadow-lg md:max-w-sm"
          loading="lazy"
        />
        <div>
          <SectionKicker>Mentalidad</SectionKicker>
          <p className="mt-4 font-serif text-3xl leading-snug font-semibold sm:text-4xl">
            Lo que hoy <span className="text-gold">disfrutamos</span> se construyó
            en silencio.
          </p>
          <div className="mt-8 space-y-6">
            <QuotePoint icon="athlete">
              Detrás de cada <span className="font-semibold text-foreground">atleta profesional</span> hay
              años de trabajo invisible.
            </QuotePoint>
            <QuotePoint icon="briefcase">
              <span className="font-semibold text-foreground">En los negocios</span> pasa lo mismo.
            </QuotePoint>
            <QuotePoint icon="clock">
              La gente pierde la motivación cuando en{' '}
              <span className="font-semibold text-gold">2 meses</span> no ve resultados.
            </QuotePoint>
          </div>
        </div>
      </div>
    </section>
  )
}

function QuotePoint({
  icon,
  children,
}: {
  icon: 'athlete' | 'briefcase' | 'clock'
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-4 border-l-2 border-gold/40 pl-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
        {icon === 'athlete' ? (
          <Dumbbell className="h-5 w-5" />
        ) : icon === 'briefcase' ? (
          <Briefcase className="h-5 w-5" />
        ) : (
          <Clock className="h-5 w-5" />
        )}
      </div>
      <p className="pt-1.5 leading-relaxed text-muted-foreground">{children}</p>
    </div>
  )
}

function Level5x() {
  return (
    <section id="level5x" className="border-y border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
          Evento en vivo
        </p>
        <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-4xl">
          LEVEL5X — Houston
        </h2>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/75">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            Sábado 19 de septiembre, 2026 · 10:00 a.m. – 4:00 p.m.
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            Houston, TX
          </span>
        </div>
        <p className="mx-auto mt-6 max-w-xl text-primary-foreground/80">
          Un día completo con operadores reales de cuatro industrias. Voy a
          hablar de <span className="text-primary-foreground">Sports Business &amp; Leadership</span>,
          junto a Victoria Kauam.
        </p>
        <p className="mt-6 font-serif text-4xl font-semibold text-gold">
          $49 <span className="font-sans text-base font-normal text-primary-foreground/70">por persona</span>
        </p>
        <Button asChild size="lg" className="mt-6 bg-gold text-primary hover:bg-gold/90">
          <a href={LEVEL5X_URL} target="_blank" rel="noreferrer">
            Reserva tu lugar →
          </a>
        </Button>
      </div>
    </section>
  )
}

function Contacto() {
  useEffect(() => {
    if (document.getElementById('calendly-widget-script')) return
    const script = document.createElement('script')
    script.id = 'calendly-widget-script'
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 py-20">
      <SectionKicker>Contacto</SectionKicker>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
        <h2 className="max-w-xl font-serif text-3xl font-semibold sm:text-4xl">
          ¿Hablamos de cómo se ve esto para tu familia?
        </h2>
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <MessageCircle className="h-4 w-4" />
            Escríbeme por WhatsApp
          </a>
        </Button>
      </div>
      <p className="mt-3 max-w-xl text-muted-foreground">
        15 minutos, sin costo y sin compromiso. O agenda directo aquí abajo:
      </p>
      <div className="mt-8 overflow-hidden rounded-lg border border-border">
        <div
          className="calendly-inline-widget"
          data-url={CALENDLY_URL}
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/60">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="font-serif text-lg font-semibold">Juan Fuenmayor</p>
            <p className="text-sm text-muted-foreground">
              Vicepresidente Regional · Finanza con Propósito
            </p>
          </div>
          <SocialRow />
        </div>
        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          Este sitio tiene fines educativos e informativos generales y no
          constituye asesoría de inversión personalizada ni una oferta o
          recomendación de ningún producto específico.
        </p>
        <p className="mt-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Juan Fuenmayor. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
