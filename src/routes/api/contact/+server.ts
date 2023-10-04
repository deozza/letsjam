import { db } from "$lib/firebase/initFirebase";
import { setDoc, doc } from "firebase/firestore";

export async function POST({ request}) {
	const data = await request.formData();
	const formJSON = Object.fromEntries(data.entries());

	const payload = {
		to: import.meta.env.VITE_CONTACT_EMAIL,
		from: formJSON.name + ' ' + formJSON.email,
		message: {
			subject: formJSON.informationTypeChoice,
			text: formJSON.content,
			html: formJSON.content
		},
		timestamp: Date.now()
	}

	let status = 201

	await setDoc(doc(db, "contacts", payload.timestamp.toString()), payload)
		.catch(() => { 
			status = 400
		})

	console

	return new Response(null, { status: status });
}