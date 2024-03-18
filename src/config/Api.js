// import { initializeApp } from "firebase/app";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


// // Initialize Firebase with your configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBLqwOxwbWF89ZVE-Hx6Oauw9eIuy8Syp0",
//     authDomain: "test-project-67367.firebaseapp.com",
//     projectId: "test-project-67367",
//     storageBucket: "test-project-67367.appspot.com",
//     messagingSenderId: "986217264801",
//     appId: "1:986217264801:web:ed5c55b76ba4fe71a322e0"
//     };

//     const app = initializeApp(firebaseConfig);
//     const storage = getStorage(app);

//     export async function postAd({ title, brand, description, location, price, token, file }) {
//         try {
//             // Upload image to Firebase Storage
//             const storageRef = ref(storage, file.name);
//             await uploadBytes(storageRef, file);
    
//             // Get the download URL of the uploaded image
//             const imageUrl = await getDownloadURL(storageRef);
    
//             // Prepare data to send to API
//             const adData = {
//                 title,
//                 brand,
//                 description,
//                 location,
//                 price,
//                 imageUrl, // Send the download URL of the image to your API
//                 token
//             };
    
//             // Send data to your API endpoint
//             const response = await fetch('https://your-api-endpoint.com/ads/post', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${token}`
//                 },
//                 body: JSON.stringify(adData)
//             });
    
//             if (response.ok) {
//                 const result = await response.json();
//                 return result;
//             } else {
//                 throw new Error('Failed to post ad');
//             }
//         } catch (error) {
//             throw new Error('An error occurred while posting ad');
//         }
//     }


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

// export async function postAd(userToken,postData){
//     const res=await fetch('https://node-js-azure-nine.vercel.app/ads/post',{
//     method:'POST',
//     headers:{
//         'Content-Type':'application/json',
//         'Authorization':`bearer ${userToken}`
//     },
//     body:JSON.stringify({
//                 title: postData.title,
//                 amount: postData.price,
//                 description: postData.description,
//                 location: postData.location
//     })
// })
// const result = await res.json()
//     return result
// }

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

