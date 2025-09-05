<!-- `````````````````````````````````````````````````` -->

LifeCycle of class component.
[parent constructor]->[Parent render]->[Parent componentdidMount]

if parent component inside another class component.
[parent constructor]->[Parent render]->[child constructor]->[child render]->[child componentdidmount]->[Parent componentdidMount]

*componentDidMount use for fetch api.like we use useEffect in fn component.

componentDidUpdate- it's call when state or props change.
componentDidUnMount - it's call when component is removed from dom.like i am in about page and then go to the contact page.

``````````````````````````````````````````````````
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
``````````````````````````````````````````````````
