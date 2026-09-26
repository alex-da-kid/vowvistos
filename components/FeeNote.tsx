export default function FeeNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-3xl mx-auto mt-8 text-center text-sm text-muted leading-relaxed bg-light rounded-xl px-5 py-4">
      {children}
    </p>
  );
}
