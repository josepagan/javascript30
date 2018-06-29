

const keys = document.querySelectorAll('.key');    // divs with they keys
const audioList = document.querySelectorAll('audio');  //audio elements of the sounds

const audioListArray = [...audioList];  //using spread operator (ES6) to transform into array so i can map the datakeys out.
const dataKeyList = audioListArray.map((element) => element.getAttribute("data-key")); //picks the data-key atributes and maps it into an array to be served as a database


document.addEventListener('keydown', (event) => {
  //the key is force converted to uppercase to match the codes, then converted to code
  const pressedKeyCode = event.key.toUpperCase().charCodeAt(0);
  //we find the pressedKeyCode (converted to string) on the list of datakeys and we assign it to indexToPlay
  const indexToPlay = dataKeyList.indexOf(pressedKeyCode.toString());

  keys[indexToPlay].classList.add("playing");

  //add class playing and remove it after short period of time using timeout
  //I must admit using a transitionout event is much better so I commenting out the cheap setTimeout.
  //I end transitionend listener at the end of the script.


  // setTimeout(function(){keys[indexToPlay].classList.remove("playing"); }, 70);

  audioList[indexToPlay].load();
  audioList[indexToPlay].play();
});

//adding a transitionend event to each of the keys.
//I get 5 events triggered by key I dont bother filter them out.
//I use callback function classlist remove.
keys.forEach(key => key.addEventListener('transitionend',()=>key.classList.remove('playing')));
