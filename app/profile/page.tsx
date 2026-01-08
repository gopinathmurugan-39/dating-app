"use client";

export default function ProfilePage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
			<div className="container mx-auto px-4 py-8">
				<header className="text-center mb-8">
					<h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
						My Profile
					</h1>
					<p className="text-gray-600 dark:text-gray-400">
						Manage your profile and preferences
					</p>
				</header>
			</div>
		</div>
	);
}