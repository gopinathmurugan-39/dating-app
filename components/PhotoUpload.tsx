export default function PhotoUpload({
	onPhotoUploaded
} : {
	onPhotoUploaded: (url: string) => void;
}) {
	return (
		<div className="absolute bottom-0 right-o">
			<input type="file" accept="image/*" className="hidden"></input>
		</div>
	);
};