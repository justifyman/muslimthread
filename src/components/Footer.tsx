export default function Footer() {
  return (
    <footer className="mt-20 py-10 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-500">
          MuslimThread © {new Date().getFullYear()} | A comprehensive Islamic
          resource hub
        </p>
      </div>
    </footer>
  );
}
