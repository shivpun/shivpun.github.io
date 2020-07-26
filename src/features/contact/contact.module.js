import { contactReducer } from "./contact.reducer";
import { fetchStories } from "./contact.actions";

export function getContactModule() {
	console.log('[ContactModule] is Module ...');
    return {
        // Unique id of the module
        id: "contact-news",
        // Maps the Store key to the reducer
        reducerMap: {
            contactState: contactReducer,
        },
        // Optional: Any actions to dispatch when the module is loaded
        initialActions: [fetchStories()],
        // Optional: Any actions to dispatch when the module is unloaded
        finalActions: [],
    };
}
