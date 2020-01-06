const tab = []; 
let i = 0;

const recherche = async function (personnage) {
    try {
        const response = await fetch('https://www.superheroapi.com/api.php/10157823447012103/search/'+ personnage);
        
        if (response.ok) {
            const jsonData = await response.json();
            
            if (jsonData.response === 'success' && jsonData.results.length > 0 ) {
                tab.push(...jsonData.results);
                let info = "";
                console.log(jsonData);
                
                tab.forEach((u)=>{
                    
                    info += '<div class="container"><div class="row">';
                    info += '<div class="col-md-6"><img class="img-fluid" src="'+u.image.url+'" alt="'+u.name+'"></div>';
                    info += '<div class="col-md-6"><h1 class="text-center">'+u.name+'</h1>';
                    if (u.biography.alignment === "good") {
                        info += '<h3 class="text-center text-success">'+u.biography.alignment+'</h3>';
                    } else {
                        info += '<h3 class="text-center text-danger">'+u.biography.alignment+'</h3>';
                    }
                    
                    
                    for (let [key, value] of Object.entries(u.biography)) {
                        if (key === "full-name"){
                        info += '<p>'+(`${key}: ${value}`)+'</p>';
                        }
                     }
                    for (let [key, value] of Object.entries(u.appearance)) {
                        info += '<p>'+(`${key}: ${value}`)+'</p>';
                     }

                     info += "<canvas id="+u.id+"></canvas>";
                
                     
                   
                     info += '</div>';

                    info += '</div></div>';


                   
                    
                     console.log(u);
                     
                     
                })
                document.getElementById('data').innerHTML = info;
                
                
                
                
            } else {
                console.log('je n\'ai pas trouvé de personnage');
            }
        } else {
            console.error('server response : ' + response.status);
        }
    } catch (error) {
        console.error(error);
    }
    
}

recherche('batman').then( function(){
    if(document.body.contains(document.getElementById('69'))){
        alert('Element exists!');
        console.log(tab);
        for (i = 0; i < tab.length; i++)
        {
            console.log(tab[i].id);
            new Chart(document.getElementById(tab[i].id), {
    type: 'bar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});
            
        }
        
    } else{
        alert('Element does not exist!');
    }
});


// new Chart(document.getElementById("69"), {
//     type: 'bar',
//     data: {
//       labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
//       datasets: [
//         {
//           label: "Population (millions)",
//           backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
//           data: [2478,5267,734,784,433]
//         }
//       ]
//     },
//     options: {
//       legend: { display: false },
//       title: {
//         display: true,
//         text: 'Predicted world population (millions) in 2050'
//       }
//     }
// });



