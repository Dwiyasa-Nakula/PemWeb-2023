function getUsers() {
    ///JSON
    const apiurl = "https://ets-pemweb-23-pjqyzk5qxq-et.a.run.app/users";
    fetch(apiurl)
        .then((response) => {
            return response.json();
        })
        .then((data) => { 
            const users = data.users;

            for (let i = 0; i < 5; i++) {
                const user = users[i];
                const card = document.getElementById(`card${i + 1}`);

                // Update the card with user information
                card.innerHTML = `
                    <div class="card-body">
                        <div class="row no-gutters">
                            <div class="col mr-2 text-left" id="">
                                <h4 class="h4 font-weight-bold text-uppercase mb-1" id="name">${user.name}</h4>
                                <div class="text-bold text-gray-700" id="position">${user.position}</div>
                                <div class="text-gray-800" id="company">- ${user.company}</div>
                            </div>
                            <div class="row justify-content-center text-center gy-1">
                            <h6 class="col-4">Following</h6>
                            <h6 class="col-4">Folowers</h6>
                            </div>
                            <div class="row justify-content-center text-center">
                                <div class="col-4" id="following_count">${user.following_count}</div>
                                <div class="col-4" id="followers_count">${user.followers_count}</div>
                            </div>
                            <div class="gy-4">
                                <div><div class="bi bi-envelope-fill" id="email">  ${user.contact.email}</div></div>
                                <div><div class="bi bi-telephone-fill" id="phone">  ${user.contact.phone}</div></div>
                                <div><div class="bi bi-geo-alt-fill" id="address">  ${user.contact.address}</div></div>
                            </div>
                        </div>
                    </div>
                `;
            }
        })
        .catch(console.error);

  }
  getUsers();