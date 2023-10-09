let texto = document.getElementById('testimonio');

// MÉTODO PARA OBTENER POSTS
async function getPosts(id) {

    return await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((resp) => {
            return resp.json();
        })
        .then((post) => {
            for (let i = 0; i < 4; i++) {
                return post;
            }
        }).catch((error) => {
            console.log('ERROR: ', error);
        });
}

// MÉTODO PARA OBTENER USUARIOS
async function getUsers() {
    testimonios = [
        "Testimonio 1 - María S. - ¡Deli Gourmet es increíble! Cada comida que he pedido ha sido una delicia absoluta. La calidad de los ingredientes y los sabores auténticos realmente se destacan. Además, la promoción de la camisa para clientes especiales es un toque genial. ¡Definitivamente seguiré siendo cliente!",
        
        "Testimonio 2 - Javier M. - Como persona ocupada, agradezco mucho la conveniencia de Deli Gourmet. Los desayunos son mi parte favorita del día y las pupusas son simplemente las mejores que he probado. La camisa de cliente especial es un gran incentivo para volver una y otra vez.",
        
        "Testimonio 3 - Ana G. - No puedo dejar de elogiar a Deli Gourmet. Sus platos de almuerzo son una verdadera delicia. La carne asada es tierna y sabrosa, y las sopas son reconfortantes. Además, su atención al cliente es excepcional. ¡Recomendaría Deli Gourmet a todos!",
        
        "Testimonio 4 - Carlos R. - Me encanta la idea de llevar comida casera de calidad a la oficina, y Deli Gourmet lo hace de manera impecable. El pescado frito es mi elección habitual y nunca me decepciona. La promoción de la camisa es un toque único que muestra que realmente valoran a sus clientes."
    ]
    
    await fetch('https://jsonplaceholder.typicode.com/users')
        .then((resp) => {
            return resp.json();
        })
        .then((user) => {

            for (let i = 0; i < 4; i++) {
                const usuario = user[i];
                getPosts(usuario.id).then(resp => {
                    usuario.posts = resp;
                    user[i] = usuario;
                    let string = '';

                    if (user[i].id === 1) {
                        string += `
                            <div class="carousel-item active">
                                <img class="d-block mx-auto" src="images/person_${i + 1}.jpg" alt=""> 
                        `;
                        
                    } else {
                        string += `
                            <div class="carousel-item">
                                <img class="d-block mx-auto" src="images/person_${i + 1}.jpg" alt=""> 
                        `;
                    }

                    string += ` <p class="text-center sliderText">${testimonios[i]}</p>`;
                    string += `<p class="text-center"><b>${usuario.name}</b></p>`;
                    string += `</div>`;

                    texto.innerHTML += string;

                    ;
                });
            }
        }).catch((error) => {
            console.log('ERROR: ', error);
        });
}

getUsers();