


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



const displayDetils = (issue) => {
const  box = document.getElementById("details-conteiner");
box.innerHTML = `
     <div class="m-4">
        <h3 class="font-bold">${issue.title}</h3>
            <div class="flex gap-2">
              <p class="btn btn-active btn-accent rounded-full text-white" >${issue.status}</p>
              <p>. Opened by Fahim Ahmed</p>
              <p>. 22/02/2026</p>
            </div>
            <div class="p-2">
              <button class="btn bg-red-200 text-red-600 rounded-2xl">BUG</button>
              <button class="btn bg-yellow-100 text-yellow-600 rounded-2xl">help wanted</button>
            </div>
            <p class="text-[#64748B]">${issue.description}</p>
            <div class=" h-[70px] bg-gray-200 flex gap-30  pl-2 mt-2">
            <h4 class="text-[#64748B] ">Assignee: <br> <span class="font-bold">${issue.assignee}</span></h4>
            <p class="text-black ">Priority: <br> <span class="btn btn-error rounded-full">${issue.priority}</span></p>
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