import { contactReducer } from "./contact.reducer";
import { fetchStories } from "./contact.actions";

export function getContactModule() {
	console.log('[ContactModule] is Module ...');
    return {
        id: "contact-news",
        reducerMap: {
            contactState: contactReducer,
        },
        initialActions: [fetchStories()],
        finalActions: [],
    };
}
