

const keys = document.querySelectorAll('.key');    // divs with they keys
const audioList = document.querySelectorAll('audio');  //audio elements of the sounds

const audioListArray = [...audioList];  //using spread operator (ES6) to transform into array so i can map the datakeys out.
const dataKeyList = audioListArray.map((element) => element.getAttribute("data-key"));


document.addEventListener('keydown', (event) => {
  const pressedKeyCode = event.key.toUpperCase().charCodeAt(0);
    //the key is force converted to uppercase to match the codes, then converted to code
  const indexToPlay = dataKeyList.indexOf(pressedKeyCode.toString());
  //we find the pressedKeyCode (converted to string) on the list of datakeys and we assign it to indexToPlay

  keys[indexToPlay].classList.add("playing");
  setTimeout(function(){keys[indexToPlay].classList.remove("playing");; }, 70);
  //add class playing and remove it after short period of time using timeout

  audioList[indexToPlay].load();
  audioList[indexToPlay].play();


});
