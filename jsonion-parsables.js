import React from 'react';

export default class jsonionParsables extends React.Component {
	constructor(props) {
		super(props);

		// this.parsedProps = parseProps(props);

		this.state = {
			Component: null
		}
	}

	parseDocument(document, FormatAsComponent) {
		var Component = new FormatAsComponent();

		this.parseComponent(Component);
	}

	parseComponent(Component) {
		if (typeof Component.ComponentFromString !== 'undefined') {
			Component.ComponentFromString.forEach((object, objKey) => {
				if (objKey == objKey[0].toLowerCase()) {
					// This is a Component
				}

				if (parseInt(objKey) == (objKey + 0)) {
					// This is a string variant
					
					Object.keys(object).forEach(key => {

					});
				}

				if (isArray(object)) {
					// This is a string object
				}
			});
		}
	}

	parseString(string, definition = null) {
		if (isArray(string)) {

		} else {

		}
	}
}

function isArray (object) {
	if(Object.prototype.toString.call(object) === '[object Array]') {
    return true;
	} else {
		return false;
	}
}

function isObject (object) {
	if(Object.prototype.toString.call(object) === '[object Object]') {
    return true;
	} else {
		return false;
	}
}

function isRegex (object) {
	if(Object.constructor.name === 'RegExp') {
    return true;
	} else {
		return false;
	}
}