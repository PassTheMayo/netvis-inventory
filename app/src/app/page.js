import Link from 'next/link';

export default function Page() {
    return (
        <div className="container mx-auto max-w-6xl my-24">
            <h1 className="text-4xl font-bold">Home</h1>
            <section className="mt-8">
                <h2 className="text-2xl font-semibold">Quick Statistics</h2>
                <div className="flex items-center gap-3 mt-3">
                    <div className="basis-1/3 bg-white border border-neutral-200 p-5 rounded-lg shadow-sm">
                        <p className="font-semibold text-xl">Total Items</p>
                        <p className="font-light text-5xl font-mono mt-1">650</p>
                    </div>
                    <div className="basis-1/3 bg-white border border-neutral-200 p-5 rounded-lg shadow-sm">
                        <p className="font-semibold text-xl">Low Stock Items</p>
                        <p className="font-light text-5xl font-mono mt-1">15</p>
                    </div>
                    <div className="basis-1/3 bg-white border border-neutral-200 p-5 rounded-lg shadow-sm">
                        <p className="font-semibold text-xl">Out of Stock Items</p>
                        <p className="font-light text-5xl font-mono mt-1">20</p>
                    </div>
                </div>
                <div className="flex items-stretch gap-3 mt-3">
                    <div className="basis-1/3 bg-white border border-neutral-200 p-5 rounded-lg shadow-sm">
                        <p className="font-semibold text-xl">Recent Activity</p>
                        <p className="font-light text-5xl font-mono mt-1">25</p>
                    </div>
                    <div className="basis-1/3 bg-white border border-neutral-200 p-5 rounded-lg shadow-sm">
                        <p className="font-semibold text-xl">Total Categories</p>
                        <p className="font-light text-5xl font-mono mt-1">12</p>
                    </div>
                    <div className="basis-1/3 bg-white border border-neutral-200 p-5 rounded-lg shadow-sm" />
                </div>
            </section>
            <section className="mt-8">
                <h2 className="text-2xl font-semibold">Recent Changes</h2>
                <div className="bg-white border border-neutral-200 px-5 py-2 rounded-lg shadow-sm mt-3">
                    <ul className="flex flex-col">
                        {
                            Array(8).fill().map((_, index, arr) => (
                                <li className={`py-4 ${index + 1 !== arr.length ? 'border-b border-b-neutral-200' : ''}`} key={index}>
                                    <p>
                                        <span className="font-light">{23 + index * 3} minutes ago</span>
                                        <span className="font-bold ml-5">Jacob Gunther</span>
                                        <span> added </span>
                                        <span className="font-medium">25</span>
                                        <span> of &quot;</span>
                                        <Link href="/inventory/abcdef">
                                            <span className="link italic">20 Meter Simplex LC-UPC Fiber Patch Cable</span>
                                        </Link>
                                        <span>&quot;</span>
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </div>
    );
}