//page 87
//https://drive.google.com/drive/folders/1B-eWVHXw6roKhQWpRkiNNwHtb-66Gzif

//closure - they all work btw

//attempt 1 

// const bark = dog => {
//   const say = `${dog} barked!`; 
//   (() => console.log(say)) ()
// }

// bark(`roger`)



//attempt 2

// const prepareBark = dog => {
//   const say = `${dog} barked!`
//   return () => console.log(say)
// }

// const bark = prepareBark(`roger`)

// bark()


//attempt 3

const prepareBark = dog => {
  const say = `${dog} barked!`
  return () => {
    console.log(say)
  }
}

const rogerBark = prepareBark(`Roger`)
const sydBark = prepareBark(`Syd`)

rogerBark()
sydBark()
