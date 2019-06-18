// https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data

//GOAL - autopopulate the author from API using fetch GET

//1 - set the URL and the list


const ul = document.getElementById('authors')

const url = 'https://randomuser.me/api/?results=10' // Get 10 random users'

//2 - fetch the url TEST
//uncomment to work it
// fetch(url)
//   .then(function(data) {
//     //where you get the data to modify
//     console.log('butts')

//   })
//   .catch(function(error) {
//     //if error
//     console.log('errors')
//   })

// 3. fetch the url - respond with JSON - STEP 1
// fetch(url)
//  .then((resp) => resp.json()) // Transform the data into json
//  .then(function(data) {
//    // Create and append the li's to the ul - We'll edit this in step 5
//  })


// 4. creating helper functions to make the code easier down the line


function createNode(element) {
  return document.createElement(element)
}

function append(parent, el) {
  return parent.appendChild(el)
}



// 5. append the elements

fetch(url)
 .then((resp) => resp.json()) // Transform the data into json

 .then(function(data) {
   // Create and append the li's to the ul - We'll edit this here 

    let authors = data.results // get results

    return authors.map(function(author) {
      let li = createNode('li')
      let img = createNode('img')
      let span = createNode('span')

      img.src = author.picture.medium

      span.innerHTML = `${author.name.first} ${author.name.last}`

      append(li, img)
      append(li, span)
      append(ul, li)
    })
  })

  .catch(function(error) {
    console.log(error)
  })

// ----------
// Handling more requests like POST

// const urlPOST = 'https://randomuser.me/api'

// // The data we're going to send
// let data {
//   name: 'Sara'
// }

// //The paras we're going to pass to fetch

// let fetchData = {
//   method: 'POST',
//   body: data,
//   headers: new Headers()
// }

// fetch(url, fetchData)
//   .then(function() {
    
//   })
