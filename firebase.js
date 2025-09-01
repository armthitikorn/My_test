// firebase.js

// นำเข้า Firebase SDK จาก Google CDN โดยตรง
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
        import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
        import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
        import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

// ข้อมูลการกำหนดค่าโปรเจกต์ Firebase ของคุณ
const firebaseConfig = {
            apiKey: "AIzaSyA4OrZERUoxWPiShCEWVvz1MK9cYGO3_K8",
            authDomain: "new-record-3ccd6.firebaseapp.com",
            projectId: "new-record-3ccd6",
            // แก้ไขตรงนี้ครับ ให้ใช้ชื่อ Bucket ที่ถูกต้องจากคำสั่ง gsutil ls
            storageBucket: "new-record-3ccd6.firebasestorage.app",
            messagingSenderId: "1065863160189",
            appId: "1:1065863160189:web:853d594b8d17adff126c14",
            measurementId: "G-ZY9B2K18X3"
};

// เริ่มต้น Firebase
const app = initializeApp(firebaseConfig);

// เริ่มต้นบริการต่างๆ และ export เพื่อนำไปใช้ในไฟล์อื่น
export const storage = getStorage(app);

export const db = getFirestore(app);


