export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-line bg-void font-technical text-muted">
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-[0.68rem] tracking-wide sm:flex-row sm:items-center sm:justify-between">
                <p>
                    <span className="text-phosphor">[JIGNACIOC/{year}]</span>{" "}
                    portfolio.session closed — gracias por visitar
                </p>
                <a
                    href="mailto:joaquinignacioclark@gmail.com"
                    className="transition-colors hover:text-phosphor"
                >
                    joaquinignacioclark@gmail.com
                </a>
            </div>
        </footer>
    );
}
