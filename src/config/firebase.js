
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail} from "firebase/auth";
import { getFirestore,collection, getDocs,doc, getDoc,addDoc,setDoc,where, query } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL }from "firebase/storage";

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
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();

export async function LoginSetup({users,password}){
    // const auth = getAuth();
    
try{
    const res=await signInWithEmailAndPassword(auth, users, password)
    console.log(res)
    return res
}
catch(e){
    alert(e.message)
}
}

export async function SignSetup({email,password,name}){
    try{
        const res=await createUserWithEmailAndPassword(auth, email, password,name)
        
        await setDoc(doc(db, "users", res.user.uid), {
            name ,
            email
        });
        return res
    }
    catch(e){
        alert(e.message)
    }
}
export async function getAllData(){
    const querySnapshot = await getDocs(collection(db, "ads"));
    const product=[]
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    product.push({ id: doc.id, ...doc.data() })

});
return product
}

export async function getSingleAds(adId) {
    const docRef = doc(db, "ads", adId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const ad = docSnap.data()
        return ad
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}
export async function postToDb(ad) {
    try {
    
    const storageRef = ref(storage, `ads/${ad.image.name}`);
      // Upload image to Firebase Storage
    await uploadBytes(storageRef, ad.image);
    
      // Get the download URL of the uploaded image
    const imageUrl = await getDownloadURL(storageRef);
    ad.image = imageUrl;

      // Add the ad object to Firestore
    await addDoc(collection(db, "ads"), ad);

    return { success: true, message: 'Data added successfully!' };
    } catch (error) {
    console.error('Error posting to database:', error.message);
    }
    // const imagesUrls = [];
    // try {
    //   await Promise.all(ad.allImages.map(async (image) => {
    //     const storageRef = ref(storage, `${image.name}`);
    //     console.log('Storage Reference:', storageRef); 
    //     await uploadBytes(storageRef, image);
    //     console.log('Image uploaded successfully:', image.name);
    //     const url = await getDownloadURL(storageRef);
    //     console.log('Download URL:', url); 
    //     imagesUrls.push(url);
    //   }));
    
    //   ad.images = imagesUrls;
    
    //   console.log(ad.url);
    //   const docRef = await addDoc(collection(db, "adds"), {
    //     title: ad.title,
    //     price: ad.price, 
    //     description: ad.description,
    //     images: ad.images,
    //     brand: ad.brand, 
    //     location: ad.location
    //   });
    //   alert('Post Add Successful');
    // } catch(error) {
    //   console.error('Error saving images URL', error.message);
    // }

}

export async function getMyAdsFromDb(uid) {
    const adsRef = collection(db, "ads")
    const querySnapshot = await getDocs(query(adsRef, where("uid", "==", uid)))
    const ads = []
    querySnapshot.forEach((doc) => {
        const ad = doc.data()
        ad.id = doc.id
        ads.push(ad)
    });

    return ads
}
export async function checkPassword(email){
    const res=await sendPasswordResetEmail(auth, email)
    console.log(res)

}
export{
    auth
}