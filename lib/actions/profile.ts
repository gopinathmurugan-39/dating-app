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