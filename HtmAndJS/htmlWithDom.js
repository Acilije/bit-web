// var second = document.querySelectorAll('ul')[1];
// second.className = 'class';
// var third = document.getElementsByTagName('ul')[2];
// third.className = 'class';

// var lists = document.getElementsByTagName('li');
// lists.className = 'classForLi';
// for (var i = 0; i < lists.length; i++) {
//     lists[i].className = 'classForLi';
// }

// prvi nacin

// function last() {
//         var find = document.getElementsByTagName('ul')[2];
//       var findLi  = find.getElementsByTagName('li');
//       for (var i = 0; i < findLi.length; i++){
//           findLi[i].className = 'last';
//       }
// }
// last();

// drugi nacin

// function last() {
//     var find = document.querySelectorAll('ul:nth-child(3) li');

//     for (var i = 0; i < find.length; i++) {
//         find[i].className = 'last';
//     }
// }
// last();

function traversing() {
    var nesto = document.getElementsByClassName('active')[0];
    nesto.className = '';
    nesto.parentNode.parentNode.previousElementSibling.firstElementChild.firstElementChild.className = 'active';
   
}
traversing();