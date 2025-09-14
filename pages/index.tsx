import Image from "next/image";
import {
	Home,
	Hammer,
	Bath,
	Trees,
	Building2,
	Store,
	Warehouse,
	ClipboardCheck,
	ShieldCheck,
	Clock,
	Award,
	HardHat
} from "lucide-react";

const picsum = (w: number, h: number, seed: number) =>
	`https://picsum.photos/seed/${seed}/${w}/${h}`;

export default function HomePage() {
	return (
		<main className="font-sans text-gray-800">
			{/* HERO */}
			<section className="relative flex min-h-[90vh]">
				<div className="relative flex-1">
					<Image
						src={picsum(1200, 900, 1)}
						alt="Residential Project"
						fill
						className="object-cover"
						unoptimized
					/>
				</div>
				<div className="relative flex-1">
					<Image
						src={picsum(1200, 900, 2)}
						alt="Commercial Project"
						fill
						className="object-cover"
						unoptimized
					/>
				</div>
				<div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
					<h1 className="text-4xl md:text-6xl font-bold leading-tight">
						Building With Integrity. <br /> From Homes to High-Rises.
					</h1>
					<p className="mt-4 text-lg max-w-2xl">
						Trusted general contracting services for residential and commercial
						projects across the region.
					</p>
					<div className="mt-6 flex gap-4 flex-wrap justify-center">
						<a
							href="#contact"
							className="bg-[#556B2F] px-6 py-3 rounded-lg shadow-md hover:opacity-90 font-semibold"
						>
							Get a Free Quote
						</a>
						<a
							href="#projects"
							className="border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black font-semibold"
						>
							See Our Work
						</a>
					</div>
				</div>
			</section>

			{/* WHY CHOOSE US */}
			<section className="bg-[#F5F5DC] py-16 text-center">
				<h2 className="text-3xl font-bold text-[#556B2F]">
					Experience You Can Build On
				</h2>
				<p className="mt-4 max-w-2xl mx-auto">
					With 15+ years of hands-on experience, we’ve completed projects ranging
					from kitchen remodels to multi-million-dollar commercial developments.
				</p>
				<div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
					{/* Licensed & Insured */}
					<div className="flex flex-col items-center">
						<div className="bg-[#556B2F] p-4 rounded-full">
							<ShieldCheck className="w-8 h-8 text-white" />
						</div>
						<p className="mt-3 font-medium">Licensed & Insured</p>
					</div>

					{/* On-Time Delivery */}
					<div className="flex flex-col items-center">
						<div className="bg-[#556B2F] p-4 rounded-full">
							<Clock className="w-8 h-8 text-white" />
						</div>
						<p className="mt-3 font-medium">On-Time Delivery</p>
					</div>

					{/* Proven Track Record */}
					<div className="flex flex-col items-center">
						<div className="bg-[#556B2F] p-4 rounded-full">
							<Award className="w-8 h-8 text-white" />
						</div>
						<p className="mt-3 font-medium">Proven Track Record</p>
					</div>

					{/* Safety First */}
					<div className="flex flex-col items-center">
						<div className="bg-[#556B2F] p-4 rounded-full">
							<HardHat className="w-8 h-8 text-white" />
						</div>
						<p className="mt-3 font-medium">Safety First</p>
					</div>
				</div>
			</section>


			{/* SERVICES */}
			<section className="py-20 bg-white">
				<div className="max-w-5xl mx-auto px-4">
					<h2 className="text-center text-3xl font-bold text-[#556B2F]">Our Services</h2>
					<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">

						{/* Residential Card */}
						<div className="bg-[#556B2F] text-white rounded-xl shadow-lg p-8 flex flex-col">
							<div className="flex items-center gap-3 mb-6">
								<Home className="w-8 h-8" />
								<h3 className="text-2xl font-semibold">Residential</h3>
							</div>
							<ul className="space-y-4">
								<li className="flex items-center gap-3">
									<Hammer className="w-5 h-5" />
									<span>Custom Home Builds</span>
								</li>
								<li className="flex items-center gap-3">
									<Bath className="w-5 h-5" />
									<span>Kitchens & Bathrooms</span>
								</li>
								<li className="flex items-center gap-3">
									<Trees className="w-5 h-5" />
									<span>Outdoor Living Spaces</span>
								</li>
								<li className="flex items-center gap-3">
									<ClipboardCheck className="w-5 h-5" />
									<span>Renovations & Additions</span>
								</li>
							</ul>
						</div>

						{/* Commercial Card */}
						<div className="bg-[#556B2F] text-white rounded-xl shadow-lg p-8 flex flex-col">
							<div className="flex items-center gap-3 mb-6">
								<Building2 className="w-8 h-8" />
								<h3 className="text-2xl font-semibold">Commercial</h3>
							</div>
							<ul className="space-y-4">
								<li className="flex items-center gap-3">
									<Store className="w-5 h-5" />
									<span>Office & Retail Buildouts</span>
								</li>
								<li className="flex items-center gap-3">
									<Warehouse className="w-5 h-5" />
									<span>Warehouses & Facilities</span>
								</li>
								<li className="flex items-center gap-3">
									<ClipboardCheck className="w-5 h-5" />
									<span>Project Management & Design-Build</span>
								</li>
								<li className="flex items-center gap-3">
									<Building2 className="w-5 h-5" />
									<span>Tenant Improvements</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* PROJECTS */}
			<section id="projects" className="py-16 bg-[#F5F5DC]">
				<h2 className="text-center text-3xl font-bold text-[#556B2F]">
					Featured Projects
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto px-4">
					{Array.from({ length: 6 }).map((_, i) => (
						<div
							key={i}
							className="relative h-64 rounded-lg overflow-hidden group"
						>
							<Image
								src={picsum(800, 600, i + 3)}
								alt={`Project ${i + 1}`}
								fill
								className="object-cover"
								unoptimized
							/>
							<div className="absolute inset-0 bg-[#556B2F]/70 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition">
								Project {i + 1}
							</div>
						</div>
					))}
				</div>
			</section>

			{/* TESTIMONIALS */}
			<section className="py-16 bg-white text-center">
				<h2 className="text-3xl font-bold text-[#556B2F]">What Our Clients Say</h2>
				<blockquote className="mt-6 max-w-2xl mx-auto italic text-lg">
					“They turned our vision into reality and finished ahead of schedule!”
					<br />— Sarah M.
				</blockquote>
			</section>

			{/* CALLOUT */}
			<section className="relative py-20 bg-gradient-to-r from-[#445426] to-[#556B2F] text-white overflow-hidden">
				{/* Decorative background pattern */}
				<div className="absolute inset-0 opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/diagmonds-light.png')]"></div>

				<div className="relative max-w-5xl mx-auto text-center px-6">
					<h2 className="text-4xl font-extrabold tracking-tight">
						Licensed. Bonded. Insured.
					</h2>
					<p className="mt-4 text-lg max-w-2xl mx-auto">
						Serving Fresno & Clovis with integrity and craftsmanship for over 15 years.
					</p>

					{/* Trust badges */}
					<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
						<div className="flex flex-col items-center">
							<div className="bg-white/20 p-4 rounded-full">
								<ShieldCheck className="w-8 h-8 text-white" />
							</div>
							<p className="mt-2 font-medium">Fully Licensed</p>
						</div>
						<div className="flex flex-col items-center">
							<div className="bg-white/20 p-4 rounded-full">
								<Clock className="w-8 h-8 text-white" />
							</div>
							<p className="mt-2 font-medium">On-Time Delivery</p>
						</div>
						<div className="flex flex-col items-center">
							<div className="bg-white/20 p-4 rounded-full">
								<Award className="w-8 h-8 text-white" />
							</div>
							<p className="mt-2 font-medium">Trusted Experience</p>
						</div>
					</div>

					{/* CTA */}
					<a
						href="#contact"
						className="mt-10 inline-block !bg-white text-[#556B2F] px-8 py-4 rounded-lg shadow-lg font-semibold text-lg hover:bg-gray-100 transition"
					>
						Start Your Project Today
					</a>
				</div>
			</section>

			{/* CONTACT */}
			<section id="contact" className="py-16 bg-[#F5F5DC]">
				<h2 className="text-center text-3xl font-bold text-[#556B2F]">Contact Us</h2>
				<form
					name="contact"
					method="POST"
					data-netlify="true"
					netlify-honeypot="bot-field"
					className="max-w-2xl mx-auto mt-10 grid grid-cols-1 gap-4 px-4"
				>
					<input type="hidden" name="form-name" value="contact" />
					<p className="hidden">
						<label>
							Don’t fill this out: <input name="bot-field" />
						</label>
					</p>

					<input
						type="text"
						name="name"
						placeholder="Name"
						className="p-3 rounded border"
						required
					/>
					<input
						type="email"
						name="email"
						placeholder="Email"
						className="p-3 rounded border"
						required
					/>
					<input
						type="tel"
						name="phone"
						placeholder="Phone"
						className="p-3 rounded border"
					/>
					<textarea
						name="message"
						placeholder="Message"
						rows={5}
						className="p-3 rounded border"
						required
					/>
					<button
						type="submit"
						className="bg-[#556B2F] text-white px-6 py-3 rounded-lg hover:opacity-90 font-semibold"
					>
						Send
					</button>
				</form>
			</section>

			{/* FOOTER */}
			<footer className="bg-gray-900 text-white py-6 text-center">
				<p>© {new Date().getFullYear()} Olive Builder. All rights reserved.</p>
			</footer>
		</main>
	);
}
