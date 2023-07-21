const pages = {}

pages.base_url = "http://localhost/RegisterLoginAPI/"

pages.load_page = (page)=> {
    eval("pages." + page + "_page();")
}


pages.get_api = (url) => {
    // fetch(url)
    // .then((response) => response.json())
    // .then((posts) => {
    //   postsArray = posts;
    // })
    // .catch((error) => console.log(error))
}

pages.print = (message) => {
    console.log(message)
}

pages.index_page = () =>{
    pages.print("hello index")
    document.getElementById("signup_form").addEventListener("submit", createUser);
    const index_url = pages.base_url + "index.php"
    function createUser(e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const useremail = document.getElementById("useremail").value;
        const userpassword = document.getElementById("userpassword").value;
        const userpasswordcon = document.getElementById("userpasswordcon").value;
        if (userpassword !== userpasswordcon) {
          alert("Passwords do not match!");
        } else {
            const newUser = {
                username: username,
                useremail: useremail,
                userpassword: userpassword,
                };
        
            fetch(index_url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            })
                
                .then(response => response.json()) // Parse the response as JSON
                .then(response => {
                    console.log(response)
                    if (response["success"]) {
                        window.location.href = "welcome.php";
                    } else {
                        console.log("response error");
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            }
        
    }

}

pages.login_page = () =>{
    pages.print("hello login")
}

