import React from "react";
import { connect } from "react-redux";

const ContactUS = ({ items }) => {
	console.log('[contact.component.js] component ...');
	console.log(items);
    if (items.length === 0) {
        return <div className="contact-root widget">Loading News...</div>;
    }

    return (
        <div className="news-root widget">
            <h2>Contact News - Top 5</h2>
            {
                items.map((item, index) => {
                    return <div key={index}>{item.title}<br/></div>
                })
            }
        </div>
    );
};


const mapStateToProps = state => {
	console.log('[contact.component.js] mapStateToProps ...');
    return {
        items: state.contactState ? state.contactState.items : [],
    };
};

export const ConnectedContact = connect(mapStateToProps)(ContactUS);
