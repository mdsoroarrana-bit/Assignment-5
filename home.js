// const loadLessons = () => {
//     fetch("https://openapi.programming-hero.com/api/levels/all")
//     .then((res) => res.json())
//     .then((json) => displayLesson(json.data));
// }
// const loadLevelWord = (id) => {
//     const url = (`https://openapi.programming-hero.com/api/level/${id}`);
//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => displayLeveWord(data.data))

// }
// const displayLeveWord = (words) => {
//     // console.log(words);
//     const wordContainer = document.getElementById("word-container");
//     wordContainer.innerHTML = "";

//     if(words.length == 0) {
//         wordContainer.innerHTML = `
//         <div class="text-center col-span-full space-y-4 font-bangla">
//         <div class="text-9xl text-gray-400">
//          <i class="fa-solid fa-triangle-exclamation"></i>
//         </div>
//          <p class="text-xl font-medium  text-[#79716B]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
//          <h3 class="text-3xl font-semibold">নেক্সট Lesson এ যান</h3>

//         </div>
//          `;
//         return;
//     }

//    words.forEach(word => {
//     const btnsection = document.createElement("div");
//     btnsection.innerHTML = `
//         <div class="bg-white rounded-xl shadow-sm text-center px-5 py-14 space-y-4">
//             <h3 class="font-bold text-2xl">${word.word}</h3>
//             <p class="font-semibold">Meaning / pronounciation</p>
//             <div class="font-bangla">"${word.meaning} / ${word.pronunciation}"</div>

//             <div class=" flex justify-between ">
//                 <div class="btn btn-outline btn-info">
//                 <i class="fa-solid fa-circle-info"></i>
//                 </div>

//                 <div class="btn btn-outline btn-info">
//                 <i class="fa-solid fa-volume-high"></i>
//                 </div>
//             </div>
//         </div>
//         `;
//         wordContainer.append(btnsection);
//    })
        
    
// }

// const displayLesson = (lessons) => {
//   // 1.
//   const levelContainer = document.getElementById("level-container");
//   levelContainer.innerHTML = "";
//     2.
//   for(let lesson of lessons){
//     // console.log(lesson);
//     // 3. 
//     const btnDiv = document.createElement("div");
//     btnDiv.innerHTML = `
//                 <button onclick="loadLevelWord(${lesson.level_no})"  href="" class="btn btn-soft btn-primary gap-5">
//                 <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no} </button>
//     `;
//     levelContainer.append(btnDiv);
//   }

     

// }
// loadLessons()


const loadLessons = () => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((json) => displayLesson(json.data));
}

const loadLevelWord = async(id) => {
const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
const res = await fetch(url);
const detils = await res.json();
displayDetils(detils.data);
}
 
const displayDetils = (word) => {
console.log(word);
const  box = document.getElementById("details-conteiner");
box.innerHTML = `
                <div class="m-4">
                    <h3 class="font-bold">Fix broken image uploads</h3>
                    <div class="flex gap-2">
                        <p class="btn btn-active btn-accent rounded-full text-white" >open</p>
                        <p>. Opened by Fahim Ahmed</p>
                        <p>. 22/02/2026</p>
                    </div>
                    <div class="p-2">
                        <button class="btn bg-red-200 text-red-600 rounded-2xl">BUG</button>
                        <button class="btn bg-yellow-100 text-yellow-600 rounded-2xl">help wanted</button>
                    </div>
                    <p class="text-[#64748B]">The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.</p>
                    <div class=" h-[70px] bg-gray-200 flex gap-30  pl-2 mt-2">
                        <h4 class="text-[#64748B] ">Assignee: <br> <span class="font-bold">${word.assignee}</span></h4>
                        <p class="text-black ">Priority: <br> <span class="btn btn-error rounded-full">${word.priority}</span></p>
                    </div>
                </div>
`;
   document.getElementById("my_modal_5").showModal();
}


const displayLesson = (issues) => {
  // 1.
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";
    2.
  for(let issue of issues){
    // console.log(issue);
    // 3. 
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
             <div onclick="my_modal_5.showModal()" class="w-[250px] h-full bg-gray-200 rounded-2xl p-4">
               <div class="pl-4 flex justify-between">
                <div>${issue.status ==  true ? `<i class="fa-regular fa-circle"></i> ` : `<i class="fa-regular fa-circle-check"></i>`}
                    
                    
                </div>
                <p class="btn  rounded-full bg-amber-100 text-amber-600" >${issue.priority}</p>
              </div>
          <div>
            <h2 class="font-medium p-3">${issue.title}</h2>
            <p class="text-[#64748B] p-3">${issue.description}</p>
           </div>
           <div class="p-2">
            <button onclick="loadLevelWord(${issue.id})" class="btn bg-red-200 text-red-600 rounded-2xl">BUG</button>
            <button class="btn bg-yellow-100 text-yellow-600 rounded-2xl">help wanted</button>
           </div>
           <hr>
           <div class="m-2 text-[#64748B]">
            <p class="pt-2 ">#1by john_doe</p>
            <p>1/15/2024</p>
           </div>
         </div>
    `;
    levelContainer.append(btnDiv);
  }

     

}







loadLessons()