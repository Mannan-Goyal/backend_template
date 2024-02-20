/* eslint-disable @typescript-eslint/naming-convention */
import mongoose from 'mongoose';
import { type IKeyVal } from '../types/types';

const { Schema } = mongoose;

const DataSchema = new Schema<IKeyVal>({
    key: {
        type: String,
        required: [true, 'key is required'],
    },
});

const data = mongoose.model<IKeyVal>('backups', DataSchema);
export default data;
