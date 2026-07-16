import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ash/20 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-graphite text-xs font-bold text-paper">
                SD
              </span>
              <span className="text-lg font-bold tracking-wide text-graphite">STACKDILIGENCE</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-graphite/70">
              Know what you&apos;re actually buying.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-graphite/70">
              StackDiligence
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <Link href="/what-we-assess" className="text-sm text-graphite hover:text-ledger">
                  What We Assess
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-sm text-graphite hover:text-ledger">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/sample-report" className="text-sm text-graphite hover:text-ledger">
                  Sample Report
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-graphite/70">Company</p>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <Link href="/about" className="text-sm text-graphite hover:text-ledger">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-graphite hover:text-ledger">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/tannerbarlow/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-graphite hover:text-ledger"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-ash/20 pt-6 text-xs text-graphite/70 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} StackDiligence. All rights reserved.</p>
          <p>stackdiligence.com</p>
        </div>
      </div>
    </footer>
  );
}
