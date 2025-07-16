import "dotenv/config";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    addDoc,
    collection,
    getDocs,
    doc,
    getDoc,
    deleteDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, deleteObject } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const signup = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            email: user.email,
        });
        return user;
    } catch (error: any) {
        return { error: error?.message };
    }
};

export const signin = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;
        return user;
    } catch (error: any) {
        return { error: error?.message };
    }
};

export const signout = async () => {
    try {
        await signOut(auth);
        return true;
    } catch (error) {
        return false;
    }
};

export const addContact = async (
    name: string,
    email: string,
    phoneNumber: string,
    message: string
) => {
    try {
        await addDoc(collection(db, "contacts"), {
            name,
            email,
            phoneNumber,
            message,
        });

        return true;
    } catch (error: any) {
        return { error: error?.message };
    }
};

export const addSchedule = async (
    meeting_date: string | undefined,
    meeting_duration: string,
    meeting_time: string,
    email: string,
    project_timeframe: string,
    project_details: string
) => {
    try {
        await addDoc(collection(db, "schedules"), {
            email,
            meeting_date,
            meeting_duration,
            meeting_time,
            project_timeframe,
            project_details,
        });

        return true;
    } catch (error: any) {
        return { error: error?.message };
    }
};

export const getAllContacts = async () => {
    try {
        const data: MainContactType[] = [];
        const querySnapshot = await getDocs(collection(db, "contacts"));
        querySnapshot.forEach((doc) => {
            data.push({
                id: doc.id,
                email: doc.data()?.email,
                name: doc.data()?.name,
                message: doc.data()?.message,
                phoneNumber: doc.data()?.phoneNumber,
            });
        });
        return data;
    } catch (error: any) {
        return { error: error?.message };
    }
};

export const getAllSchedules = async () => {
    try {
        const data: MainScheduleType[] = [];
        const querySnapshot = await getDocs(collection(db, "schedules"));
        querySnapshot.forEach((doc) => {
            data.push({
                id: doc.id,
                email: doc.data()?.email,
                meeting_date: doc.data()?.meeting_date,
                meeting_duration: doc.data()?.meeting_duration,
                meeting_time: doc.data()?.meeting_duration,
                project_details: doc.data()?.project_details,
                project_timeframe: doc.data()?.project_timeframe,
            });
        });
        return data;
    } catch (error: any) {
        return { error: error?.message };
    }
};

export const getAllJobApplication = async () => {
    try {
        const data: MainJobType[] = [];
        const querySnapshot = await getDocs(collection(db, "jobs"));
        querySnapshot.forEach((doc) => {
            data.push({
                id: doc.id,
                email: doc.data()?.email,
                cvPath: doc.data()?.cvPath,
                name: doc.data()?.name,
                position: doc.data()?.position,
            });
        });
        return data;
    } catch (error: any) {
        return { error: error?.message };
    }
};

export const getContact = async (id: string) => {
    try {
        const docRef = doc(db, "contacts", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            // docSnap.data() will be undefined in this case
            return [];
        }
    } catch (error: any) {
        return { error: error?.message };
    }
};

export const getSchedule = async (id: string) => {
    try {
        const docRef = doc(db, "schedules", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            // docSnap.data() will be undefined in this case
            return [];
        }
    } catch (error: any) {
        return { error: error?.message };
    }
};

export const getJob = async (id: string) => {
    try {
        const docRef = doc(db, "jobs", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            // docSnap.data() will be undefined in this case
            return [];
        }
    } catch (error: any) {
        return { error: error?.message };
    }
};

export const deleteContact = async (id: string) => {
    try {
        await deleteDoc(doc(db, "contacts", id));
    } catch (error: any) {
        return { error: error?.message };
    }
};

export const deleteSchedule = async (id: string) => {
    try {
        await deleteDoc(doc(db, "schedules", id));
    } catch (error: any) {
        return { error: error?.message };
    }
};

const deleteJob = async (id: string) => {
    try {
        await deleteDoc(doc(db, "jobs", id));
    } catch (error: any) {
        return { error: error?.message };
    }
};

const deleteFile = async (path: string | undefined) => {
    try {
        await deleteObject(ref(storage, path));
        return "Success";
    } catch (error: any) {
        return { error: error?.message };
    }
};

export const deleteJobDetails = async (
    id: string,
    path: string | undefined
) => {
    try {
        await deleteJob(id);
        await deleteFile(path);
    } catch (error: any) {
        return { error: error?.message };
    }
};

export const uploadCV = async (name: string | undefined, file: Blob) => {
    try {
        const cvRef = ref(storage, `CVs/${name}`);
        const res = await uploadBytes(cvRef, file);
        return res;
    } catch (error: any) {
        return { error: error?.message };
    }
};

export const jobApply = async (
    cvPath: string,
    name: string,
    email: string,
    position: string
) => {
    try {
        await addDoc(collection(db, "jobs"), {
            cvPath,
            name,
            email,
            position,
        });
    } catch (error: any) {
        return { error: error?.message };
    }
};
