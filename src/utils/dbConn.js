import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
    );
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { con: null, promise: null };
}

const dbConnect = async () => {
    if (cached.con) {
        return cached.con;
    }
    
    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose;
        });
    }

    try {
        cached.con = await cached.promise;
    } catch (error) {
        cached.promise = null;
        throw error;
    }

    return cached.con;
};

export default dbConnect;