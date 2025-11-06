export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-center">
        <div>
          <p className="text-slate-900 font-semibold">LEGO Ideathon</p>
          <p className="text-slate-600 text-sm">Playful innovation for real-world impact.</p>
        </div>
        <div className="text-sm text-slate-600">
          <a href="#faqs" className="hover:text-orange-600">FAQs</a> · <a href="#contact" className="hover:text-orange-600">Contact</a> · <a href="#swag" className="hover:text-orange-600">Swag</a>
        </div>
        <div className="text-right text-sm text-slate-500">© {new Date().getFullYear()} LEGO Ideathon</div>
      </div>
    </footer>
  );
}
