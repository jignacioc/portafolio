import Reveal from "../Reveal.jsx";

export default function Hero({ titulo }) {
    return (
        <section className="site-grid relative mt-[60px] overflow-hidden border-b border-line py-20 text-ink md:py-24">
            <Reveal className="relative z-10 mx-auto max-w-6xl px-6">
                <p className="mb-4 font-technical text-xs tracking-[0.16em] text-phosphor-dim">
                    ./portfolio/{titulo.toLowerCase().replaceAll(" ", "-")}
                </p>
                <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
                    {titulo}
                </h1>
            </Reveal>
        </section>
    );
}
