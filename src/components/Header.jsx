export default function Header() {
    return (
        <div className="px-17.5 py-5 flex justify-between ">
            <div><span className="text-[26px] text-[rgb(231, 111, 81)]">☕</span>
                <span className="text-[26px] font-sans font-bold text-[rgb(92,45,12)]">Koffea</span>
            </div>
            <nav className="flex gap-4">
                <a className="text-[rgba(139,69,19,1)] font-semibold" href="#">Home</a>
                <a className="font-semibold text-[rgba(30,27,24,1)]" href="#">Features</a>
                <a className="font-semibold text-[rgba(30,27,24,1)]" href="#">Our Story</a>
                <a className="font-semibold text-[rgba(30,27,24,1)]" href="#">Menu</a>
                <a className="font-semibold text-[rgba(30,27,24,1)]" href="#">Contact</a>
            </nav>
            <button className="text-[rgba(255,255,255,1)] text-[16px] font-sans bg-[rgba(139,69,19,1)] px-6 py-3 rounded-3xl">Order Now</button>
        </div>
    );
}
