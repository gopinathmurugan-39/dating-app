import { UserProfile } from "./UserProfile";

export interface ChatData {
	id: string;
	user: UserProfile;
	lastMessage: string;
	lastMessageTime: string;
	unreadCount: number;
}
