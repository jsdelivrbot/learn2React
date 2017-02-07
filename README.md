## Learn2React

This repo is the product of following the Modern Redux and React course on udemy. The course can be found at

https://www.udemy.com/react-redux/learn/v4/content

It is a simple youtube clone that uses the YouTube API to populate the page with
data. To use it, simply clone this repository and cd into it's directory.
Then do a

`npm install`

followed by a

`npm start`

The app will now be viewable at localhost:8080

<h1> Notes </h1>

This class layout below

	class SearchBar extends React.Component {
	  render() {
	    return <input onChange={this.onInputChange} />;
	  }

	  onInputChange(event) {
	    console.log("event " + event.target.value);
	  }
	};

Can be simplified too

	class SearchBar extends React.Component {
	  render() {
	    return <input onChange={ event => console.log("event " + event.target.value) } />;
		}
	};

---

- The constructor function is the first and only function called automatically whenever a new instance of the class is created

---

Paramaters can be handled as such

	  YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
	      this.setState({ videos:  videos });
	  });

Can equal

	  YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
	      this.setState({ videos });
	  });

---

Interpolation can be done with the following method

	`This is a string:   $(thisIsAVariable)`

NOTE: Those are not single quotes, they are backticks.

---

Using the npm module lodash gives you acces to debounce. The following debouce term was used to tell the app to wait 300ms before running. That way the video search wouldn't refresh upon each individual character that the user would input and would instead wait for them to finish typing

	import _ from 'lodash';

	...

	const videoSearch =_.debounce((term) => { this.videoSearch(term) }, 300);

---

In ES6, a function can accept a parameter and assign a value to it if it is undefined at the time

	function(state = null, action)

