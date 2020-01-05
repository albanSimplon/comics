const tab = []; 

const recherche = async function (personnage) {
    try {
        const response = await fetch('https://www.superheroapi.com/api.php/10157823447012103/search/'+ personnage);
        
        if (response.ok) {
            const jsonData = await response.json();
            console.log(jsonData);
            if (jsonData.response === 'success' && jsonData.results.length > 0 ) {
                tab.push(...jsonData.results);
                let info = "";
                tab.forEach((u)=>{
                    
                    info += '<div class="container"><div class="row">';
                    info += '<div class="col-md-6"><img class="img-fluid" src="'+u.image.url+'" alt="'+u.name+'"></div>';
                    info += '<div class="col-md-6"><h1 class="text-center">'+u.name+'</h1>';
                    info += '<h3 class="text-center">'+u.biography.alignment+'</h3>';
                    
                    for (let [key, value] of Object.entries(u.biography)) {
                        if (key === "full-name"){
                        info += '<p>'+(`${key}: ${value}`)+'</p>';
                        }
                     }
                    for (let [key, value] of Object.entries(u.appearance)) {
                        info += '<p>'+(`${key}: ${value}`)+'</p>';
                     }
                     info += '</div>'

                    info += '</div></div>';





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

recherche('superman');

