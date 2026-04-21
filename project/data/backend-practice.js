async function getFetch () {
    try {
        const req = await fetch("https://supersimplebackend.dev/greeting", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }
        }) 
        if (req.status >= 400) {
            throw req;  // ← ini harus ada!
        }
        const response = await req.text()
        console.log(response)
        return req;
        
    } catch (error) {
        if (error.status >= 400) {
            console.log(await error.json())
        } else {
            console.log("network error. please try again later")
        }
    }
}
getFetch()

/*
async function getFetch () {
    try {
        const req = await fetch("https://amazon.com", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: 'Reza'
            })
        })
        const response = await req.text()
        console.log(response)
        return req;

    } catch (error) {
        console.log("permintaan anda di blokir")
    }
}
getFetch()

/*async function getFetch () {
    const req = await fetch("https://supersimplebackend.dev/greeting")
    const response = await req.text()
    console.log(response)
    return req;
}
getFetch()


/*function getFetch () {
    const req = fetch("https://supersimplebackend.dev/greeting")
    .then((response) => {
        return response.text();
    })
    .then((text) => {
        console.log(text)
    })
    return req;
}
getFetch()
/*
const xhr = new XMLHttpRequest();

xhr.addEventListener("load", () => {
  console.log(xhr.response);
});
xhr.open("GET", "https://supersimplebackend.dev/greeting");
xhr.send();
*/