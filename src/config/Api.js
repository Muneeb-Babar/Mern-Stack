


export async function getAllProducts() {
    const res = await fetch(`https://node-js-azure-nine.vercel.app/ads`)
    const result = await res.json()
    return result
}

export async function getSingleProduct(adId) {
    const res = await fetch(`https://node-js-azure-nine.vercel.app/ads/${adId}`)
    const result = await res.json()
    return result
}



export async function setSignUp({ email, password, fullname }) {
    try {
        const res = await fetch('https://node-js-azure-nine.vercel.app/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                fullname
            })
        });

        if (!res.ok) {
            throw new Error(`Failed to sign up: ${res.statusText}`);
        }

        const result = await res.json();
        return result;
    } catch (error) {
        // Handle any errors, you can log them or throw them further
        console.error("Error during sign-up:", error);
        throw error; // Rethrow the error for the caller to handle
    }
}
export async function setLogin({email,password}){
    const res=await fetch('https://node-js-azure-nine.vercel.app/user/login',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        email,
        password
    })
})
const result = await res.json()
    return result
}

