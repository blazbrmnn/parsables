import React from 'react';
import jsonionParsables from './jsonion-parsables';

import Commonmark from './jsonion-commonmark'; 

/* ```md shopping-receipt-format-sample.md

# Bar Kaffe Lena
Ravenska cesta 2, 9231 Beltinci

⬡⬡⬡⬡⬡

**Recurring items**
- Kava 1€

**Receipts**
- (24.2.2022 14:53) Kava (ab93e4034c4f107220231ab5ae89c198) *Omg luštna kelnarca*


# Mercator
… Market Celovška 104, Ljubljana

⬡⬡⬡⬡⬡

**Receipts**
- (13.05.2019 12:14:50, 1079-3-71439) 5.-€
... NAPITEK [
  BIO RIž.KOK.B.G., OVSEN ISOLA BIO
]1L

*/

export class ShoppingList extends React.Component {
	constructor(props) {
		super(props);

		this.document = (typeof props.document !== 'undefined') ? props.document : "";
	}

	ShoppingListCommonMark () {

	}

	render() {
		return (<>See what happens</>); // jsonionParsables.parseDocument(this.document, this.ShoppingListCommonMark);
	}
}
