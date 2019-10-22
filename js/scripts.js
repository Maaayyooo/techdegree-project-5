function getInput() {
  let input = document.querySelector('#input');
  input = input.value.toLowerCase();
  let images = document.querySelectorAll('a');
  for(let i = 0; i < images.length; i ++) {
    const image = document.getElementsByTagName('img')[i];
    const link = document.getElementsByTagName('a')[i];
    const caption = image.getAttribute('alt').toLowerCase();
    const longCaption = link.getAttribute('data-title').toLowerCase();
    const match1 = input.includes(caption);
    const match2 = longCaption.includes(input);
    if (match1 === true) {
      image.style.display= "";
      link.style.display= "";
    } else if (match2 === true) {
      image.style.display= "";
      link.style.display= "";
    } else {
      image.style.display= "none";
      link.style.display= "none";
    }
  }
  }

document.getElementById("input").addEventListener('keyup', getInput);




// function getCaption() {
//   var images = document.getElementsByTagName('img');
//   console.log(images.length);
//
//   for (i=0; i<images.length; i+=1) {
//       var image = document.getElementsByTagName('img')[i];
//       var caption= image.getAttribute('alt').toLowerCase();
//       console.log(caption);
//       console.log(result);
//       var match = result.includes(caption);
//       if (match = true){
//         document.write('aye');
//           }
//
//         }
//       }
//
//
//
// getCaption();