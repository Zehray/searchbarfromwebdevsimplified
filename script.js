const  userCardTemplate = document.querySelector("[data-user-template]")
const  userCardContainer = document.querySelector("[data-user-cards-container]")
const  searchInput = document.querySelector("[data-search]")

searchInput.addEventListener("input") //this is going to run any time that we change anything

fetch("https://jsonplaceholder.typicode.com/users") 
.then(res => res.json()) //it's going to give us a response and we want to convert that res to json
.then(data => {
    data.forEach(user => {   
    const card = userCardTemplate.content.cloneNode(true).children[0] //this is(const card = userCardTemplate.content) doing is saying get the content inside our template which is all this information.
                                                    //and by saying cloneNode(true) we're saying clone this content as wall as all the content inside of it.
                                                                      //so it gets everything inside of this card.
                                                                      //(.children[0]) is going to get us the first child which is that card
    const header = card.querySelector("[data-header]")
    const body = card.querySelector("[data-body]")
    header.textContent = user.name
    body.textContent = user.email
    userCardContainer.append(card)
   })
}) //and we want to change that as well to get our data.
/*
Next thing we want to do with this data is to display it on the page. And 
to do that we're going to be using a HTML template
*/

/**
 We want to get the header set it to something 
 and we want to get the body from our card. 
 The easiest way for us to do that is go back into our index.html 
 and we're just going to add some attributes.
 */

 /*
 We want to get the header set it to something 
 and we want to get the body from our card. 
 The easiest way for us to do that is go back into 
 our index.html and we're just going to add 
 some attributes.
(data-header and data-body)

const header = card.querySelector("[data-header]")
const body = card.querySelector("[data-body]")
header.textContent = user.name
body.textContent = user.email
so now we're getting both the body and the header section and 
we can add the content into those different sections.
 */

/*
Now I've actually populated that HTML all i need to do is 
add it to this user card section.
(data-user-cards-container)  */

/*
next step is going to be dealing with input. 
When we type in something we want to filter our list.
we're saying data-search in input element.
*/