console.log("Javascript File Connected!");

//data is an array of objects which contain information about the candidates
const data =[
    {
        name:'Rohan Das',                
        age:18,
        city:'Kolkata',
        language:'Python',
        framework:'Django',
        image:"https://randomuser.me/api/portraits/med/men/72.jpg"
    },

    {
        name:'Rohan Das',
        age:18,
        city:'Kolkata',
        language:'Python',
        framework:'Django',
        image:"https://randomuser.me/api/portraits/med/men/72.jpg"
    },

    {
        name:'Shubham Sharma',
        age:18,
        city:'Banglore',
        language:'JavaScript',
        framework:'Angular',
        image:"https://randomuser.me/api/portraits/med/men/73.jpg"
    },

    {
        name:'Camella Cabello',
        age:20,
        city:'Kolkata',
        language:'Python',
        framework:'Django',
        image:"https://randomuser.me/api/portraits/med/women/72.jpg"
    },


    {
        name:'Shreya',
        age:25,
        city:'Mumbai',
        language:'Python',
        framework:'Flask',
        image:"https://randomuser.me/api/portraits/med/men/82.jpg"
    },

    {
        name:'Nameen',
        age:29,
        city:'Jharkhand',
        language:'Go',
        framework:'Go Framework',
        image:"https://randomuser.me/api/portraits/med/men/78.jpg"
    },
    

]


//CV Iterator
function cvIterator(profiles)
{
    let nextIndex=0;
    return{
        next: function(){
            return nextIndex<profiles.length ?
            {                                                                      
                value:profiles[nextIndex++],
                done:false
            }:
            {done:true}
        }
    };
}
const candidates=cvIterator(data);

nextCV();
//Button Listner for next button
const next=document.getElementById('next');
next.addEventListener('click',nextCV);


function nextCV(){
    const currentCandidate=candidates.next().value;

    let image=document.getElementById('image');
    let profile=document.getElementById('profile');

    if(currentCandidate!=undefined)
    {
    image.innerHTML=`<img src='${currentCandidate.image}'>`;
    profile.innerHTML=`<ul class="list-group">
    
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">Age: ${currentCandidate.age}</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework}</li>
  </ul>`
    }

    else{
        alert('End Of Candidate Applications!');
        window.location.reload();
    }

}