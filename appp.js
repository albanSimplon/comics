// <!-- <div class="container">  tableau a mettre dans le html
// <table class="table table-stripped">
//   <thead>
//       <tr>
//           <th>Avatar</th>
//           <th>Name</th>
//           <th>Espece</th>
//       </tr>
//   </thead>
// <tbody id="data">
// </tbody>
// </table>
// </div> -->


// fetch('http://dummy.restapiexample.com/api/v1/employees').then(
//     response=>{
//         response.json().then(
//             data=>{
                
//                 if(data.length > 0){
//                     var info = "";

//                     data.forEach((u)=>{
//                         info +="<tr>";
//                         info +="<td>"+u.id+"</td>";
//                         info +="<td>"+u.employee_name+"</td>";
//                         info +="<td>"+u.employee_salary+"</td></tr>";
//                         console.log(u);
//                     })

//                     document.getElementById('data').innerHTML = info;

// }})});

// fetch('https://rickandmortyapi.com/api/character/').then(
//     response=>{
//         response.json().then(
//             data=>{

//                 if(data.results.length > 0){
//                     let info = "";

//                     data.results.forEach((u)=>{
//                         info +="<tr>";
//                         info +="<td>"+"<img src='"+u.image+"'>"+"</td>";
//                         info +="<td>"+u.name+"</td>";
//                         info +="<td>"+u.species+"</td></tr>";

//                     })
//                     document.getElementById('data').innerHTML = info;

// }})});

const tab = [];  
for(let page = 1; page <= 25; page++)
{

const url = 'https://rickandmortyapi.com/api/character/?page=';

fetch(url+page).then(
    response=>{
        response.json().then(
            data=>{
                tab.push(...data.results);
                    console.log(tab);
                if(data.results.length > 0){
                    let info = "";
                    
                    tab.forEach((u)=>{
                        info +='<div class="card border-primary col-md-3 mt-1" style="width: 18rem;">';
                        info +='<img src="'+u.image+'" class="card-img-top" alt="'+u.name+'">';
                        info +='<div class="card-body">';
                        info +='<h5 class="card-title">'+u.id+'</h5>'
                        info +='<p class="card-text">Espèce: '+u.species+'<br>Genre: '+u.gender+'<br>Planète d\'origine: '+u.origin.name+'<br>Dernière localisation: '+u.location.name+'<br>Nombre d\'épisode: '+u.episode.length+'</p>';
                        info +='</div></div>';

                    })
                    document.getElementById('data').innerHTML = info;
                    
}})});
}


// fetch('https://rickandmortyapi.com/api/character/?page='+page+'').then(
//     response=>{
//         response.json().then(
//             data=>{
//                 console.log(data.info.next);
//                 while (page < 25){
//                 page++
//                 console.log(page);
//                 }

//             })})

