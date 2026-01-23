"use server";

import { createClient } from "../supabase/server";

export async function GetCurrentUserProfile() {
	const supabase = await createClient();

	const {data : { user }} = await supabase.auth.getUser();

	if(!user) {
		return null;
	}

	const {data: profile, error} = await supabase.from("users").select("*").eq("id", user.id).single();

	if(error) {
		console.error("Error fetching profile", error);
		return null;
	}

	return profile;
}

export async function uploadProfilePhoto(file: File) {
	const supabase = await createClient();

	const {data: {user}} = await supabase.auth.getUser();

	if(!user) {
		return {
			success: false,
			error: "User is not logged in"
		}
	}

	const fileExt = file.name.split(".").pop();
	const fileName = `${user.id}-${Date.now()}.${fileExt}`;

	const {error} = await supabase.storage.from("profilepics").upload(fileName, file, {
		cacheControl: "3600",
		upsert: false
	});

	if(error) {
		return {
			success: false,
			error: error.message
		}
	}

	const {data: {publicUrl}} = supabase.storage.from("profilepics").getPublicUrl(fileName);

	return {
		success: true,
		url: publicUrl
	}
}