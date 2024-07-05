import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
function App() {
	return (
		<div>
			<Header />
			{notes.map((prop) => (
				<Note key={prop.key} title={prop.title} content={prop.content} />
			))}
			<Footer />
		</div>
	);
}

export default App;
