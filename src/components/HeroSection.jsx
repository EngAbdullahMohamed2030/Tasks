import container from "./image/Container.svg"
export default function HeroSection() {
    return (
        <div className="flex justify-between items-center">
            <div className="pl-10 w-132.5">
                <p className="inline-block font-bold text-[14px] text-[rgba(92,45,12,1)] px-3 py-2 bg-[rgba(250,237,205,1)] rounded-3xl">Premium Artisan Roastery</p>
                <h1 className="text-[rgba(30,27,24,1)] text-[56px] font-bold font-sans">Experience Coffee Crafted With Real Passion</h1>
                <p className="text-[18px] text-[rgba(107,101,95,1)]">Sourced ethically from volcanic soils across the globe and freshly roasted in small batches to deliver an unforgettable taste profile.</p>
                <div className="flex gap-5">
                    <button className="px-4 py-3 rounded-3xl bg-[rgba(139,69,19,1)] font-semibold text-[16px] text-[rgba(255,255,255,1)]">Explore Beans</button>
                    <button className="text-[rgba(139,69,19,1)] px-4 py-3 rounded-3xl font-semibold text-[16px] border-2 border-solid border-[rgba(139,69,19,1)]">Our Process</button>
                </div>
                <div className="flex gap-5">
                    <div className="flex flex-col">
                        <span className="text-[rgba(139,69,19,1)] text-[29px] font-bold">100%</span>
                        <span className="text-[rgba(107,101,95,1)] text-[14px] font-medium">Organic Arabica</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[rgba(139,69,19,1)] text-[29px] font-bold">48h</span>
                        <span className="text-[rgba(107,101,95,1)] text-[14px] font-medium">Fresh Roast Cycle</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[rgba(139,69,19,1)] text-[29px] font-bold">15k+</span>
                        <span className="text-[rgba(107,101,95,1)] text-[14px] font-medium">Coffee Lovers</span>
                    </div>
                </div>
            </div>
            <div>
                <img src={container} alt="crop" />
            </div>
        </div>
    )
}
