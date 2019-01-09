import * as mongoose from 'mongoose';

export const UsersSchemas = new mongoose.Schema({
    user: String,
    password: String,
});