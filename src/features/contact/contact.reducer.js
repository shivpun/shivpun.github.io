import produce from "immer";
import { ContactAvailable } from "./contact.actions";

export const contactReducer = (state, action) => {
	console.log('[Contact.Reducer.js] Reducer:');
    return produce(state || { items: [] }, draft => {
        switch (action.type) {
            case ContactAvailable: {
                draft.items = action.payload.items;
                break;
            }
            default: {
                //do nothing
            }
        }
    });
};
