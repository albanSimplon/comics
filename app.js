// const tab = []; 
// let i = 0;
// let hu = "";



// const recherche = async function (personnage) {
//     try {
//         const response = await fetch('https://www.superheroapi.com/api.php/10157823447012103/search/'+ personnage);
        
//         if (response.ok) {
//             const jsonData = await response.json();
            
//             if (jsonData.response === 'success' && jsonData.results.length > 0 ) {
//                 tab.push(...jsonData.results);
//                 let info = "";
//                 console.log(jsonData);
                
//                 tab.forEach((u)=>{
                    
//                     info += '<div class="container"><div class="row">';
//                     info += '<div class="col-md-6"><img class="img-fluid" src="'+u.image.url+'" alt="'+u.name+'"></div>';
//                     info += '<div class="col-md-6"><h1 class="text-center">'+u.name+'</h1>';

//                     if (u.biography.alignment != "-") {
//                         if (u.biography.alignment === "good") {
//                             info += '<h3 class="text-center text-success">'+u.biography.alignment+'</h3>';
//                         } else {
//                             info += '<h3 class="text-center text-danger">'+u.biography.alignment+'</h3>';
//                         }
                        
//                     }
               
                    
//                     for (let [key, value] of Object.entries(u.biography)) {
//                         if (key === "full-name"){
//                         info += '<p>'+(`${key}: ${value}`)+'</p>';
//                         }
//                      }
//                     for (let [key, value] of Object.entries(u.appearance)) {
//                         info += '<p>'+(`${key}: ${value}`)+'</p>';
//                      }

//                      info += "<canvas id="+u.id+"></canvas>";
                
                     
                   
//                      info += '</div>';

//                     info += '</div></div>';


                   
                    
//                      console.log(u);
                     
                     
//                 })
//                 document.getElementById('data').innerHTML = info;
                
                
                
                
//             } else {
//                 console.log('je n\'ai pas trouvé de personnage');
//             }
//         } else {
//             console.error('server response : ' + response.status);
//         }
//     } catch (error) {
//         console.error(error);
//     }
    
// }

// function getHU()
// {
//   hu = document.getElementById("hu").value; 
 
 
 
// }
// recherche('superman').then( function(){
  
//         for (i = 0; i < tab.length; i++)
//         {
//             console.log(tab[i].powerstats);
//             new Chart(document.getElementById(tab[i].id), {
//     type: 'bar',
//     data: {
//       labels: Object.keys(tab[i].powerstats),
//       datasets: [
//         {
//           label: tab[i].name+" power stats",
//           backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd" ],
//           data: Object.values(tab[i].powerstats)
          
//         }
//       ]
      
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }

// });
            
//         }
        
    
// });




const getPerso = async function () {
    try {

        const persoName = document.getElementById("personnage").value;
        const persoInfo = [];

        const response = await fetch('https://www.superheroapi.com/api.php/10157823447012103/search/' + persoName);
        if (response.ok) {
            const jsonData = await response.json();
            if (jsonData.response === 'success' && jsonData.results.length > 0) {
                persoInfo.push(...jsonData.results);
                let info = "";
                console.log(jsonData);

                persoInfo.forEach((u) => {

                    info += '<div class="container"><div class="row">';
                    info += '<div class="col-md-6"><img class="img-fluid" src="' + u.image.url + '" alt="' + u.name + '"></div>';
                    info += '<div class="col-md-6"><h1 class="text-center">' + u.name + '</h1>';

                    if (u.biography.alignment != "-") {
                        if (u.biography.alignment === "good") {
                            info += '<h3 class="text-center text-success">' + u.biography.alignment + '</h3>';
                        } else {
                            info += '<h3 class="text-center text-danger">' + u.biography.alignment + '</h3>';
                        }

                    }


                    for (let [key, value] of Object.entries(u.biography)) {
                        if (key === "full-name") {
                            info += '<p>' + (`${key}: ${value}`) + '</p>';
                        }
                    }
                    for (let [key, value] of Object.entries(u.appearance)) {
                        info += '<p>' + (`${key}: ${value}`) + '</p>';
                    }

                    info += "<canvas id=" + u.id + "></canvas>";



                    info += '</div>';

                    info += '</div></div>';




                    console.log(u);


                })
                document.getElementById('data').innerHTML = info;



            } else {
                document.getElementById('data').innerHTML = "<p>Désolé je n'ai pas trouvé de resultat :(<p>";
            }
        }
    } catch (e) {
        console.log('Il y a une erreur', e)
    }

}


document.getElementById('personnage').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        getPerso();
    }
});