export default function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <>
      <section className="bg-gradient-to-br from-dark to-primary py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-3">{title}</h1>
          <p className="text-white/70 text-sm">Última atualização: {updated}</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <article className="max-w-3xl mx-auto px-4 text-muted leading-relaxed space-y-6 [&_h2]:text-2xl [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-dark [&_h2]:pt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_strong]:text-dark [&_a]:text-primary [&_a]:underline">
          {children}
        </article>
      </section>
    </>
  );
}
