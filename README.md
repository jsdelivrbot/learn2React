## Learn2Redux

This repo is the product of following the Modern Redux and React course on udemy. The course can be found at

https://www.udemy.com/react-redux/learn/v4/content

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
