import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBLqwOxwbWF89ZVE-Hx6Oauw9eIuy8Syp0",
    authDomain: "test-project-67367.firebaseapp.com",
    projectId: "test-project-67367",
    storageBucket: "test-project-67367.appspot.com",
    messagingSenderId: "986217264801",
    appId: "1:986217264801:web:ed5c55b76ba4fe71a322e0"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


export async function postAd(userToken, postData) {

    try {
        const storageRef = ref(storage, postData.image.name);
        await uploadBytes(storageRef, postData.image);

        // Get the download URL of the uploaded image
        const imageUrl = await getDownloadURL(storageRef);
        postData.image = imageUrl

        const response = await fetch('https://node-js-azure-nine.vercel.app/ads/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            },
            body: JSON.stringify({
                title: postData.title,
                price: postData.price,
                description: postData.description,
                image: postData.image,
                location: postData.location,
                brand: postData.brand
            })
        });
        const result = await response.json();
        return result

    } catch (error) {
        alert('Something went wrong',error);
    }
}