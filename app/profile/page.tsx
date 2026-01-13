"use client";

import { UserProfile } from "@/interfaces/UserProfile";
import { GetCurrentUserProfile } from "@/lib/actions/profile";
import { useEffect, useState } from "react";



export default function ProfilePage() {

	const [profile, setProfile] = useState<UserProfile | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function loadProfile() {
			try {
				const profileData = await GetCurrentUserProfile();
				console.log(profileData);
				if(profileData){
					setProfile(profileData);
				}
				else{
					setError("Failed to load profile");
				}
			}
			catch (error) {
				console.error("Error loading profile", error);
			}
			finally {
				setLoading(false);
			}
		}

		loadProfile();
	}, [])

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

				<div className="max-w-4xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						<div className="lg:col-span-2">
							<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}