import { db } from "$lib/firebase/initFirebase";
import { setDoc, doc } from "firebase/firestore";

export async function POST({ request}) {
	const data = await request.formData();
	const formJSON = Object.fromEntries(data.entries());
	formJSON.timestamp = Date.now();

	let status = 201

	await setDoc(doc(db, "contacts", formJSON.timestamp.toString()), formJSON)
		.catch(() => { 
			status = 400
		})

	console

	return new Response(null, { status: status });
}