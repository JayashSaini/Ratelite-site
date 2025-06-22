import { useState } from "react";
import {
	Shield,
	Zap,
	Settings,
	Github,
	Download,
	Code,
	ArrowRight,
	CheckCircle,
	Home,
	Book,
	Copy,
	Check,
	ExternalLink,
} from "lucide-react";

function App() {
	const [currentPage, setCurrentPage] = useState("home");
	const [copiedCode, setCopiedCode] = useState("");

	const copyToClipboard = (text: string, id: string) => {
		navigator.clipboard.writeText(text);
		setCopiedCode(id);
		setTimeout(() => setCopiedCode(""), 2000);
	};

	const HomePage = () => (
		<div className="min-h-screen bg-white">
			{/* Header */}
			<header className="border-b border-gray-100">
				<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
					<div className="flex items-center space-x-2">
						<Shield className="w-8 h-8 text-red-500" />
						<span className="text-2xl font-bold text-gray-900">ratelite</span>
					</div>
					<div className="flex items-center space-x-6">
						<button
							onClick={() => setCurrentPage("docs")}
							className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
						>
							<Book className="w-5 h-5" />
							<span>Documentation</span>
						</button>
						<a
							href="https://github.com/JayashSaini/Ratelite"
							className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
						>
							<Github className="w-5 h-5" />
							<span>GitHub</span>
						</a>
						<a
							href="https://www.npmjs.com/package/ratelite"
							className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
						>
							<Download className="w-4 h-4" />
							<span>Install</span>
						</a>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className="py-20 px-6">
				<div className="max-w-4xl mx-auto text-center">
					<div className="inline-flex items-center space-x-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
						<Zap className="w-4 h-4" />
						<span>Redis-Based & Serverless Ready</span>
					</div>
					<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
						Rate Limiting Made Easy
						<span className="block text-red-500">with Express.js</span>
					</h1>
					<p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
						A simple, flexible Redis-based rate limiter built for serverless
						functions, edge environments, and traditional Node.js applications.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<div className="bg-gray-900 text-white px-8 py-4 rounded-lg font-mono text-lg">
							npm install ratelite
						</div>
						<button
							onClick={() => setCurrentPage("docs")}
							className="flex items-center justify-center space-x-2 border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
						>
							<span>View Documentation</span>
							<ArrowRight className="w-4 h-4" />
						</button>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 px-6 bg-gray-50">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-4">
							Why Choose Ratelite?
						</h2>
						<p className="text-xl text-gray-600">
							Built for modern applications with Redis reliability
						</p>
					</div>
					<div className="grid md:grid-cols-4 gap-8">
						<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
							<div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
								<Zap className="w-6 h-6 text-red-500" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Simple API
							</h3>
							<p className="text-gray-600">
								Get started in minutes with a clean and intuitive API design.
							</p>
						</div>
						<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
							<div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
								<Settings className="w-6 h-6 text-red-500" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Upstash Redis
							</h3>
							<p className="text-gray-600">
								Built on @upstash/redis for serverless and edge compatibility.
							</p>
						</div>
						<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
							<div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
								<Shield className="w-6 h-6 text-red-500" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Flexible
							</h3>
							<p className="text-gray-600">
								Customize keys, error messages, and behavior with ease.
							</p>
						</div>
						<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
							<div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
								<Code className="w-6 h-6 text-red-500" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								TypeScript Ready
							</h3>
							<p className="text-gray-600">
								Fully written in TypeScript with type definitions included.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Code Example Section */}
			<section className="py-20 px-6">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold text-gray-900 mb-4">
							Get Started in Seconds
						</h2>
						<p className="text-xl text-gray-600">
							Simple setup with Upstash Redis
						</p>
					</div>
					<div className="bg-gray-900 rounded-2xl p-8 text-white overflow-x-auto">
						<div className="flex items-center justify-between mb-6">
							<div className="flex items-center space-x-2">
								<Code className="w-5 h-5 text-red-400" />
								<span className="text-sm text-gray-400">index.js</span>
							</div>
							<button
								onClick={() =>
									copyToClipboard(
										`import express from "express";
import { createRateLimiter } from "ratelite";

const app = express();

// Initialize rate limiter middleware
const rateLimiter = createRateLimiter({
  redisUrl: process.env.UPSTASH_REDIS_REST_URL!,     // Redis REST URL
  redisToken: process.env.UPSTASH_REDIS_REST_TOKEN!, // Redis REST token
  maxRequests: 10,    // Max 10 requests
  windowInSeconds: 60 // Per 60-second window
});

app.use(rateLimiter);

app.get("/", (_req, res) => {
  res.send("Hello, World!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
`,
										"example"
									)
								}
								className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
							>
								{copiedCode === "example" ? (
									<Check className="w-4 h-4" />
								) : (
									<Copy className="w-4 h-4" />
								)}
								<span className="text-sm">
									{copiedCode === "example" ? "Copied!" : "Copy"}
								</span>
							</button>
						</div>
						<pre className="text-sm leading-relaxed">
							{`import express from "express";
import { createRateLimiter } from "ratelite";

const app = express();

// Initialize rate limiter middleware
const rateLimiter = createRateLimiter({
  redisUrl: process.env.UPSTASH_REDIS_REST_URL!,     // Redis REST URL
  redisToken: process.env.UPSTASH_REDIS_REST_TOKEN!, // Redis REST token
  maxRequests: 10,    // Max 10 requests
  windowInSeconds: 60 // Per 60-second window
});

app.use(rateLimiter);

app.get("/", (_req, res) => {
  res.send("Hello, World!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
`}
						</pre>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 px-6 bg-red-500">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl font-bold text-white mb-6">
						Ready to Protect Your API?
					</h2>
					<p className="text-xl text-red-100 mb-8">
						Join developers who trust ratelite for their rate limiting needs
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="https://www.npmjs.com/package/ratelite"
							className="bg-white text-red-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
						>
							Install Now
						</a>
						<a
							href="https://github.com/JayashSaini/Ratelite"
							className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-500 transition-colors"
						>
							View Source
						</a>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-12 px-6 border-t border-gray-100">
				<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
					<div className="flex items-center space-x-2 mb-4 md:mb-0">
						<Shield className="w-6 h-6 text-red-500" />
						<span className="text-xl font-bold text-gray-900">ratelite</span>
					</div>
					<div className="flex items-center space-x-6 text-gray-600">
						<button
							onClick={() => setCurrentPage("docs")}
							className="hover:text-gray-900 transition-colors"
						>
							Documentation
						</button>
						<a
							href="https://www.npmjs.com/package/ratelite"
							className="hover:text-gray-900 transition-colors"
						>
							NPM
						</a>
						<a
							href="https://github.com/JayashSaini/Ratelite/issues"
							className="hover:text-gray-900 transition-colors"
						>
							Issues
						</a>
					</div>
				</div>
			</footer>
		</div>
	);

	const DocsPage = () => (
		<div className="min-h-screen bg-white">
			{/* Header */}
			<header className="border-b border-gray-100 sticky top-0 bg-white z-50">
				<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
					<div className="flex items-center space-x-4">
						<button
							onClick={() => setCurrentPage("home")}
							className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
						>
							<Home className="w-5 h-5" />
							<span>Home</span>
						</button>
						<div className="w-px h-6 bg-gray-300"></div>
						<div className="flex items-center space-x-2">
							<Shield className="w-6 h-6 text-red-500" />
							<span className="text-xl font-bold text-gray-900">ratelite</span>
							<span className="text-gray-500">/ Documentation</span>
						</div>
					</div>
					<div className="flex items-center space-x-6">
						<a
							href="https://github.com/JayashSaini/Ratelite"
							className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
						>
							<Github className="w-5 h-5" />
							<span>GitHub</span>
						</a>
						<a
							href="https://www.npmjs.com/package/ratelite"
							className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
						>
							<Download className="w-4 h-4" />
							<span>Install</span>
						</a>
					</div>
				</div>
			</header>

			<div className="max-w-6xl mx-auto px-6 py-12 flex gap-12">
				{/* Sidebar */}
				<aside className="w-64 flex-shrink-0">
					<nav className="sticky top-24">
						<div className="space-y-1">
							<a
								href="#overview"
								className="block px-3 py-2 text-sm text-red-600 bg-red-50 rounded-lg font-medium"
							>
								Overview
							</a>
							<a
								href="#installation"
								className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
							>
								Installation
							</a>
							<a
								href="#quick-start"
								className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
							>
								Quick Start
							</a>
							<a
								href="#configuration"
								className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
							>
								Configuration
							</a>
							<a
								href="#custom-keys"
								className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
							>
								Custom Keys
							</a>
							<a
								href="#testing"
								className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
							>
								Testing
							</a>
							<a
								href="#license"
								className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
							>
								License
							</a>
						</div>
					</nav>
				</aside>

				{/* Main Content */}
				<main className="flex-1 max-w-none">
					<div className="prose prose-gray max-w-none">
						{/* Overview */}
						<section
							id="overview"
							className="mb-16"
						>
							<h1 className="text-4xl font-bold text-gray-900 mb-6">
								Ratelite Documentation
							</h1>
							<p className="text-xl text-gray-600 mb-8">
								A simple, modern, and flexible Redis-based rate limiter for
								Express.js, designed for serverless functions, edge
								environments, and traditional Node.js applications.
							</p>

							<div className="flex items-center space-x-4 mb-8">
								<a
									href="https://www.npmjs.com/package/ratelite"
									className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
								>
									<span>NPM version</span>
									<ExternalLink className="w-3 h-3" />
								</a>
								<a
									href="https://www.npmjs.com/package/ratelite"
									className="inline-flex items-center space-x-2 bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm"
								>
									<span>NPM downloads</span>
									<ExternalLink className="w-3 h-3" />
								</a>
							</div>

							<div className="bg-gray-50 rounded-xl p-6 mb-8">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">
									Features
								</h3>
								<div className="grid md:grid-cols-2 gap-3">
									{[
										"Simple API: Get started in minutes with a clean and intuitive API",
										"Upstash Redis: Built on @upstash/redis for serverless and edge compatibility",
										"Flexible: Customize keys, error messages, and behavior with ease",
										"TypeScript Ready: Fully written in TypeScript with type definitions included",
									].map((feature, index) => (
										<div
											key={index}
											className="flex items-start space-x-3"
										>
											<CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
											<span className="text-gray-700 text-sm">{feature}</span>
										</div>
									))}
								</div>
							</div>
						</section>

						{/* Installation */}
						<section
							id="installation"
							className="mb-16"
						>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Installation
							</h2>
							<div className="bg-gray-900 rounded-xl p-6 relative">
								<button
									onClick={() =>
										copyToClipboard("npm install ratelite", "install")
									}
									className="absolute top-4 right-4 flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
								>
									{copiedCode === "install" ? (
										<Check className="w-4 h-4" />
									) : (
										<Copy className="w-4 h-4" />
									)}
									<span className="text-sm">
										{copiedCode === "install" ? "Copied!" : "Copy"}
									</span>
								</button>
								<pre className="text-white font-mono">npm install ratelite</pre>
							</div>
						</section>

						{/* Quick Start */}
						<section
							id="quick-start"
							className="mb-16"
						>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Quick Start
							</h2>
							<div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
								<p className="text-blue-800">
									<strong>Prerequisites:</strong> Create a new Upstash Redis
									database at{" "}
									<a
										href="https://upstash.com"
										className="underline hover:no-underline"
									>
										upstash.com
									</a>{" "}
									and get your{" "}
									<code className="bg-blue-100 px-2 py-1 rounded">
										UPSTASH_REDIS_REST_URL
									</code>{" "}
									and{" "}
									<code className="bg-blue-100 px-2 py-1 rounded">
										UPSTASH_REDIS_REST_TOKEN
									</code>
									.
								</p>
							</div>

							<div className="bg-gray-900 rounded-xl p-6 relative">
								<button
									onClick={() =>
										copyToClipboard(
											`import express from "express";
import { createRateLimiter } from "ratelite";

const app = express();

// Initialize rate limiter middleware
const rateLimiter = createRateLimiter({
  redisUrl: process.env.UPSTASH_REDIS_REST_URL!,     // Redis REST URL
  redisToken: process.env.UPSTASH_REDIS_REST_TOKEN!, // Redis REST token
  maxRequests: 10,    // Max 10 requests
  windowInSeconds: 60 // Per 60-second window
});

app.use(rateLimiter);

app.get("/", (_req, res) => {
  res.send("Hello, World!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
`,
											"quickstart"
										)
									}
									className="absolute top-4 right-4 flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
								>
									{copiedCode === "quickstart" ? (
										<Check className="w-4 h-4" />
									) : (
										<Copy className="w-4 h-4" />
									)}
									<span className="text-sm">
										{copiedCode === "quickstart" ? "Copied!" : "Copy"}
									</span>
								</button>
								<pre className="text-white text-sm leading-relaxed overflow-x-auto">
									{`import express from "express";
import { createRateLimiter } from "ratelite";

const app = express();

// Initialize rate limiter middleware
const rateLimiter = createRateLimiter({
  redisUrl: process.env.UPSTASH_REDIS_REST_URL!,     // Redis REST URL
  redisToken: process.env.UPSTASH_REDIS_REST_TOKEN!, // Redis REST token
  maxRequests: 10,    // Max 10 requests
  windowInSeconds: 60 // Per 60-second window
});

app.use(rateLimiter);

app.get("/", (_req, res) => {
  res.send("Hello, World!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
`}
								</pre>
							</div>
						</section>

						{/* Configuration */}
						<section
							id="configuration"
							className="mb-16"
						>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Configuration
							</h2>
							<p className="text-gray-600 mb-6">
								The{" "}
								<code className="bg-gray-100 px-2 py-1 rounded">
									createRateLimiter
								</code>{" "}
								function accepts the following options:
							</p>

							<div className="overflow-x-auto">
								<table className="w-full border border-gray-200 rounded-xl overflow-hidden">
									<thead className="bg-gray-50">
										<tr>
											<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
												Option
											</th>
											<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
												Type
											</th>
											<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
												Required
											</th>
											<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
												Description
											</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-200">
										<tr>
											<td className="px-6 py-4 text-sm font-mono text-gray-900">
												redisUrl
											</td>
											<td className="px-6 py-4 text-sm text-gray-600">
												string
											</td>
											<td className="px-6 py-4 text-sm text-red-600 font-medium">
												Yes
											</td>
											<td className="px-6 py-4 text-sm text-gray-600">
												Your Upstash Redis REST URL.
											</td>
										</tr>
										<tr>
											<td className="px-6 py-4 text-sm font-mono text-gray-900">
												redisToken
											</td>
											<td className="px-6 py-4 text-sm text-gray-600">
												string
											</td>
											<td className="px-6 py-4 text-sm text-red-600 font-medium">
												Yes
											</td>
											<td className="px-6 py-4 text-sm text-gray-600">
												Your Upstash Redis REST token.
											</td>
										</tr>
										<tr>
											<td className="px-6 py-4 text-sm font-mono text-gray-900">
												maxRequests
											</td>
											<td className="px-6 py-4 text-sm text-gray-600">
												number
											</td>
											<td className="px-6 py-4 text-sm text-red-600 font-medium">
												Yes
											</td>
											<td className="px-6 py-4 text-sm text-gray-600">
												The maximum number of requests to allow per window.
											</td>
										</tr>
										<tr>
											<td className="px-6 py-4 text-sm font-mono text-gray-900">
												windowInSeconds
											</td>
											<td className="px-6 py-4 text-sm text-gray-600">
												number
											</td>
											<td className="px-6 py-4 text-sm text-red-600 font-medium">
												Yes
											</td>
											<td className="px-6 py-4 text-sm text-gray-600">
												The duration of the time window in seconds.
											</td>
										</tr>
										<tr>
											<td className="px-6 py-4 text-sm font-mono text-gray-900">
												keyFn
											</td>
											<td className="px-6 py-4 text-sm text-gray-600">{`(req: Request) => string`}</td>
											<td className="px-6 py-4 text-sm text-gray-600">No</td>
											<td className="px-6 py-4 text-sm text-gray-600">
												A function to generate a unique key for rate limiting.
												Defaults to req.ip.
											</td>
										</tr>
										<tr>
											<td className="px-6 py-4 text-sm font-mono text-gray-900">
												onLimitReached
											</td>
											<td className="px-6 py-4 text-sm text-gray-600">{`(req: Request, res: Response) => void`}</td>
											<td className="px-6 py-4 text-sm text-gray-600">No</td>
											<td className="px-6 py-4 text-sm text-gray-600">
												A callback to execute when the rate limit is exceeded.
											</td>
										</tr>
										<tr>
											<td className="px-6 py-4 text-sm font-mono text-gray-900">
												onError
											</td>
											<td className="px-6 py-4 text-sm text-gray-600">{`(err: unknown, req: Request, res: Response) => void`}</td>
											<td className="px-6 py-4 text-sm text-gray-600">No</td>
											<td className="px-6 py-4 text-sm text-gray-600">
												A callback to handle errors from the Redis client.
											</td>
										</tr>
										<tr>
											<td className="px-6 py-4 text-sm font-mono text-gray-900">
												debug
											</td>
											<td className="px-6 py-4 text-sm text-gray-600">
												boolean
											</td>
											<td className="px-6 py-4 text-sm text-gray-600">No</td>
											<td className="px-6 py-4 text-sm text-gray-600">
												Set to true to log debug information.
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</section>

						{/* Custom Key Generation */}
						<section
							id="custom-keys"
							className="mb-16"
						>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Custom Key Generation
							</h2>
							<p className="text-gray-600 mb-6">
								By default, ratelite uses the client's IP address (
								<code className="bg-gray-100 px-2 py-1 rounded">req.ip</code>).
								You can provide a custom{" "}
								<code className="bg-gray-100 px-2 py-1 rounded">keyFn</code> to
								use a different identifier, such as an API key or user ID.
							</p>

							<div className="bg-gray-900 rounded-xl p-6 relative">
								<button
									onClick={() =>
										copyToClipboard(
											`const rateLimiter = createRateLimiter({
	// ... other options
	keyFn: (req) => req.headers["x-api-key"] as string,
});`,
											"customkey"
										)
									}
									className="absolute top-4 right-4 flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
								>
									{copiedCode === "customkey" ? (
										<Check className="w-4 h-4" />
									) : (
										<Copy className="w-4 h-4" />
									)}
									<span className="text-sm">
										{copiedCode === "customkey" ? "Copied!" : "Copy"}
									</span>
								</button>
								<pre className="text-white text-sm leading-relaxed">
									{`const rateLimiter = createRateLimiter({
	// ... other options
	keyFn: (req) => req.headers["x-api-key"] as string,
});`}
								</pre>
							</div>
						</section>

						{/* License */}
						<section
							id="license"
							className="mb-16"
						>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">License</h2>
							<p className="text-gray-600">
								This project is licensed under the MIT License. See the{" "}
								<a
									href="https://github.com/JayashSaini/Ratelite/blob/main/LICENSE"
									className="text-red-500 hover:text-red-600 underline"
								>
									LICENSE
								</a>{" "}
								file for details.
							</p>
						</section>

						{/* Keywords */}
						<section className="mb-16">
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Keywords
							</h2>
							<div className="flex flex-wrap gap-2">
								{[
									"typescript",
									"node.js",
									"express.js",
									"upstash/redis",
									"npm",
								].map((keyword) => (
									<span
										key={keyword}
										className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
									>
										{keyword}
									</span>
								))}
							</div>
						</section>
					</div>
				</main>
			</div>

			{/* Footer */}
			<footer className="py-12 px-6 border-t border-gray-100 bg-gray-50">
				<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
					<div className="flex items-center space-x-2 mb-4 md:mb-0">
						<Shield className="w-6 h-6 text-red-500" />
						<span className="text-xl font-bold text-gray-900">ratelite</span>
					</div>
					<div className="flex items-center space-x-6 text-gray-600">
						<button
							onClick={() => setCurrentPage("home")}
							className="hover:text-gray-900 transition-colors"
						>
							Home
						</button>
						<a
							href="https://www.npmjs.com/package/ratelite"
							className="hover:text-gray-900 transition-colors"
						>
							NPM
						</a>
						<a
							href="https://github.com/JayashSaini/Ratelite/issues"
							className="hover:text-gray-900 transition-colors"
						>
							Issues
						</a>
					</div>
				</div>
			</footer>
		</div>
	);

	return currentPage === "home" ? <HomePage /> : <DocsPage />;
}

export default App;
