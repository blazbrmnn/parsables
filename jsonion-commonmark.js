import React from 'react';
import jsonionParsables from './jsonion-parsables';

export default class Commonmark extends React.Component {
	constructor(props) {
		super(props);

		this.Heading = Heading;
		this.BoldText = BoldText;
	}
}

class Paragraph extends React.Component {
	constructor(props) {
		super(props);

		this.ComponentExclusion = [
			Heading, OrderedList
		];
	}
}

class Heading extends React.Component {
	constructor(props) {
		super(props);

		this.H1 = Heading1;
		this.H2 = Heading2;
		this.H3 = Heading3;
		this.H4 = Heading4;

		this.ComponentFromString = {
			Heading: {
				H1: [/^/, "# ${content}", /$/],
				H2: [/^/, "## ${content}", /$/],
				H3: [/^/, "### ${content}", /$/],
				H4: [/^/, "#### ${content}", /$/]
			}
		}
	}

	render() {
		return jsonionParsables()
	}
}

const Heading1 = ({content, className, style}) => <h1 {...className} {...style}>{content}</h1>
const Heading2 = ({content, className, style}) => <h2 {...className} {...style}>{content}</h2>
const Heading3 = ({content, className, style}) => <h3 {...className} {...style}>{content}</h3>
const Heading4 = ({content, className, style}) => <h4 {...className} {...style}>{content}</h4>

class BoldText extends React.Component {
	constructor(props) {
		super(props);

		this.ComponentFromString = "**${content}**"
	}

	render() {
		return (
			<strong>{this.props.content}</strong>
		);
	}
}

class ItalicText extends React.Component {
	constructor(props) {
		super(props);

		this.ComponentFromString = {
			0: "*${content}*",
			1: "_${content}_"
		}

		this.content = jsonionParsables.parseString()
	}

	render() {
		return (
			<i>{this.content}</i>
		)
	}
}

class OrderedList extends React.Component {
	constructor(props) {
		super(props);

		this.ComponentFromString = {
			OrderedList: {
				OrderedListItem: [
					/^/, "- ${content}", /$/
				]
			}
		};

		this.content = jsonionParsables.parseString(props.children);
	}

	render() {
		return (
			<ul {...this.props}>
				{this.props.children.map((child, idx) => {
					return (
						<OrderedListItem key={idx} {...this.props.className} {...this.props.style}>{this.content}</OrderedListItem>
					)
				})}
			</ul>
		);
	}
}
	
const OrderedListItem = ({content, className, style}) => <li {...className} {...style}>{content}</li>