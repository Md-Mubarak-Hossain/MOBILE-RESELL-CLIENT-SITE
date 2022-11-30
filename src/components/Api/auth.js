
export const setAuthToken = (user) => {
    const currentUser = {
        email: user.email
    }

    fetch('https://mobile-server.vercel.app/jwt/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            localStorage.setItem('mobileToken', data.token);

        })
        .catch(err => console.error(err))
}
